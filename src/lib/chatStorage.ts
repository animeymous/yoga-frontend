import { Message } from '@/types/chat';

const CHAT_STORAGE_KEY = 'ashu_yoga_chat_history';

export const chatStorage = {
  saveMessages: (messages: Message[]) => {
    try {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
  },

  loadMessages: (): Message[] => {
    try {
      const stored = localStorage.getItem(CHAT_STORAGE_KEY);
      if (!stored) return [];
      
      const messages = JSON.parse(stored);
      return messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
    } catch (error) {
      console.error('Error loading chat history:', error);
      return [];
    }
  },

  clearMessages: () => {
    try {
      localStorage.removeItem(CHAT_STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing chat history:', error);
    }
  }
}; 