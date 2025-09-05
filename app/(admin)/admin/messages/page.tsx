"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  IconSend,
  IconMessageCircle,
  IconFileText,
  IconAlertTriangle,
} from "@/components/ui/Icons";

type Conversation = {
  id: number;
  customer: string;
  email: string;
  lastMessage: string;
  unread: number;
};

type Message = {
  id: string;
  from: "customer" | "admin";
  text: string;
  time: string;
};

export default function AdminMessages() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      customer: "Alice Johnson",
      email: "alice@example.com",
      lastMessage: "Thanks for the update!",
      unread: 0,
    },
    {
      id: 2,
      customer: "Bob Smith",
      email: "bob@example.com",
      lastMessage: "Can you resend the invoice?",
      unread: 2,
    },
    {
      id: 3,
      customer: "Carol Davis",
      email: "carol@example.com",
      lastMessage: "Payment received.",
      unread: 0,
    },
  ]);
  const [activeId, setActiveId] = useState<number>(2);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m1",
      from: "customer",
      text: "Hi, can you resend the invoice?",
      time: "10:02",
    },
    { id: "m2", from: "admin", text: "Sure, sending it now.", time: "10:05" },
    { id: "m3", from: "customer", text: "Thanks!", time: "10:06" },
  ]);
  const [input, setInput] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [showUnreadOnly, setShowUnreadOnly] = useState<boolean>(false);
  const [typing, setTyping] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const endRef = useRef<HTMLDivElement | null>(null);
  const uidCounter = useRef<number>(0);
  const uid = () => `${Date.now()}_${uidCounter.current++}`;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeId]);

  const send = () => {
    if (!input.trim() || sending) return;
    setSending(true);
    const text = input.trim();
    setMessages((prev) => [
      ...prev,
      {
        id: uid(),
        from: "admin",
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInput("");
    window.toast?.("Message sent", { kind: "success", title: "Message Sent" });
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          from: "customer",
          text: "Thanks for the quick response!",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setTyping(false);
      setSending(false);
    }, 900);
  };

  const warn = () => {
    window.toast?.("Customer has unread messages", {
      kind: "warning",
      title: "Heads up",
    });
  };

  const markAllRead = () => {
    if (conversations.every((c) => c.unread === 0)) return;
    setConversations((prev) => prev.map((c) => ({ ...c, unread: 0 })));
    window.toast?.("All conversations marked as read", {
      kind: "success",
      title: "All Read",
    });
  };

  const filteredConversations = conversations
    .filter(
      (c) =>
        c.customer.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter((c) => (showUnreadOnly ? c.unread > 0 : true));

  const activeConversation = conversations.find((c) => c.id === activeId);

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Messages
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            View and reply to customer conversations
          </p>
        </div>
        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={warn}
            variant="outline"
            className="h-11 inline-flex items-center gap-2"
          >
            <IconAlertTriangle size={16} /> Warning
          </Button>
          <Button
            onClick={() =>
              setConversations((prev) => prev.map((c) => ({ ...c, unread: 0 })))
            }
            disabled={conversations.every((c) => c.unread === 0)}
            className="h-11 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white inline-flex items-center gap-2"
          >
            <IconMessageCircle size={16} /> Mark All Read
          </Button>
        </div>
      </div>

      {/* Main Card */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardContent className="p-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] h-[70vh]">
            {/* Sidebar */}
            <div className="border-r border-white/20 dark:border-gray-700/50 p-3 sm:p-4 space-y-2 overflow-y-auto h-full min-h-0 custom-scrollbar">
              {/* Search */}
              <div className="mb-2 flex items-center gap-2">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search conversations..."
                  className="w-full h-10 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Conversation List */}
              {filteredConversations.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all border backdrop-blur-sm ${
                    activeId === c.id
                      ? "bg-blue-50/80 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700"
                      : "bg-white/70 dark:bg-gray-800/70 border-white/20 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {c.customer}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {c.email}
                      </div>
                    </div>
                    {c.unread > 0 && (
                      <span className="ml-2 inline-flex items-center justify-center h-6 min-w-6 px-2 rounded-full text-xs font-semibold bg-amber-500/90 text-black shadow">
                        {c.unread}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
                    {c.lastMessage}
                  </div>
                </button>
              ))}
            </div>

            {/* Chat Area */}
            <div className="flex flex-col h-full min-h-0">
              {/* Header of chat */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-white/20 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {conversations.find((c) => c.id === activeId)?.customer}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {conversations.find((c) => c.id === activeId)?.email}
                  </div>
                </div>
                {/* Quick actions */}
                <div className="flex gap-2">
                  <Button
                    onClick={() =>
                      setMessages((prev) => [
                        ...prev,
                        {
                          id: uid(),
                          from: "admin",
                          text: "Hello! How can I help?",
                          time: new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          }),
                        },
                      ])
                    }
                    variant="outline"
                    className="h-9 px-3 inline-flex items-center gap-2"
                  >
                    <IconMessageCircle size={14} /> Quick Hello
                  </Button>
                  <Button
                    onClick={() =>
                      setMessages((prev) => [
                        ...prev,
                        {
                          id: uid(),
                          from: "admin",
                          text: "I’ve sent the report to your email.",
                          time: new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          }),
                        },
                      ])
                    }
                    variant="outline"
                    className="h-9 px-3 inline-flex items-center gap-2"
                  >
                    <IconFileText size={14} /> Send Report
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-3 custom-scrollbar">
                {messages.map((m, idx) => {
                  const prev = messages[idx - 1];
                  const showAvatar = true;

                  // Count previous consecutive messages by same sender
                  let consecutiveCount = 0;
                  for (let j = idx - 1; j >= 0; j--) {
                    if (messages[j].from === m.from) consecutiveCount++;
                    else break;
                  }
                  const showLabel = showAvatar || consecutiveCount >= 2;

                  const initials =
                    m.from === "admin"
                      ? "AD"
                      : (
                          conversations.find((c) => c.id === activeId)
                            ?.customer || "?"
                        )
                          .split(" ")
                          .map((n) => n[0])
                          .join("");

                  return (
                    <div
                      key={m.id}
                      className={`flex ${
                        m.from === "admin" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex items-end gap-2 max-w-[85%] ${
                          m.from === "admin" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        {showAvatar && (
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                              m.from === "admin"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                            }`}
                          >
                            {initials}
                          </div>
                        )}
                        <div
                          className={`rounded-2xl px-4 py-2 shadow border backdrop-blur-sm ${
                            m.from === "admin"
                              ? "bg-blue-600 text-white border-blue-500"
                              : "bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white border-white/20 dark:border-gray-700/50"
                          }`}
                        >
                          {showLabel && (
                            <div className="text-[10px] opacity-75 mb-1">
                              {m.from === "admin"
                                ? "You"
                                : conversations.find((c) => c.id === activeId)
                                    ?.customer}
                            </div>
                          )}
                          <div className="text-sm whitespace-pre-wrap break-words">
                            {m.text}
                          </div>
                          <div
                            className={`text-[10px] mt-1 ${
                              m.from === "admin"
                                ? "text-blue-100"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {m.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {typing && (
                  <div className="flex justify-start">
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-white/20 dark:border-gray-700/50 text-xs text-gray-500 dark:text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></span>
                      Customer is typing...
                    </div>
                  </div>
                )}

                <div ref={endRef} />
              </div>

              {/* Input area */}
              <div className="sticky bottom-0 z-10 border-t border-white/20 dark:border-gray-700/50 p-3 sm:p-4 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Type your message..."
                    className="flex-1 h-11 px-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button
                    onClick={send}
                    disabled={!input.trim() || sending}
                    aria-busy={sending}
                    aria-disabled={!input.trim() || sending}
                    className="h-11 px-5 disabled:opacity-50 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center gap-2"
                  >
                    {sending ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <IconSend size={16} />
                    )}
                    <span>{sending ? "Sending..." : "Send"}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
