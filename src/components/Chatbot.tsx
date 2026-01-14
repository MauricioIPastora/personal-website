"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  /** API endpoint for the chatbot backend */
  apiEndpoint?: string;
  /** Initial greeting message from the assistant */
  initialMessage?: string;
}

export function Chatbot({
  apiEndpoint = process.env.NEXT_PUBLIC_CHATBOT_API || "/api/chat",
  initialMessage = "Hi! I'm Mauricio's AI assistant. Ask me anything about his skills, projects, or experience!",
}: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "assistant",
      content: initialMessage,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show bubble periodically when chat is closed
  useEffect(() => {
    if (isOpen) {
      setShowBubble(false);
      return;
    }

    // Show bubble after 3 seconds initially
    const initialTimer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    // Then show/hide periodically
    const interval = setInterval(() => {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 4000);
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isOpen]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const generateId = () => Math.random().toString(36).substring(2, 9);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: generateId(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // TODO: Replace with actual AWS Bedrock API call
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: data.message || data.content || "I received your message!",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      // Fallback response for demo purposes
      const fallbackMessage: Message = {
        id: generateId(),
        role: "assistant",
        content:
          "I'm currently being set up! Once connected to the knowledge base, I'll be able to answer questions about Mauricio's experience, projects, and skills.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Bubble Prompt */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-6 z-50"
          >
            <div className="relative">
              <div className="bg-black/90 backdrop-blur-md border border-green-500/40 rounded-2xl rounded-br-sm px-4 py-3 shadow-lg">
                <p className="text-green-400 text-sm font-medium whitespace-nowrap">
                  Ask me a question! 💬
                </p>
              </div>
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-green-500/40" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Avatar Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full overflow-hidden border-2 border-green-500/60 shadow-lg cursor-pointer group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Pulse ring animation */}
        <div className="absolute inset-0 rounded-full border-2 border-green-500/40 animate-ping" />

        {/* Avatar image */}
        <Image
          src="/foto - Edited.jpg"
          alt="Chat with Mauricio's AI"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>

      {/* Chat UI Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-28 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-10rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Glassmorphic background */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl border border-green-500/30 rounded-2xl" />
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur opacity-50" />

            {/* Header */}
            <div className="relative flex items-center justify-between px-4 py-3 border-b border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-green-500/40">
                  <Image
                    src="/foto - Edited.jpg"
                    alt="Mauricio"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Mauricio&apos;s AI
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-400 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white hover:bg-green-500/20 rounded-full"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="relative flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-green-500/30 scrollbar-track-transparent">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-black rounded-br-sm"
                        : "bg-zinc-800/80 border border-green-500/20 text-zinc-200 rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-zinc-800/80 border border-green-500/20 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 text-green-400 animate-spin" />
                      <span className="text-zinc-400 text-sm">Thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="relative px-4 py-3 border-t border-green-500/20">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 bg-zinc-800/60 border border-green-500/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 transition-all disabled:opacity-50"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-black rounded-xl h-10 w-10 p-0 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-center text-zinc-600 text-xs mt-2">
                Powered by AWS Bedrock
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
