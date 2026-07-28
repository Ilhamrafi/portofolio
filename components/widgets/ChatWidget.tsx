"use client";

import { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2, MessageCircle, Bot, ChevronDown, RotateCcw, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

interface Message {
  id: number;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  isError?: boolean;
  retryQuestion?: string;
}

export default function ChatWidget({ isOpen, onClose, onOpen }: ChatWidgetProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: 'Hi! I\'m Ilhamrafi\'s AI Assistant. How can I help you today?',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const suggestedQuestions = [
    { label: "Tentang saya", value: "Tolong jelaskan siapa itu Ilhamrafi dan apa fokus utamanya." },
    { label: "Keahlian saya", value: "Apa saja keahlian teknis dan teknologi yang dikuasai oleh Ilham?" },
    { label: "Pengalaman Kerja", value: "Tolong ceritakan pengalaman kerja profesional Ilhamrafi sejauh ini." },
    { label: "Status & Lokasi", value: "Apakah Ilham saat ini open to work, bersedia WFO/WFH, dan berapa lama notice period-nya?" },
    { label: "Rate & Gaji", value: "Berapa rate project freelance atau ekspektasi gaji Ilhamrafi?" },
  ];

  const isAtBottom = () => {
    const el = scrollContainerRef.current;
    if (!el) return true;
    return el.scrollHeight - el.scrollTop - el.clientHeight < 50;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowScrollButton(false);
  };

  const handleScroll = () => {
    setShowScrollButton(!isAtBottom());
  };

  const fetchAIResponse = async (question: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: 'ai',
        text: data.reply || 'Sorry, something went wrong.',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }]);
      setUnreadCount(prev => prev + 1);
    } catch {
      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: 'ai',
        text: 'Sorry, I am unable to respond right now.',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isError: true,
        retryQuestion: question
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = (question: string) => {
    setMessages(prev => prev.filter(m => !(m.isError && m.retryQuestion === question)));
    fetchAIResponse(question);
  };

  const handleReset = () => {
    setMessages([{
      id: 1,
      sender: 'ai',
      text: 'Hi! I\'m Ilhamrafi\'s AI Assistant. How can I help you today?',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }]);
    setUnreadCount(0);
    setIsLoading(false);
  };

  const handleQuickReply = async (question: string) => {
    if (isLoading) return;
    setMessages(prev => [...prev, {
      id: Date.now(),
      sender: 'user',
      text: question,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }]);
    await fetchAIResponse(question);
  };

  useEffect(() => {
    if (isAtBottom()) {
      scrollToBottom();
    } else {
      setShowScrollButton(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  useEffect(() => {
    if (isLoading) scrollToBottom();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isOpen) setUnreadCount(0);
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;
    const text = message;
    setMessages(prev => [...prev, {
      id: Date.now(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }]);
    setMessage('');
    await fetchAIResponse(text);
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
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-brand to-brand-dark text-black rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300 group"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
            {/* Unread message badge */}
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {unreadCount > 9 ? '9+' : unreadCount}
              </div>
            )}
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
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-brand to-brand-dark flex items-center justify-center text-black">
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
                onClick={handleReset}
                className="w-8 h-8 sm:w-8 sm:h-8 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center active:bg-white/20"
                aria-label="Reset chat"
              >
                <RotateCcw className="w-4 h-4 text-gray-400" />
              </button>
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
              <div className="flex-1 relative overflow-hidden">
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="h-full overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scroll-smooth"
                >
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 break-words ${
                          msg.sender === 'user'
                            ? 'bg-brand text-black'
                            : msg.isError
                            ? 'bg-red-500/20 border border-red-500/30 text-white'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        <p className="text-sm sm:text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        {msg.isError && msg.retryQuestion && (
                          <button
                            onClick={() => handleRetry(msg.retryQuestion!)}
                            className="mt-2 flex items-center gap-1.5 text-xs text-red-300 hover:text-white transition-colors"
                          >
                            <RefreshCw className="w-3 h-3" />
                            Coba lagi
                          </button>
                        )}
                        <p className={`text-xs mt-1 opacity-60 leading-tight`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* Typing indicator */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/10 rounded-2xl px-4 py-3 flex items-center gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Scroll to bottom button */}
                <AnimatePresence>
                  {showScrollButton && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 8 }}
                      transition={{ duration: 0.2 }}
                      onClick={scrollToBottom}
                      className="absolute bottom-3 right-4 w-8 h-8 bg-brand text-black rounded-full shadow-lg flex items-center justify-center hover:bg-brand-dark transition-colors z-10"
                      aria-label="Scroll to bottom"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Reply Suggestions */}
              <div className="pt-2 pb-1 flex gap-2 border-t border-white/5 flex-shrink-0 overflow-x-auto px-3 sm:px-4 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => handleQuickReply(q.value)}
                    disabled={isLoading}
                    className="text-xs px-3 py-1.5 rounded-full border border-brand/40 text-brand hover:bg-brand hover:text-black transition-all duration-200 whitespace-nowrap flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {q.label}
                  </button>
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
                    placeholder={isLoading ? 'AI is typing...' : 'Type your message...'}
                    disabled={isLoading}
                    className="flex-1 px-3 sm:px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={!message.trim() || isLoading}
                    className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center bg-brand text-black rounded-full hover:bg-brand-dark transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 touch-none"
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
