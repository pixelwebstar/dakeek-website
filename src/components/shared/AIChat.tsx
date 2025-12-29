"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

interface QuickReply {
    text: string;
    response: string;
}

const QUICK_REPLIES: QuickReply[] = [
    {
        text: "What services do you offer?",
        response: "We offer AC services, plumbing, electrical work, cleaning, gas systems, stove repairs, handyman services, and 24/7 emergency support. Which service are you interested in?"
    },
    {
        text: "How fast can you arrive?",
        response: "For emergencies, we arrive in 60 minutes or less. For scheduled appointments, we arrive within your chosen 1-hour window. When do you need us?"
    },
    {
        text: "What are your prices?",
        response: "We have a standard inspection fee of AED 150, which is waived if you proceed with the repair. Final pricing depends on the specific service needed. Would you like to book an inspection?"
    },
    {
        text: "Are you available 24/7?",
        response: "Yes! Our emergency service operates 24/7 for urgent issues like AC failures, electrical problems, or plumbing leaks. Need emergency assistance right now?"
    }
];

const FAQ_RESPONSES: Record<string, string> = {
    "warranty": "All our workmanship is guaranteed for 30 days. If the same problem returns, we fix it for free. Parts carry manufacturer warranty (usually 1 year).",
    "insurance": "Yes, all our technicians are fully insured. We carry comprehensive liability insurance, so you're always protected.",
    "areas": "We serve all major freehold communities in Dubai, including Emirates Hills, Palm Jumeirah, Arabian Ranches, Jumeirah Park, and Dubai Marina.",
    "technicians": "Every technician is a full-time Dakeek employee trained in our own academy. We never use subcontractors or freelancers.",
    "payment": "We accept cash, credit cards, and bank transfers. Payment is due after service completion and your satisfaction.",
    "booking": "You can book through our contact form, WhatsApp, or by calling us directly. We'll confirm your appointment within minutes."
};

export function AIChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            text: "Hi! 👋 I'm here to help. What would you like to know about Dakeek?",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && !isMinimized) {
            setUnreadCount(0);
            inputRef.current?.focus();
        }
    }, [isOpen, isMinimized]);

    const generateBotResponse = (userMessage: string): string => {
        const lowerMessage = userMessage.toLowerCase();

        // Check for specific keywords
        for (const [keyword, response] of Object.entries(FAQ_RESPONSES)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }

        // Check for greetings
        if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon)/)) {
            return "Hello! How can I help you today?";
        }

        // Check for contact intent
        if (lowerMessage.includes("contact") || lowerMessage.includes("call") || lowerMessage.includes("speak to")) {
            return "I'd be happy to connect you! You can call us at 800-DAKEEK, WhatsApp us, or fill out our contact form. What works best for you?";
        }

        // Default response
        return "I'd be happy to help with that! For detailed assistance, you can reach our team directly via the contact form, WhatsApp, or call 800-DAKEEK. Is there anything specific I can clarify?";
    };

    const handleQuickReply = (reply: QuickReply) => {
        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: reply.text,
            sender: "user",
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);

        // Show typing indicator
        setIsTyping(true);

        // Add bot response after delay
        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: reply.response,
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);

            if (isMinimized) {
                setUnreadCount(prev => prev + 1);
            }
        }, 1000 + Math.random() * 500);
    };

    const handleSendMessage = () => {
        if (!inputText.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: "user",
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputText("");

        // Show typing indicator
        setIsTyping(true);

        // Generate and add bot response
        setTimeout(() => {
            const response = generateBotResponse(inputText);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: response,
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);

            if (isMinimized) {
                setUnreadCount(prev => prev + 1);
            }
        }, 1200 + Math.random() * 800);
    };

    return (
        <>
            {/* Floating Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#A18262] text-white rounded-full shadow-2xl flex items-center justify-center group hover:shadow-[#A18262]/50 transition-all"
                    >
                        <MessageCircle className="w-7 h-7" />
                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                                {unreadCount}
                            </span>
                        )}
                        <div className="absolute inset-0 rounded-full bg-[#A18262] opacity-75 animate-ping" style={{ animationDuration: "2s" }}></div>
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
                            height: isMinimized ? "64px" : "600px"
                        }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E5E5E5]"
                        style={{ maxWidth: "calc(100vw - 48px)" }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#111] to-[#333] text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#A18262] rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Dakeek Assistant</h3>
                                    <p className="text-xs text-gray-300 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        Online now
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                                >
                                    <Minimize2 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {!isMinimized && (
                            <>
                                {/* Messages */}
                                <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-[#FAFAF9]">
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`max-w-[75%] px-4 py-3 rounded-2xl ${message.sender === "user"
                                                    ? "bg-[#A18262] text-white"
                                                    : "bg-white text-[#111] border border-[#E5E5E5]"
                                                    }`}
                                            >
                                                <p className="text-sm leading-relaxed">{message.text}</p>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-white border border-[#E5E5E5] px-5 py-3 rounded-2xl">
                                                <div className="flex gap-1">
                                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Quick Replies */}
                                {messages.length <= 2 && (
                                    <div className="px-4 py-3 border-t border-[#E5E5E5] bg-white">
                                        <p className="text-xs text-gray-500 mb-2 font-mono uppercase tracking-wider">Quick Questions</p>
                                        <div className="flex flex-wrap gap-2">
                                            {QUICK_REPLIES.map((reply, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleQuickReply(reply)}
                                                    className="text-xs px-3 py-2 bg-[#F5F5F4] hover:bg-[#A18262] hover:text-white rounded-full transition-all border border-[#E5E5E5] hover:border-[#A18262]"
                                                >
                                                    {reply.text}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Input */}
                                <div className="p-4 border-t border-[#E5E5E5] bg-white">
                                    <div className="flex gap-2">
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                            placeholder="Type your message..."
                                            className="flex-1 px-4 py-3 bg-[#F5F5F4] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#A18262] border border-transparent focus:border-[#A18262] transition-all"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!inputText.trim()}
                                            className="w-12 h-12 bg-[#A18262] text-white rounded-full flex items-center justify-center hover:bg-[#8d7154] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
                                        >
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
