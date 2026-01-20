"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "assistant" | "user"; content: string }[]>([
    { role: "assistant", content: "Hi! I'm Dika's AI assistant. Ask me anything about his work, skills, or experience!" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = { role: "user" as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simple mock response logic
    setTimeout(() => {
      let response = "That's a great question! Onyedikachi (Dika) is a specialized Full Stack Developer with 8+ years of experience in AI Automation and modern web frameworks.";
      if (input.toLowerCase().includes("skill")) response = "He specializes in Node.js, React, Laravel, and AI integrations (OpenAI, LangChain).";
      if (input.toLowerCase().includes("contact")) response = "You can reach him via the Contact section or directly at onyedikachi@example.com.";
      
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="pointer-events-auto mb-4 w-[350px] h-[500px] bg-dark-bg border border-teal-400/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-teal-400/5 border-b border-teal-400/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center shadow-lg shadow-teal-400/20">
                  <Bot className="w-6 h-6 text-dark-bg" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-bold text-sm">Dika-AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-teal-400/70 font-mono tracking-tighter uppercase">Online • Neural Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-teal-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-teal-400 text-dark-bg font-medium rounded-tr-none' 
                      : 'bg-teal-400/5 text-gray-300 border border-teal-400/10 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-teal-400/5 border-t border-teal-400/10">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask something..."
                  className="w-full bg-dark-bg border border-teal-400/20 rounded-xl px-4 py-3 text-sm text-gray-300 outline-none focus:border-teal-400/50 transition-all font-mono"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 p-2 bg-teal-400 rounded-lg text-dark-bg hover:bg-teal-300 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-2 text-[10px] text-gray-600 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-teal-400" />
                <span>Powered by LLM & Portfolio Context</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-14 h-14 bg-teal-400 rounded-full flex items-center justify-center shadow-2xl shadow-teal-400/20 hover:scale-110 active:scale-95 transition-all group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? <X className="w-6 h-6 text-dark-bg" /> : <MessageSquare className="w-6 h-6 text-dark-bg" />}
      </button>
    </div>
  );
};
