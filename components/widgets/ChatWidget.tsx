"use client";

import { useState } from 'react';
import { X, Send, Minimize2, MessageCircle, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function ChatWidget({ isOpen, onClose, onOpen }: ChatWidgetProps) {
  const [message, setMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Hi! I\'m Ilhamrafi\'s AI Assistant. How can I help you today?',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: message,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          sender: 'ai',
          text: 'Thanks for your message! This is a demo response. In production, this would connect to an AI assistant.',
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Floating Chat Button - Always visible when chat is closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={onOpen}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#F1FFB2] to-[#C6F10E] text-black rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300 group"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
            {/* Notification badge (optional) */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden w-[calc(100vw-32px)] sm:w-[400px] ${isMinimized ? 'h-16' : 'sm:h-[480px] h-[calc(100vh-100px)]'} max-h-[calc(100vh-100px)]`}
          >
          {/* Header */}
          <div className="flex items-center justify-between px-3 sm:px-4 h-14 sm:h-16 border-b border-white/10 bg-gradient-to-r from-[#1a1a1a] to-[#222] flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 h-full min-w-0">
              <div className="relative flex items-center justify-center h-full flex-shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#F1FFB2] to-[#C6F10E] flex items-center justify-center text-black">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="absolute bottom-[calc(50%-18px)] right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]"></div>
              </div>
              <div className="flex flex-col justify-center h-full gap-0.5 min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base leading-[1] truncate">AI Assistant</h3>
                <p className="text-gray-400 text-xs leading-[1]">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1 h-full flex-shrink-0">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 sm:w-8 sm:h-8 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center active:bg-white/20"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                <Minimize2 className="w-4 h-4 text-gray-400" />
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 sm:w-8 sm:h-8 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center active:bg-white/20"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scroll-smooth">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 break-words ${
                        msg.sender === 'user'
                          ? 'bg-[#F1FFB2] text-black'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      <p className="text-sm sm:text-sm leading-relaxed">{msg.text}</p>
                      <p className={`text-xs mt-1 opacity-60 leading-tight`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={handleSendMessage}
                className="p-3 sm:p-4 border-t border-white/10 bg-[#1a1a1a] flex-shrink-0"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 sm:px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center bg-[#F1FFB2] text-black rounded-full hover:bg-[#C6F10E] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 touch-none"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
