"use client";

import { createContext, useContext, useState, type ReactNode } from 'react';
import ChatWidget from './ChatWidget';

interface ChatWidgetContextValue {
  openChat: () => void;
}

const ChatWidgetContext = createContext<ChatWidgetContextValue | null>(null);

export function ChatWidgetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatWidgetContext.Provider value={{ openChat: () => setIsOpen(true) }}>
      {children}
      <ChatWidget isOpen={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)} />
    </ChatWidgetContext.Provider>
  );
}

export function useChatWidget() {
  const ctx = useContext(ChatWidgetContext);
  if (!ctx) throw new Error('useChatWidget must be used within a ChatWidgetProvider');
  return ctx;
}
