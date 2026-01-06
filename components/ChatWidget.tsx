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
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#F1FFB2] to-[#C6F10E] text-black rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300 group"
            aria-label="Open chat"
          >
            <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
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
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '64px' : '480px',
              width: isMinimized ? '280px' : '400px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            style={{ 
              maxHeight: isMinimized ? '64px' : '480px'
            }}
          >
          {/* Header */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10 bg-gradient-to-r from-[#1a1a1a] to-[#222]">
            <div className="flex items-center gap-3 h-full">
              <div className="relative flex items-center justify-center h-full">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F1FFB2] to-[#C6F10E] flex items-center justify-center text-black">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="absolute bottom-[calc(50%-20px)] right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]"></div>
              </div>
              <div className="flex flex-col justify-center h-full gap-0.5">
                <h3 className="text-white font-semibold text-sm leading-[1]">AI Assistant</h3>
                <p className="text-gray-400 text-xs leading-[1]">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1 h-full">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                <Minimize2 className="w-4 h-4 text-gray-400" />
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.sender === 'user'
                          ? 'bg-[#F1FFB2] text-black'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'user' ? 'text-black/60' : 'text-gray-400'
                      }`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={handleSendMessage}
                className="p-4 border-t border-white/10 bg-[#1a1a1a]"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F1FFB2] focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="w-10 h-10 flex items-center justify-center bg-[#F1FFB2] text-black rounded-full hover:bg-[#C6F10E] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
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
