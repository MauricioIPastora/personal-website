import { NextRequest, NextResponse } from "next/server";
import {
  BedrockAgentRuntimeClient,
  RetrieveAndGenerateCommand,
} from "@aws-sdk/client-bedrock-agent-runtime";

// Initialize the Bedrock client
const bedrockClient = new BedrockAgentRuntimeClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { messages } = body;

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    // Get the last user message
    const lastUserMessage = [...messages]
      .reverse()
      .find((m) => m.role === "user");

    if (!lastUserMessage) {
      return NextResponse.json(
        { error: "No user message found" },
        { status: 400 }
      );
    }

    // ============================================
    // AWS Bedrock Implementation
    // ============================================

    const command = new RetrieveAndGenerateCommand({
      input: {
        text: lastUserMessage.content,
      },
      retrieveAndGenerateConfiguration: {
        type: "KNOWLEDGE_BASE",
        knowledgeBaseConfiguration: {
          knowledgeBaseId: process.env.KNOWLEDGE_BASE_ID!,
          modelArn: `arn:aws:bedrock:${
            process.env.AWS_REGION || "us-east-1"
          }::foundation-model/anthropic.claude-3-sonnet-20240229-v1:0`,
          // Optional: Customize the retrieval configuration
          retrievalConfiguration: {
            vectorSearchConfiguration: {
              numberOfResults: 5,
            },
          },
          // Optional: Add a system prompt for context
          generationConfiguration: {
            promptTemplate: {
              textPromptTemplate: `You are Mauricio Pastora's AI assistant on his personal portfolio website. 
You help visitors learn about Mauricio's skills, projects, work experience, and certifications.
Be friendly, professional, and concise in your responses.

Context from knowledge base:
$search_results$

User question: $query$

Please provide a helpful response based on the context above. If the information isn't in the context, 
say that you don't have that specific information but offer to help with something else.`,
            },
          },
        },
      },
    });

    const response = await bedrockClient.send(command);

    return NextResponse.json({
      message:
        response.output?.text ||
        "I couldn't generate a response. Please try again.",
      citations: response.citations, // Optional: include source citations
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
