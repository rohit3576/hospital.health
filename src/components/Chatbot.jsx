import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { getChatResponse } from '../services/api';
import './chatbot.css';

const QUICK_REPLIES = [
  "Book Appointment",
  "Doctor Availability",
  "Emergency Contact",
  "Hospital Timings"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Hospital Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text) => {
    const messageText = text || inputText;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Basic logic for hospital-specific keywords
    let responseText = '';
    const lowerText = messageText.toLowerCase();

    if (lowerText.includes('appointment')) {
      responseText = "You can book an appointment by clicking the 'Book Appointment' button on our homepage or by calling our reception.";
    } else if (lowerText.includes('doctor') || lowerText.includes('department')) {
      responseText = "We have specialized departments including Cardiology, Orthopedics, Pediatrics, and more. You can view our full list of doctors in the 'Doctors' section.";
    } else if (lowerText.includes('emergency')) {
      responseText = "For emergencies, please call our 24/7 hotline at +1 (555) 123-4567 immediately.";
    } else if (lowerText.includes('timing') || lowerText.includes('hour') || lowerText.includes('open')) {
      responseText = "Our hospital is open 24/7. OPD timings are generally from 9:00 AM to 6:00 PM, Monday through Saturday.";
    }

    try {
      if (responseText) {
        // If we have a predefined response, wait a bit to simulate typing
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        // Otherwise, fetch from OpenAI
        const chatHistory = messages.map(m => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text
        }));
        chatHistory.push({ role: 'user', content: messageText });
        
        responseText = await getChatResponse(chatHistory);
      }

      const botMessage = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I’m having trouble right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Toggle Button */}
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <h3>Hospital Assistant</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {msg.text}
                <span className="timestamp">{msg.timestamp}</span>
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {!isTyping && (
            <div className="quick-replies">
              {QUICK_REPLIES.map((reply, index) => (
                <button 
                  key={index} 
                  className="quick-reply-btn"
                  onClick={() => handleSend(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="send-btn" 
              onClick={() => handleSend()}
              disabled={!inputText.trim() || isTyping}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
