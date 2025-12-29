"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Minimize2, Phone, Mail, Bot, ChevronRight, Sparkles, AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";

// --- Types ---
interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    type?: 'text' | 'options' | 'form';
    options?: string[];
    timestamp: Date;
}

interface ChatFormState {
    step: 'GREETING' | 'SERVICE' | 'TYPE' | 'ISSUE' | 'CONTACT_METHOD' | 'DETAILS' | 'DONE';
    service?: string;
    serviceType?: string;
    issue?: string;
    contactMethod?: string;
    name?: string;
    contactInfo?: string;
    historyStack?: string[]; // To track history for "Back" button
}

// --- Liquid Metal Icon Component ---
const LiquidIcon = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Ambient Glow */}
            <div className={`absolute inset-0 rounded-full bg-[#A18262] blur-xl transition-opacity duration-1000 ${isOpen ? 'opacity-0' : 'opacity-40 animate-pulse'}`}></div>

            {/* Core Orb */}
            <div className={`relative w-full h-full rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 shadow-2xl ${isOpen ? 'bg-[#111] rotate-90 scale-90' : 'bg-gradient-to-br from-[#111] via-[#333] to-[#000] scale-100'}`}>
                {!isOpen && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] animate-[shimmer_3s_infinite]"></div>
                )}
                {isOpen ? (
                    <X className="w-6 h-6 text-[#A18262]" />
                ) : (
                    <Bot className="w-7 h-7 text-[#E5E5E5]" />
                )}
            </div>
            {/* Orbiting Ring */}
            {!isOpen && (
                <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] animate-[spin_10s_linear_infinite] opacity-30 pointer-events-none">
                    <circle cx="50%" cy="50%" r="48%" fill="none" stroke="#A18262" strokeWidth="1" strokeDasharray="10 20" />
                </svg>
            )}
        </div>
    );
};


export function UnifiedContactHub() {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<"menu" | "chat">("menu");
    const [isMinimized, setIsMinimized] = useState(false);

    // Chat State
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Form State
    const [formState, setFormState] = useState<ChatFormState>({ step: 'GREETING', historyStack: [] });
    const [detailsInput, setDetailsInput] = useState({ name: '', contact: '' });
    const [errors, setErrors] = useState({ name: '', contact: '' });


    // Initialize Chat Flow
    useEffect(() => {
        if (view === "chat" && messages.length === 0) {
            startChatFlow();
        }
    }, [view]);

    // Auto-scroll logic
    useEffect(() => {
        if (view === "chat" && !isMinimized) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, view, isMinimized, isTyping]);


    // --- LOGIC: Options Bot Flow ---

    const startChatFlow = () => {
        setMessages([]); // Clear chat
        setFormState({ step: 'SERVICE', historyStack: [] });
        setIsTyping(true);
        setTimeout(() => {
            const welcomeMsg: Message = {
                id: "welcome",
                role: "assistant",
                content: "Hello! I'm Dakeek's Intelligent Service Assistant. 🛠️\n\nHow can I help you today?",
                type: 'options',
                options: [
                    "AC Services", "Plumbing", "Electrical", "Handyman",
                    "Gas Services", "Stove Repair", "Other"
                ],
                timestamp: new Date()
            };
            setMessages([welcomeMsg]);
            setIsTyping(false);
        }, 800);
    };

    const handleOptionClick = (option: string) => {
        // Add User Selection to Chat
        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: option,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // Process State Transition
        processFlow(option);
    };

    const handleTextInput = (text: string) => {
        if (!text.trim()) return;
        const userMsg: Message = { id: Date.now().toString(), role: "user", content: text, timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setInputText("");
        setIsTyping(true);

        processFlow(text);
    };

    const handleBack = () => {
        // Simple "Reset" for now as true history recursion is complex in linear chat
        // Ideally, we pop the stack. For this MVP, let's offer a "Step Back" which just restarts the current logic or goes to previous known state.

        // Strategy: Based on current step, go to previous.
        // GREETING -> (none)
        // SERVICE -> GREETING (Restart)
        // TYPE -> SERVICE
        // ISSUE -> TYPE
        // CONTACT_METHOD -> TYPE/ISSUE
        // DETAILS -> CONTACT_METHOD

        let prevStep: ChatFormState['step'] = 'GREETING';

        switch (formState.step) {
            case 'TYPE': prevStep = 'SERVICE'; break;
            case 'ISSUE': prevStep = 'SERVICE'; break; // Go back to root for safety
            case 'CONTACT_METHOD': prevStep = 'TYPE'; break;
            case 'DETAILS': prevStep = 'CONTACT_METHOD'; break;
            default: startChatFlow(); return;
        }

        // Re-trigger the bot message for that state
        setFormState(prev => ({ ...prev, step: prevStep }));

        // Re-trigger the question for that step
        setIsTyping(true);
        setTimeout(() => {
            // We need to re-render the question for 'prevStep'.
            // This is a bit tricky without a proper state machine function generator. 
            // SIMPLER: Just restart flow instructions for that step.
            if (prevStep === 'SERVICE') startChatFlow();
            else {
                // Manually trigger the prompt for the step we fell back to
                let responseMsg: Message = { id: Date.now().toString(), role: "assistant", content: "", timestamp: new Date() };
                if (prevStep === 'TYPE') {
                    responseMsg.content = `What specifically do you need for ${formState.service}?`;
                    responseMsg.type = 'options';
                    responseMsg.options = ["Installation", "Maintenance", "Repair", "Other"];
                } else if (prevStep === 'CONTACT_METHOD') {
                    responseMsg.content = `How should we connect?`;
                    responseMsg.type = 'options';
                    responseMsg.options = ["Call Back", "WhatsApp", "Email"];
                }
                setMessages(prev => [...prev, responseMsg]);
                setIsTyping(false);
            }
        }, 500);
    };


    const processFlow = (input: string) => {
        setTimeout(() => {
            let responseMsg: Message = { id: Date.now().toString(), role: "assistant", content: "", timestamp: new Date() };

            switch (formState.step) {
                case 'SERVICE':
                    setFormState(prev => ({ ...prev, service: input, step: 'TYPE' }));
                    responseMsg.content = `Got it, ${input}. What specifically do you need?`;
                    responseMsg.type = 'options';
                    responseMsg.options = ["Installation", "Maintenance", "Repair", "Other"];
                    break;

                case 'TYPE':
                    setFormState(prev => ({ ...prev, serviceType: input }));
                    if (input === "Other") {
                        setFormState(prev => ({ ...prev, step: 'ISSUE' }));
                        responseMsg.content = "Could you briefly describe the issue?";
                        responseMsg.type = 'text'; // Expects typing
                    } else {
                        setFormState(prev => ({ ...prev, step: 'CONTACT_METHOD' }));
                        responseMsg.content = `Understood. How would you like us to connect with you?`;
                        responseMsg.type = 'options';
                        responseMsg.options = ["Call Back", "WhatsApp", "Email"];
                    }
                    break;

                case 'ISSUE':
                    setFormState(prev => ({ ...prev, issue: input, step: 'CONTACT_METHOD' }));
                    responseMsg.content = `Thanks for the details. How should we contact you?`;
                    responseMsg.type = 'options';
                    responseMsg.options = ["Call Back", "WhatsApp", "Email"];
                    break;

                case 'CONTACT_METHOD':
                    setFormState(prev => ({ ...prev, contactMethod: input, step: 'DETAILS' }));
                    responseMsg.content = `Great. Please provide your **Name** and **${input === 'Email' ? 'Email Address' : 'Phone Number'}** so we can confirm.`;
                    responseMsg.type = 'form'; // Triggers custom form input
                    break;

                case 'DETAILS':
                    // handled by form submit handler specifically
                    break;

                case 'DONE':
                    responseMsg.content = "Is there anything else I can help with?";
                    responseMsg.type = 'options';
                    responseMsg.options = ["Start Over", "No, thanks"];
                    break;
            }

            if (input === "Start Over") {
                startChatFlow();
                return;
            }
            if (input === "No, thanks") {
                responseMsg.content = "Have a wonderful day! 👋";
                setMessages(prev => [...prev, responseMsg]);
                setIsTyping(false);
                return;
            }

            setMessages(prev => [...prev, responseMsg]);
            setIsTyping(false);

        }, 800);
    };

    // --- Phone Formatting & Validation ---
    const formatPhoneNumber = (value: string) => {
        // Remove non-digits
        const digits = value.replace(/\D/g, '');

        // Allow user to type freely but hint at structure
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
        return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
    };

    const validateInputs = () => {
        let isValid = true;
        const newErrors = { name: '', contact: '' };

        if (!detailsInput.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        const isEmail = formState.contactMethod === 'Email';
        const val = detailsInput.contact.trim();

        if (isEmail) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(val)) {
                newErrors.contact = "Please enter a valid email address";
                isValid = false;
            }
        } else {
            // UAE Phone Validation
            // Accepted formats: 
            // +971 5x xxx xxxx, 05x xxx xxxx, 5x xxx xxxx
            const digits = val.replace(/\D/g, '');
            // Check for valid lengths: 9 (5x...), 10 (05x...), 12 (9715x...)
            const isUAE = /^(?:971|0)?5\d{8}$/.test(digits);

            if (!val) {
                newErrors.contact = "Phone number is required";
                isValid = false;
            } else if (!isUAE) {
                newErrors.contact = "Please enter a valid UAE number (e.g. 050 123 4567)";
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleFormSubmit = async () => {
        if (!validateInputs()) return;

        // Add user info message
        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: `${detailsInput.name} | ${detailsInput.contact}`,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // Prepare Payload
        const payload = {
            ...formState,
            name: detailsInput.name,
            contactInfo: detailsInput.contact
        };

        try {
            await fetch('/api/contact-submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            // Dynamic Success Message based on preference
            let successText = "✅ Request Sent!";
            if (formState.contactMethod === "Call Back") {
                successText = `✅ Request Received! We'll call you at **${detailsInput.contact}** shortly to confirm.`;
            } else if (formState.contactMethod === "WhatsApp") {
                successText = `✅ Request Received! Our team will reach out to you on **WhatsApp** (${detailsInput.contact}) momentarily.`;
            } else if (formState.contactMethod === "Email") {
                successText = `✅ Request Received! We've sent a confirmation email to **${detailsInput.contact}**.`;
            }

            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: Date.now().toString(),
                    role: "assistant",
                    content: successText,
                    timestamp: new Date()
                }]);
                setFormState(prev => ({ ...prev, step: 'DONE' }));
                setIsTyping(false);
            }, 1000);

        } catch (error) {
            console.error("Submission error", error);
            setMessages(prev => [...prev, {
                id: "err", role: "assistant", content: "I'm having trouble connecting. Please call 800-DAKEEK directly.", timestamp: new Date()
            }]);
            setIsTyping(false);
        }
    };


    const toggleHub = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setView("menu");
            setIsMinimized(false);
        }
    };

    return (
        <>
            {/* Floating Trigger */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleHub}
                className="fixed bottom-8 right-8 z-[9999] w-14 h-14 rounded-full focus:outline-none"
            >
                <LiquidIcon isOpen={isOpen} />
            </motion.button>

            {/* Main Hub Container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`fixed bottom-28 right-8 z-[9998] w-[360px] bg-[#111]/95 backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden flex flex-col shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] ${view === "chat" && !isMinimized ? "h-[650px]" : "h-auto"
                            }`}
                        style={{ maxWidth: "calc(100vw - 48px)" }}
                    >
                        {/* Top Highlight */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                        {/* VIEW: MENU */}
                        {view === "menu" && (
                            <div className="p-6 relative">
                                <MenuContent setView={setView} />
                            </div>
                        )}

                        {/* VIEW: CHAT */}
                        {view === "chat" && (
                            <div className="flex flex-col h-full relative">
                                {/* Chat Header */}
                                <div className="p-4 flex items-center justify-between border-b border-white/5 bg-white/5 backdrop-blur-md z-20">
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => setView("menu")} className="hover:bg-white/10 p-1.5 rounded-full text-white/70">
                                            <ChevronRight className="w-4 h-4 rotate-180" />
                                        </button>

                                        {/* Reset/Restart/Back Controls */}
                                        {formState.step !== 'GREETING' && (
                                            <div className="flex items-center">
                                                <button
                                                    onClick={handleBack}
                                                    className="p-1.5 hover:bg-white/10 rounded-full text-white/50 hover:text-white"
                                                    title="Go Back"
                                                >
                                                    <ArrowLeft className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={startChatFlow}
                                                    className="p-1.5 hover:bg-white/10 rounded-full text-white/50 hover:text-white"
                                                    title="Start Over"
                                                >
                                                    <RefreshCw className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        )}

                                        <div>
                                            <span className="text-sm font-medium text-white flex items-center gap-2">
                                                Assistant
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <button onClick={() => setIsMinimized(!isMinimized)} className="hover:bg-white/10 p-1.5 rounded-full text-white/60">
                                        <Minimize2 className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Chat Messages Area */}
                                {!isMinimized && (
                                    <>
                                        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                                            {messages.map((msg) => (
                                                <div key={msg.id} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                                                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed mb-1 ${msg.role === "user"
                                                        ? "bg-gradient-to-br from-[#A18262] to-[#8B6E4E] text-white rounded-tr-sm"
                                                        : "bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm backdrop-blur-md"
                                                        }`}>
                                                        {msg.content}
                                                    </div>

                                                    {/* RENDER OPTIONS */}
                                                    {msg.type === 'options' && msg.options && (
                                                        <div className="flex flex-wrap gap-2 mt-2 max-w-[90%]">
                                                            {msg.options.map(opt => (
                                                                <button
                                                                    key={opt}
                                                                    onClick={() => handleOptionClick(opt)}
                                                                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white hover:bg-[#A18262] hover:border-[#A18262] transition-colors"
                                                                >
                                                                    {opt}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* RENDER FORM */}
                                                    {msg.type === 'form' && (
                                                        <div className="w-full max-w-[85%] mt-2 p-3 bg-white/5 border border-white/10 rounded-xl space-y-2">
                                                            <input
                                                                type="text"
                                                                placeholder="Full Name"
                                                                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#A18262] focus:ring-1 focus:ring-[#A18262] outline-none transition-all`}
                                                                value={detailsInput.name}
                                                                onChange={e => {
                                                                    setDetailsInput({ ...detailsInput, name: e.target.value });
                                                                    if (errors.name) setErrors({ ...errors, name: '' });
                                                                }}
                                                            />
                                                            {errors.name && <span className="text-[10px] text-red-500 block">{errors.name}</span>}

                                                            <input
                                                                type="text"
                                                                placeholder={formState.contactMethod === "Email" ? "Email Address" : "050 123 4567"}
                                                                className={`w-full bg-white/5 border ${errors.contact ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#A18262] focus:ring-1 focus:ring-[#A18262] outline-none transition-all`}
                                                                value={detailsInput.contact}
                                                                onChange={e => {
                                                                    let val = e.target.value;
                                                                    // Auto-format phone if selected
                                                                    if (formState.contactMethod !== "Email") {
                                                                        // Only format if typing, not deleting
                                                                        if (val.length > detailsInput.contact.length) {
                                                                            val = formatPhoneNumber(val);
                                                                        }
                                                                    }
                                                                    setDetailsInput({ ...detailsInput, contact: val });
                                                                    if (errors.contact) setErrors({ ...errors, contact: '' });
                                                                }}
                                                            />
                                                            {errors.contact && <span className="text-[10px] text-red-500 block">{errors.contact}</span>}

                                                            <button
                                                                onClick={handleFormSubmit}
                                                                className="w-full py-3 bg-[#A18262] hover:bg-[#B09476] text-white rounded-lg text-sm font-medium transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                                                            >
                                                                Submit Request
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}

                                            {isTyping && (
                                                <div className="flex items-center gap-1 text-white/30 text-xs ml-2">
                                                    <Bot className="w-3 h-3" /> typing...
                                                </div>
                                            )}
                                            <div ref={messagesEndRef} />
                                        </div>

                                        {/* Input Area (Only active for 'text' inputs like 'Other' issue) */}
                                        <div className="p-3 bg-[#0a0a0a] border-t border-white/5">
                                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-1.5 py-1.5">
                                                <input
                                                    type="text"
                                                    disabled={formState.step !== 'ISSUE'}
                                                    value={inputText}
                                                    onChange={(e) => setInputText(e.target.value)}
                                                    onKeyDown={(e) => e.key === "Enter" && handleTextInput(inputText)}
                                                    placeholder={formState.step === 'ISSUE' ? "Describe your issue..." : "Select an option above..."}
                                                    className="flex-1 bg-transparent px-3 py-1 text-sm text-white placeholder-white/30 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                                />
                                                <button
                                                    onClick={() => handleTextInput(inputText)}
                                                    disabled={!inputText.trim()}
                                                    className="w-8 h-8 bg-[#A18262] text-white rounded-full flex items-center justify-center hover:scale-105 transition-all disabled:opacity-50"
                                                >
                                                    <Send className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// Extracted for readability
const MenuContent = ({ setView }: { setView: any }) => (
    <>
        <div className="mb-8 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#A18262]/10 border border-[#A18262]/30 text-[#A18262] text-[10px] font-bold tracking-widest uppercase mb-3 backdrop-blur-md">
                Support
            </span>
            <h3 className="text-2xl font-sans text-white font-light tracking-tight leading-snug">
                How can we <br /><span className="text-[#A18262] font-serif italic">help</span> you?
            </h3>
        </div>

        <div className="space-y-3 relative z-10">
            <MenuButton
                icon={<MessageCircle className="w-5 h-5 text-green-400" />}
                title="WhatsApp"
                subtitle="Fastest response"
                href="https://wa.me/971800332533"
                delay={0}
            />

            <button onClick={() => setView("chat")} className="w-full text-left">
                <MenuButton
                    icon={<Sparkles className="w-5 h-5 text-[#C0C0C0]" />}
                    title="Smart Assistant"
                    subtitle="Interactive Service Menu"
                    delay={0.1}
                    isButton
                />
            </button>

            <MenuButton
                icon={<Phone className="w-5 h-5 text-blue-400" />}
                title="Call 800-DAKEEK"
                subtitle="24/7 Operations"
                href="tel:800332533"
                delay={0.2}
            />
        </div>
    </>
);

const MenuButton = ({ icon, title, subtitle, href, delay, isButton }: any) => {
    const Wrapper = isButton ? "div" : "a";
    const props = isButton ? {} : { href, target: "_blank", rel: "noopener noreferrer" };

    return (
        <Wrapper {...props} className="block group">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all cursor-pointer group-hover:translate-x-1"
            >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#A18262]/20">
                    {icon}
                </div>
                <div>
                    <p className="font-medium text-gray-200 group-hover:text-white transition-colors">{title}</p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{subtitle}</p>
                </div>
                <ChevronRight className="w-4 h-4 ml-auto text-gray-600 group-hover:text-[#A18262] transition-colors" />
            </motion.div>
        </Wrapper>
    );
};
