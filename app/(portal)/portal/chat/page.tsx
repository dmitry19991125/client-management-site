"use client";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { IconUsers } from "@/components/ui/Icons";

export default function PortalChat() {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatStatus] = useState("online");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to our premium support chat. How can I assist you today?",
      sender: "support",
      timestamp: "10:30 AM",
      avatar: IconUsers,
      name: "Sarah Johnson",
      role: "Senior Advisor",
    },
    {
      id: 2,
      text: "Hi Sarah! I have some questions about my investment portfolio performance",
      sender: "user",
      timestamp: "10:31 AM",
      avatar: IconUsers,
      name: "John Doe",
      role: "Premium Client",
    },
    {
      id: 3,
      text: "Excellent! I'd be happy to review your portfolio with you. What specific aspects would you like to discuss?",
      sender: "support",
      timestamp: "10:32 AM",
      avatar: IconUsers,
      name: "Sarah Johnson",
      role: "Senior Advisor",
    },
    {
      id: 4,
      text: "I'm particularly interested in the recent market volatility and how it's affecting my holdings",
      sender: "user",
      timestamp: "10:33 AM",
      avatar: IconUsers,
      name: "John Doe",
      role: "Premium Client",
    },
    {
      id: 5,
      text: "Great question! Let me pull up your portfolio and analyze the recent market movements. This will just take a moment...",
      sender: "support",
      timestamp: "10:34 AM",
      avatar: IconUsers,
      name: "Sarah Johnson",
      role: "Senior Advisor",
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user" as const,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: IconUsers,
        name: "John Doe",
        role: "Premium Client",
      };

      setMessages((prev) => [...prev, newMessage]);
      setMessage("");

      // Simulate support team typing
      setIsTyping(true);
      setTimeout(() => {
        const supportResponse = {
          id: messages.length + 2,
          text: "Thank you for your message! I'm analyzing your portfolio data and will provide you with a comprehensive update shortly.",
          sender: "support" as const,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          avatar: IconUsers,
          name: "Sarah Johnson",
          role: "Senior Advisor",
        };
        setMessages((prev) => [...prev, supportResponse]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
  };

  const quickQuestions = [
    "Portfolio performance review",
    "Market analysis request",
    "Investment strategy consultation",
    "Risk assessment update",
  ];

  return (
    <div className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-3 xs:py-4 sm:py-6 md:py-8 lg:py-10 space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-screen">
      <div className="text-center space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
        <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white">
          Premium Support Chat
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">
          Connect directly with our expert financial advisors
        </p>
        <div className="flex items-center justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">
          <div
            className={`w-2 h-2 rounded-full ${
              chatStatus === "online" ? "bg-green-500" : "bg-gray-400"
            }`}
          ></div>
          <span>
            {chatStatus === "online"
              ? "Support team online"
              : "Support team offline"}
          </span>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-600/50 rounded-full text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      <Card className="max-w-[1440px] mx-auto shadow-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-t-xl p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <span className="text-xl sm:text-2xl">👨‍💼</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold">Sarah Johnson</h2>
              <p className="text-blue-100 text-base sm:text-lg">
                Senior Financial Advisor
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-blue-100 text-sm">
                  Online • Responds within 2 minutes
                </span>
              </div>
            </div>
            <div className="text-left lg:text-right">
              <div className="text-sm text-blue-100">
                Chat ID: #CHT-2024-001
              </div>
              <div className="text-xs text-blue-200">
                Started: Today 10:30 AM
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-[400px] sm:h-[500px] overflow-y-auto p-4 sm:p-6 space-y-4 bg-gradient-to-b from-slate-50/80 via-blue-50/60 to-white/80 dark:from-slate-800/80 dark:via-gray-800/60 dark:to-gray-800/80 backdrop-blur-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "support" && (
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {(() => {
                        const AvatarIcon = msg.avatar;
                        return <AvatarIcon size={20} color="white" />;
                      })()}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                      {msg.name}
                    </div>
                  </div>
                )}

                <div
                  className={`max-w-md px-5 py-4 rounded-2xl shadow-sm ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white ml-auto"
                      : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-100 dark:border-gray-700"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <div
                    className={`flex items-center justify-between mt-3 ${
                      msg.sender === "user"
                        ? "text-blue-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    <span className="text-xs">{msg.timestamp}</span>
                    {msg.sender === "user" && (
                      <span className="text-xs">✓✓</span>
                    )}
                  </div>
                </div>

                {msg.sender === "user" && (
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {(() => {
                        const AvatarIcon = msg.avatar;
                        return <AvatarIcon size={20} color="white" />;
                      })()}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                      {msg.name}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-4 justify-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    <IconUsers size={20} color="white" />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                    Sarah Johnson
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-100 dark:border-gray-700 px-5 py-4 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Sarah is typing...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-white/20 dark:border-gray-600/50 p-4 sm:p-6 bg-gradient-to-r from-white/90 to-blue-50/50 dark:from-gray-800/90 dark:to-slate-700/50 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here... (Press Enter to send, Shift+Enter for new line)"
                  rows={2}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="p-2 sm:p-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
                  title="Attach file"
                >
                  📎
                </button>
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm sm:text-base"
                  disabled={!message.trim()}
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 text-xs text-gray-500 dark:text-gray-400 gap-2 sm:gap-0">
              <span>This chat is encrypted and secure</span>
              <span>Response time: Usually within 2 minutes</span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
