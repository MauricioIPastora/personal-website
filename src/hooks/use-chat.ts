import { useState, useCallback } from "react";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export interface UseChatOptions {
  /** API endpoint for the chat backend */
  apiEndpoint?: string;
  /** System prompt for the AI */
  systemPrompt?: string;
  /** Initial messages to populate the chat */
  initialMessages?: ChatMessage[];
  /** Callback when a message is sent */
  onMessageSent?: (message: ChatMessage) => void;
  /** Callback when a response is received */
  onResponseReceived?: (message: ChatMessage) => void;
  /** Callback when an error occurs */
  onError?: (error: Error) => void;
}

export interface UseChatReturn {
  messages: ChatMessage[];
  isLoading: boolean;
  error: Error | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

/**
 * Custom hook for managing chat state and communication with AWS Bedrock
 *
 * Usage:
 * ```tsx
 * const { messages, isLoading, sendMessage } = useChat({
 *   apiEndpoint: '/api/chat',
 *   systemPrompt: 'You are a helpful assistant...'
 * });
 * ```
 *
 * AWS Bedrock Integration:
 * Create an API route at /api/chat that:
 * 1. Receives the messages array
 * 2. Calls AWS Bedrock with your knowledge base
 * 3. Returns the response
 *
 * Example API route (src/app/api/chat/route.ts):
 * ```ts
 * import { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand } from "@aws-sdk/client-bedrock-agent-runtime";
 *
 * const client = new BedrockAgentRuntimeClient({
 *   region: process.env.AWS_REGION,
 *   credentials: {
 *     accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
 *     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
 *   },
 * });
 *
 * export async function POST(request: Request) {
 *   const { messages } = await request.json();
 *   const lastMessage = messages[messages.length - 1];
 *
 *   const command = new RetrieveAndGenerateCommand({
 *     input: { text: lastMessage.content },
 *     retrieveAndGenerateConfiguration: {
 *       type: "KNOWLEDGE_BASE",
 *       knowledgeBaseConfiguration: {
 *         knowledgeBaseId: process.env.KNOWLEDGE_BASE_ID!,
 *         modelArn: `arn:aws:bedrock:${process.env.AWS_REGION}::foundation-model/anthropic.claude-3-sonnet-20240229-v1:0`,
 *       },
 *     },
 *   });
 *
 *   const response = await client.send(command);
 *   return Response.json({ message: response.output?.text });
 * }
 * ```
 */
export function useChat({
  apiEndpoint = "/api/chat",
  systemPrompt,
  initialMessages = [],
  onMessageSent,
  onResponseReceived,
  onError,
}: UseChatOptions = {}): UseChatReturn {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const generateId = () => Math.random().toString(36).substring(2, 9);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: ChatMessage = {
        id: generateId(),
        role: "user",
        content: content.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      onMessageSent?.(userMessage);
      setIsLoading(true);
      setError(null);

      try {
        // Build messages array for API
        const apiMessages = [
          ...(systemPrompt
            ? [{ role: "system" as const, content: systemPrompt }]
            : []),
          ...messages.map((m) => ({ role: m.role, content: m.content })),
          { role: userMessage.role, content: userMessage.content },
        ];

        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: apiMessages }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const assistantMessage: ChatMessage = {
          id: generateId(),
          role: "assistant",
          content: data.message || data.content || data.response || "",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
        onResponseReceived?.(assistantMessage);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        setError(error);
        onError?.(error);

        // Add error message to chat
        const errorMessage: ChatMessage = {
          id: generateId(),
          role: "assistant",
          content:
            "I'm sorry, I encountered an error. Please try again later.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [
      apiEndpoint,
      isLoading,
      messages,
      onError,
      onMessageSent,
      onResponseReceived,
      systemPrompt,
    ]
  );

  const clearMessages = useCallback(() => {
    setMessages(initialMessages);
    setError(null);
  }, [initialMessages]);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    setMessages,
  };
}
