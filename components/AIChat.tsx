
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, Minimize2 } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse, Chat } from '@google/genai';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Alex's AI assistant. Ask me anything about his projects, experience, or tech stack." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  // Initialize chat session once
  useEffect(() => {
    try {
      if (!process.env.API_KEY) {
        setError("API Key missing. Chat disabled.");
        return;
      }
      chatSessionRef.current = createChatSession();
    } catch (e) {
      console.error("Failed to init chat", e);
      setError("Failed to initialize AI.");
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const streamResult = await sendMessageToGemini(chatSessionRef.current, userMessage);
      
      // Add a placeholder for the model response
      setMessages(prev => [...prev, { role: 'model', text: '', isStreaming: true }]);

      let fullText = '';
      
      for await (const chunk of streamResult) {
        const chunkText = (chunk as GenerateContentResponse).text;
        if (chunkText) {
          fullText += chunkText;
          setMessages(prev => {
            const newHistory = [...prev];
            const lastMsg = newHistory[newHistory.length - 1];
            if (lastMsg.role === 'model') {
              lastMsg.text = fullText;
            }
            return newHistory;
          });
        }
      }
      
      // Mark streaming as done
      setMessages(prev => {
        const newHistory = [...prev];
        const lastMsg = newHistory[newHistory.length - 1];
        lastMsg.isStreaming = false;
        return newHistory;
      });

    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error connecting to the AI service." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (error) return null; // Don't render if configuration is broken

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-background rounded-full shadow-lg hover:scale-110 transition-transform duration-200 group flex items-center justify-center border border-white/10"
        >
          <Sparkles className="w-6 h-6 group-hover:animate-spin" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-background/95 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-up">
          
          {/* Header */}
          <div className="p-4 border-b border-border/40 bg-surface/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-sm text-primary">Portfolio Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-secondary hover:text-primary transition-colors"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-background rounded-tr-none'
                      : 'bg-surface/80 backdrop-blur-sm border border-border/30 text-primary rounded-tl-none'
                  }`}
                >
                  {msg.text}
                  {msg.isStreaming && (
                    <span className="inline-block w-1.5 h-3 ml-1 bg-secondary animate-pulse"/>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my stack..."
                className="w-full bg-surface/50 border border-border/30 rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all text-primary placeholder-secondary"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-1.5 bg-primary text-background rounded-full hover:opacity-80 disabled:opacity-50 transition-all"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="text-center mt-2">
               <p className="text-[10px] text-secondary">Powered by Gemini 2.5 Flash</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
