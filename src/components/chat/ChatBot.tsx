"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle, Copy, RotateCcw, Info, Download, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Message, COURSES } from '@/types/chat';
import { chatStorage } from '@/lib/chatStorage';
import { CourseCard } from './CourseCard';
import { theme } from '@/styles/theme';

const SUGGESTED_PROMPTS = [
  "Tell me about your 200-hour YTT in Rishikesh",
  "What's included in the course fee?",
  "What's the daily schedule like?",
  "Do you provide accommodation during training?",
  "What certification do I receive?",
  "What are the prerequisites for joining?",
  "Tell me about the teachers",
  "What's the difference between Rishikesh and Goa locations?"
];

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Namaste! 🙏 I\'m Ashu, your yoga guide. I can help you with:\n\n• Yoga Teacher Training Programs (100hr, 200hr, 300hr, 500hr)\n• Course details and curriculum\n• Locations (Rishikesh, Goa, Bali)\n• Accommodation and facilities\n• Course fees and registration\n\nHow may I assist you on your yoga journey today?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chat history on mount
  useEffect(() => {
    const savedMessages = chatStorage.loadMessages();
    if (savedMessages.length > 0) {
      setMessages(savedMessages);
    }
  }, []);

  // Save messages when they change
  useEffect(() => {
    if (messages.length > 1) { // Don't save if only initial message
      chatStorage.saveMessages(messages);
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get response');
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I apologize, but I encountered an error. Please try again later.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (prompt: string) => {
    setInputMessage(prompt);
    handleSendMessage({ preventDefault: () => {} } as React.FormEvent);
  };

  const handleCourseEnquiry = (courseId: string) => {
    const course = COURSES.find(c => c.id === courseId);
    if (course) {
      handleSuggestionClick(`Tell me more about the ${course.title}`);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const clearChat = () => {
    setMessages(initialMessages);
    chatStorage.clearMessages();
  };

  const renderMessage = (message: Message) => {
    const isBot = message.sender === 'bot';
    
    return (
      <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
        <div
          className={`group relative max-w-[80%] p-3 rounded-lg ${
            isBot
              ? 'bg-gray-100 text-gray-800 rounded-bl-none'
              : 'bg-primary text-white rounded-br-none'
          }`}
        >
          {isBot && message.text.includes('course') && (
            <div className="mt-4 space-y-4">
              {COURSES.slice(0, 2).map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnquire={handleCourseEnquiry}
                />
              ))}
            </div>
          )}
          <div className="whitespace-pre-wrap">{message.text}</div>
          <button
            onClick={() => copyToClipboard(message.text)}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-[#7C9070] text-white p-4 rounded-full shadow-lg hover:bg-[#7C9070]/90 transition-all duration-300 z-50 group"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-[#7C9070] text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          Chat with Ashu
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed md:bottom-20 md:right-4 bottom-0 right-0 w-full md:w-[400px] h-[100dvh] md:h-[600px] bg-white rounded-none md:rounded-lg shadow-xl flex flex-col z-50"
            style={{
              fontFamily: theme.fonts.body,
            }}
          >
            {/* Header */}
            <div className="p-4 bg-[#7C9070] text-white rounded-none md:rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/yogabrandlogo1.png"
                  alt="Ashu Yoga"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold" style={{ fontFamily: theme.fonts.heading }}>
                    Ashu Yoga Assistant
                  </h3>
                  <p className="text-xs opacity-90">Online | Responds instantly</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={clearChat}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Clear chat"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F5F0]">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7C9070]/10 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-[#7C9070]" />
                  </div>
                  <h4 className="text-lg font-medium mb-2" style={{ fontFamily: theme.fonts.heading }}>
                    Welcome to Ashu Yoga
                  </h4>
                  <p className="text-sm mb-6">Ask me anything about our yoga courses and training programs</p>
                  <div className="grid gap-2">
                    {SUGGESTED_PROMPTS.map((prompt, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(prompt)}
                        className="text-left p-3 rounded-lg bg-white hover:bg-gray-50 transition-colors text-sm shadow-sm"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <div key={message.id}>
                    {renderMessage(message)}
                  </div>
                ))
              )}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 p-3 rounded-lg rounded-bl-none shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-[#7C9070] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#7C9070] rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-[#7C9070] rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="text-center text-[#D48166] text-sm">
                  {error}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            {messages.length > 0 && (
              <div className="p-2 border-t bg-white">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#7C9070] scrollbar-track-transparent">
                  {SUGGESTED_PROMPTS.slice(0, 4).map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(prompt)}
                      className="flex-shrink-0 px-3 py-1 text-sm bg-[#F5F5F0] hover:bg-[#7C9070]/10 text-[#2C3639] rounded-full transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C9070] resize-none min-h-[44px] max-h-[120px] bg-[#F5F5F0]"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                />
                <button
                  type="submit"
                  className="bg-[#7C9070] text-white p-2 rounded-lg hover:bg-[#7C9070]/90 transition-colors disabled:opacity-50"
                  disabled={isTyping || !inputMessage.trim()}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
                <span>Press Enter to send, Shift + Enter for new line</span>
                {isTyping && <RotateCcw className="w-4 h-4 animate-spin text-[#7C9070]" />}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot; 