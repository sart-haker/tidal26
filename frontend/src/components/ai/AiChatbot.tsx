"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { sendAiChat, runAiAnalysis } from "@/lib/api";
import { buildDataSummary } from "@/lib/data/summarize";
import type { AiChatMessage } from "@/lib/types";
import {
  X,
  Send,
  Sparkles,
  Minimize2,
  AlertTriangle,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/cn";

// ── Chat bubble ────────────────────────────────────────────────────────

function ChatBubble({ message }: { message: AiChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex gap-2", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="shrink-0 mt-1">
          <Image
            src="/snowman-v4.png"
            alt="TIDAL AI"
            width={28}
            height={28}
            className="rounded-full"
          />
        </div>
      )}
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
          isUser
            ? "bg-accent-primary text-white rounded-br-sm"
            : "bg-surface/80 backdrop-blur-sm border border-border text-text-primary rounded-bl-sm"
        )}
      >
        <div className="whitespace-pre-wrap break-words">{message.content}</div>
        {message.sources && message.sources.length > 0 && (
          <div className="mt-2 pt-1.5 border-t border-white/10 flex flex-wrap gap-1">
            {message.sources.map((s) => (
              <span
                key={s}
                className={cn(
                  "text-[10px] rounded px-1.5 py-0.5",
                  isUser
                    ? "bg-white/15 text-white/80"
                    : "bg-border/40 text-text-muted"
                )}
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main chatbot widget ────────────────────────────────────────────────

export function AiChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<AiChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build the data summary once (memoised by reference stability)
  const dataContext = useRef(buildDataSummary("all")).current;

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  // Send a message
  const handleSend = async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;

    setError(null);
    const userMsg: AiChatMessage = { role: "user", content: msg };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const { reply, sources } = await sendAiChat(msg, "all", updated, dataContext);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply, sources },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I ran into an issue connecting to the AI service. Make sure the backend is running and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Quick analysis
  const handleQuickAnalysis = async () => {
    setError(null);
    const userMsg: AiChatMessage = {
      role: "user",
      content: "Give me a quick summary of the pipeline data and highlight anything critical.",
    };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const result = await runAiAnalysis("all", undefined, dataContext);
      const formatted = [
        result.summary,
        "",
        ...(result.insights.length > 0
          ? [
              "**Key Findings:**",
              ...result.insights.map(
                (i) =>
                  `${i.severity === "critical" ? "🔴" : i.severity === "warning" ? "🟡" : "🔵"} **${i.title}** — ${i.detail}`
              ),
            ]
          : []),
        "",
        ...(result.recommendations.length > 0
          ? [
              "**Recommendations:**",
              ...result.recommendations.map((r, idx) => `${idx + 1}. ${r}`),
            ]
          : []),
      ].join("\n");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: formatted },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Couldn't run the analysis right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  const suggestedQuestions = [
    "What are the most critical anomalies?",
    "Summarize growth trends across all runs",
    "Which areas need immediate attention?",
    "How has corrosion changed from 2007 to 2022?",
  ];

  return (
    <>
      {/* ── Floating snowman button ───────────────────────────────── */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-4 right-4 z-50 group",
          "h-20 w-20",
          "transition-all duration-300 hover:scale-110 active:scale-95",
          "flex items-center justify-center",
          "drop-shadow-lg hover:drop-shadow-xl",
          open && "scale-0 opacity-0 pointer-events-none"
        )}
        aria-label="Open AI Chat"
      >
        <Image
          src="/snowman-v4.png"
          alt="TIDAL AI Snowman"
          width={80}
          height={80}
          className="object-contain group-hover:brightness-110 transition-all duration-300"
        />
      </button>

      {/* ── Chat panel ─────────────────────────────────────────────── */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "w-[380px] max-w-[calc(100vw-2rem)]",
          "h-[560px] max-h-[calc(100vh-3rem)]",
          "rounded-2xl overflow-hidden",
          "bg-background/80 backdrop-blur-xl",
          "border border-border-bright",
          "shadow-2xl shadow-black/20",
          "flex flex-col",
          "transition-all duration-300 origin-bottom-right",
          open
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface/60 backdrop-blur-sm shrink-0">
          <Image
            src="/snowman-v4.png"
            alt="TIDAL AI"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-text-primary leading-tight">
              TIDAL AI
            </h3>
            <p className="text-[10px] text-text-muted">
              Pipeline integrity assistant
            </p>
          </div>
          <div className="flex items-center gap-1">
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="p-1.5 rounded-lg hover:bg-surface-hover text-text-muted hover:text-text-secondary transition-colors"
                title="Clear chat"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            )}
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-surface-hover text-text-muted hover:text-text-secondary transition-colors"
              title="Close"
            >
              <Minimize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {/* Empty state */}
          {messages.length === 0 && (
            <div className="flex flex-col items-center text-center pt-6 pb-2 space-y-4">
              <Image
                src="/snowman-v4.png"
                alt="TIDAL AI"
                width={64}
                height={64}
                className="opacity-80"
              />
              <div>
                <p className="text-sm font-medium text-text-primary">
                  Hey! I&apos;m your pipeline analyst.
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Ask me anything about anomalies, growth trends, or clusters.
                </p>
              </div>

              {/* Quick analysis button */}
              <button
                onClick={handleQuickAnalysis}
                className="flex items-center gap-2 rounded-xl bg-accent-primary/10 border border-accent-primary/20 px-4 py-2.5 text-xs font-medium text-accent-primary hover:bg-accent-primary/20 transition-colors"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Run Quick Analysis
              </button>

              {/* Suggested questions */}
              <div className="w-full space-y-1.5 pt-2">
                <p className="text-[10px] uppercase tracking-wider text-text-muted font-medium">
                  Try asking
                </p>
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="block w-full text-left text-xs bg-surface/60 hover:bg-surface-hover rounded-lg px-3 py-2 text-text-secondary hover:text-text-primary transition-colors border border-transparent hover:border-border"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat messages */}
          {messages.map((msg, i) => (
            <ChatBubble key={i} message={msg} />
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex gap-2 items-start">
              <div className="shrink-0 mt-1">
                <Image
                  src="/snowman-v4.png"
                  alt="TIDAL AI"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
              </div>
              <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          {/* Error banner */}
          {error && !loading && (
            <div className="flex items-center gap-2 rounded-lg bg-status-critical/10 border border-status-critical/20 px-3 py-2">
              <AlertTriangle className="h-3.5 w-3.5 text-status-critical shrink-0" />
              <p className="text-[11px] text-status-critical">{error}</p>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input bar */}
        <div className="shrink-0 border-t border-border bg-surface/40 backdrop-blur-sm px-3 py-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your pipeline data..."
              className="flex-1 rounded-xl border border-border bg-background/60 px-3.5 py-2 text-[13px] text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-transparent"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className={cn(
                "shrink-0 h-9 w-9 rounded-xl flex items-center justify-center transition-all",
                input.trim() && !loading
                  ? "bg-accent-primary text-white hover:bg-accent-light active:scale-95"
                  : "bg-border/30 text-text-muted cursor-not-allowed"
              )}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
