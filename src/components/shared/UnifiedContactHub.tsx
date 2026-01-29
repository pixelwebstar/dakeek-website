"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Minimize2, Phone, Mail, Bot, ChevronRight, Sparkles, AlertCircle, ArrowLeft, RefreshCw, ArrowRight } from "lucide-react";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { contactFormSchema } from "@/lib/schemas";
import { SERVICE_TYPES, CONTACT_METHODS } from "@/lib/constants";

// --- Types ---
interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    type?: 'text' | 'options' | 'form';
    options?: string[];
    isMultiSelect?: boolean;
    timestamp: Date;
}

interface ChatFormState {
    step: 'GREETING' | 'SERVICE' | 'TYPE' | 'ISSUE' | 'CONTACT_METHOD' | 'DETAILS' | 'DONE';
    services: string[]; // Changed to array
    serviceType?: string;
    issue?: string;
    contactMethod?: string;
    name?: string;
    contactInfo?: string;
    confirmationEmail?: string; // Optional email for notifications
    countryCode?: string;
    historyStack?: string[];
}

// --- Minimal Premium Icon Component ---
const LiquidIcon = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className={`relative w-full h-full rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border border-white/10 ${isOpen ? 'bg-[#111] rotate-90' : 'bg-[#0c0c0c] hover:bg-[#111]'}`}>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            {isOpen ? (
                <X className="w-6 h-6 text-white" />
            ) : (
                <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
            )}
        </div>
    );
};


export default function UnifiedContactHub() {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<"menu" | "chat">("menu");

    // Chat State
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    // Form State
    const [formState, setFormState] = useState<ChatFormState>({ step: 'GREETING', services: [], historyStack: [] });
    const [detailsInput, setDetailsInput] = useState({ name: '', contact: '', confirmationEmail: '', countryCode: '+971' });
    const [errors, setErrors] = useState({ name: '', contact: '', confirmationEmail: '' });

    // Multi-Select Temp State
    const [currentSelections, setCurrentSelections] = useState<string[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);


    // Initialize Chat Flow
    useEffect(() => {
        if (view === "chat" && messages.length === 0) {
            startChatFlow();
        }
    }, [view]);

    // Click Outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && containerRef.current && !containerRef.current.contains(event.target as Node) && triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        if (view === "chat") messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, view, isTyping]);

    // Listen for external open triggers
    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            setView("chat");
        };
        window.addEventListener('open-chat', handleOpen);
        return () => window.removeEventListener('open-chat', handleOpen);
    }, []);


    // --- LOGIC: Options Bot Flow ---

    const startChatFlow = () => {
        setMessages([]);
        setFormState({ step: 'SERVICE', services: [], historyStack: [] });
        setCurrentSelections([]);
        setIsTyping(true);
        setTimeout(() => {
            const welcomeMsg: Message = {
                id: "welcome",
                role: "assistant",
                content: "Hello! I'm Dakeek's Intelligent Service Assistant. 🛠️\n\nSelect one or more services you need:",
                type: 'options',
                isMultiSelect: true,
                options: [...SERVICE_TYPES],
                timestamp: new Date()
            };
            setMessages([welcomeMsg]);
            setIsTyping(false);
        }, 800);
    };

    const handleOptionClick = (option: string, isMulti: boolean = false) => {
        if (isProcessing) return;

        if (isMulti) {
            setCurrentSelections(prev => {
                const newSel = prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option];
                return newSel;
            });
            return;
        }

        setIsProcessing(true);
        setMessages(prev => prev.map(msg => {
            if (msg.role === 'assistant' && msg.type === 'options') return { ...msg, options: undefined };
            return msg;
        }));

        const userMsg: Message = { id: Date.now().toString(), role: "user", content: option, timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);
        processFlow(option);
    };

    const confirmSelection = () => {
        if (currentSelections.length === 0 || isProcessing) return;
        setIsProcessing(true);

        const finalSelection = [...currentSelections];
        setFormState(prev => ({ ...prev, services: finalSelection }));

        setMessages(prev => prev.map(msg => {
            if (msg.role === 'assistant' && msg.type === 'options') return { ...msg, options: undefined };
            return msg;
        }));

        const userMsg: Message = { id: Date.now().toString(), role: "user", content: finalSelection.join(", "), timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        processFlow(finalSelection);
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
        let prevStep: ChatFormState['step'] = 'GREETING';
        switch (formState.step) {
            case 'TYPE': prevStep = 'SERVICE'; break;
            case 'ISSUE': prevStep = 'TYPE'; break;
            case 'CONTACT_METHOD': prevStep = 'ISSUE'; break;
            case 'DETAILS': prevStep = 'CONTACT_METHOD'; break;
            default: startChatFlow(); return;
        }
        if (prevStep === 'SERVICE') { startChatFlow(); return; }
        setFormState(prev => ({ ...prev, step: prevStep }));
        startChatFlow();
    };


    const processFlow = (input: string | string[]) => {
        setTimeout(() => {
            const responseMsg: Message = { id: Date.now().toString(), role: "assistant", content: "", timestamp: new Date() };
            setIsProcessing(false);

            switch (formState.step) {
                case 'SERVICE':
                    const selectedServices = Array.isArray(input) ? input : [input];
                    setFormState(prev => ({ ...prev, services: selectedServices, step: 'TYPE' }));

                    if (selectedServices.length > 1) {
                        responseMsg.content = `Got it: ${selectedServices.join(", ")}. \n\nCould you briefly describe what checks or repairs you need?`;
                        setFormState(prev => ({ ...prev, step: 'ISSUE' }));
                        responseMsg.type = 'text';
                    } else {
                        const singleData = selectedServices[0];
                        responseMsg.content = `Got it, ${singleData}. What specifically do you need?`;
                        responseMsg.type = 'options';

                        // Dynamic sub-options could be moved to constants as well for full centralization
                        if (singleData === "Cleaning Services") responseMsg.options = ["Deep Cleaning", "Water Tank", "Sofa / Carpet", "General", "Other"];
                        else if (singleData === "Handyman Services") responseMsg.options = ["Furniture Assembly", "Wall Mounting", "Curtains/Blinds", "Repairs", "Other"];
                        else if (singleData === "Emergency") { responseMsg.content = "🚨 Priority Mode. What is the emergency?"; responseMsg.options = ["Water Leak / Flood", "Power Outage", "AC Failure", "Gas Issue", "Other"]; }
                        else if (singleData === "Gas & Cookers") responseMsg.options = ["Not Lighting", "Yellow Flame", "Gas Leak", "Maintenance", "Other"];
                        else responseMsg.options = ["Installation", "Maintenance", "Repair", "Inspection", "Other"];
                    }
                    break;

                case 'TYPE':
                    setFormState(prev => ({ ...prev, serviceType: input as string }));
                    if (input === "Other") {
                        setFormState(prev => ({ ...prev, step: 'ISSUE' }));
                        responseMsg.content = "Could you briefly describe the issue?";
                        responseMsg.type = 'text';
                    } else {
                        setFormState(prev => ({ ...prev, step: 'CONTACT_METHOD' }));
                        responseMsg.content = `Understood. How would you like us to connect with you?`;
                        responseMsg.type = 'options';
                        responseMsg.options = [...CONTACT_METHODS];
                    }
                    break;

                case 'ISSUE':
                    setFormState(prev => ({ ...prev, issue: input as string, step: 'CONTACT_METHOD' }));
                    responseMsg.content = `Thanks for the details. How should we contact you?`;
                    responseMsg.type = 'options';
                    responseMsg.options = [...CONTACT_METHODS];
                    break;

                case 'CONTACT_METHOD':
                    setFormState(prev => ({ ...prev, contactMethod: input as string, step: 'DETAILS' }));
                    responseMsg.content = `Great. Please provide your **Name** and **${input === 'Email' ? 'Email Address' : 'Phone Number'}** so we can confirm.`;
                    responseMsg.type = 'form';
                    break;

                case 'DETAILS': break;

                case 'DONE':
                    responseMsg.content = "Is there anything else I can help with?";
                    responseMsg.type = 'options';
                    responseMsg.options = ["Start Over", "No, thanks"];
                    break;
            }

            if (input === "Start Over") { startChatFlow(); return; }
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
    const validateInputs = () => {
        let isValid = true;
        const newErrors = { name: '', contact: '', confirmationEmail: '' };

        // 1. Create a validation object
        const validationPayload = {
            name: detailsInput.name,
            phone: formState.contactMethod !== 'Email' ? detailsInput.contact : "0000000000", // Dummy for strict schema if email
            email: formState.contactMethod === 'Email' ? detailsInput.contact : (detailsInput.confirmationEmail || ""),
            services: formState.services,
            location: "Chat Request", // Default
            contactMethod: formState.contactMethod
        };

        const result = contactFormSchema.safeParse(validationPayload);

        if (!result.success) {
            result.error.issues.forEach(issue => {
                if (issue.path.includes("name")) newErrors.name = issue.message;
                if (issue.path.includes("email") && formState.contactMethod === 'Email') newErrors.contact = issue.message; // Mapping email error to contact field
                if (issue.path.includes("phone") && formState.contactMethod !== 'Email') newErrors.contact = issue.message;
                if (issue.path.includes("email") && formState.contactMethod !== 'Email' && detailsInput.confirmationEmail) newErrors.confirmationEmail = issue.message;
            });
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleFormSubmit = async () => {
        if (!validateInputs()) return;

        const userMsg: Message = { id: Date.now().toString(), role: "user", content: `${detailsInput.name} | ${detailsInput.contact}`, timestamp: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        const payload = {
            ...formState,
            services: formState.services,
            name: detailsInput.name,
            location: "Chat Concierge", // Default location for chat requests
            // Schema requires phone. Use contact if phone, else dummy if email.
            phone: formState.contactMethod === 'Email' ? "0000000000" : detailsInput.contact,
            email: formState.contactMethod === 'Email' ? detailsInput.contact : (detailsInput.confirmationEmail || ""),
            contactMethod: formState.contactMethod,
            serviceType: formState.serviceType,
            issue: formState.issue
        };

        try {
            const response = await fetch('/api/contact-submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const result = await response.json();
                console.error("Chat API Error:", result);
                throw new Error(result.error || "Server error");
            }

            let successText = "✅ Request Sent!";
            if (formState.contactMethod === "Call Back") successText = `✅ Request Received! We'll call you at **${detailsInput.contact}** shortly.`;
            else if (formState.contactMethod === "WhatsApp") successText = `✅ Request Received! We'll message **${detailsInput.contact}** shortly.`;
            else if (formState.contactMethod === "Email") successText = `✅ Request Received! Check your email at **${detailsInput.contact}**.`;

            setTimeout(() => {
                setMessages(prev => [...prev, { id: Date.now().toString(), role: "assistant", content: successText, timestamp: new Date() }]);
                setFormState(prev => ({ ...prev, step: 'DONE' }));
                setIsTyping(false);
            }, 1000);

        } catch (error) {
            console.error("Submission error", error);
            setMessages(prev => [...prev, { id: "err", role: "assistant", content: "Connection error. Please call +971 54 247 2151.", timestamp: new Date() }]);
            setIsTyping(false);
        }
    };


    const toggleHub = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setView("menu");
    };

    return (
        <>
            {/* Floating Trigger */}
            <motion.button
                ref={triggerRef}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleHub}
                className="fixed bottom-8 right-8 z-[9999] w-14 h-14 rounded-full focus:outline-none"
                aria-label={isOpen ? "Close Support Chat" : "Open Support Chat"}
            >
                <LiquidIcon isOpen={isOpen} />
            </motion.button>

            {/* Main Hub Container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={containerRef}
                        layout
                        initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`fixed bottom-24 right-4 md:right-8 md:bottom-28 z-[9998] 
                            w-[calc(100vw-32px)] md:w-[380px] 
                            bg-black/80 backdrop-blur-[40px] border border-white/10 
                            rounded-[32px] overflow-hidden flex flex-col 
                            shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] 
                            ${view === "chat" ? "h-[600px] max-h-[80dvh]" : "h-auto max-h-[80dvh]"}`}
                        style={{ transformOrigin: "bottom right" }}
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
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => setView("menu")} className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors border border-white/5">
                                            <ChevronRight className="w-4 h-4 rotate-180" />
                                        </button>
                                        {formState.step !== 'GREETING' && (
                                            <div className="flex items-center gap-2 border-l border-white/10 pl-3">
                                                <button onClick={handleBack} className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors border border-white/5"><ArrowLeft className="w-4 h-4" /></button>
                                                <button onClick={startChatFlow} className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors border border-white/5"><RefreshCw className="w-3.5 h-3.5" /></button>
                                            </div>
                                        )}
                                        <div><span className="text-sm font-medium text-white flex items-center gap-2">Assistant <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span></span></div>
                                    </div>
                                </div>

                                {/* Chat Messages Area */}
                                <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                                    {messages.map((msg) => (
                                        <div key={msg.id} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                                            <div className={`max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed mb-2 shadow-sm ${msg.role === "user" ? "bg-[#333] text-white rounded-br-sm" : "bg-white/10 border border-white/5 text-gray-100 rounded-bl-sm backdrop-blur-md"}`}>
                                                {msg.content}
                                            </div>
                                            {msg.type === 'options' && msg.options && (
                                                <div className="mt-3 w-full">
                                                    <div className={`grid gap-2 ${msg.options.length > 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                                        {msg.options.map((opt, i) => {
                                                            const isSelected = currentSelections.includes(opt);
                                                            return (
                                                                <button
                                                                    key={opt}
                                                                    onClick={() => handleOptionClick(opt, msg.isMultiSelect)}
                                                                    className={`px-4 py-3 rounded-xl border text-xs font-medium transition-all text-left flex items-center justify-between group ${isSelected && msg.isMultiSelect ? 'bg-[#5A4A32] border-[#5A4A32] text-white shadow-lg' : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'}`}
                                                                >
                                                                    {opt}
                                                                    {msg.isMultiSelect ? (
                                                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${isSelected ? 'border-white bg-white/20' : 'border-white/30'}`}>
                                                                            {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                                                        </div>
                                                                    ) : (
                                                                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                    )}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                    {msg.isMultiSelect && currentSelections.length > 0 && (
                                                        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} onClick={confirmSelection} className="w-full mt-3 py-3 bg-white text-black font-bold rounded-xl text-sm hover:bg-gray-200 transition-colors shadow-lg flex items-center justify-center gap-2">
                                                            Next <ArrowRight className="w-4 h-4" />
                                                        </motion.button>
                                                    )}
                                                </div>
                                            )}
                                            {msg.type === 'form' && (
                                                <div className="w-full max-w-[85%] mt-2 p-3 bg-white/5 border border-white/10 rounded-xl space-y-2">
                                                    <input type="text" placeholder="Full Name" className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#5A4A32] focus:ring-1 focus:ring-[#5A4A32] outline-none transition-all`} value={detailsInput.name} onChange={e => { setDetailsInput({ ...detailsInput, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: '' }); }} />
                                                    {errors.name && <span className="text-[10px] text-red-500 block">{errors.name}</span>}
                                                    {formState.contactMethod === 'Email' ? (
                                                        <div className="flex gap-2">
                                                            <input
                                                                type="email"
                                                                placeholder="Email Address"
                                                                className={`w-full bg-white/5 border ${errors.contact ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#5A4A32] focus:ring-1 focus:ring-[#5A4A32] outline-none transition-all`}
                                                                value={detailsInput.contact}
                                                                onChange={(e) => {
                                                                    setDetailsInput({ ...detailsInput, contact: e.target.value });
                                                                    if (errors.contact) setErrors({ ...errors, contact: '' });
                                                                }}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="flex gap-2">
                                                            <PhoneInput
                                                                value={detailsInput.contact}
                                                                onChange={(val) => {
                                                                    setDetailsInput({ ...detailsInput, contact: val || "" });
                                                                    if (errors.contact) setErrors({ ...errors, contact: '' });
                                                                }}
                                                                placeholder="50 123 4567"
                                                                className="flex-1"
                                                                error={errors.contact}
                                                            />
                                                        </div>
                                                    )}

                                                    {/* Optional Email for Non-Email Methods */}
                                                    {formState.contactMethod !== "Email" && (
                                                        <div className="animate-in fade-in slide-in-from-top-1 duration-300">
                                                            <input
                                                                type="text"
                                                                placeholder="Email for confirmation (Optional)"
                                                                className={`w-full bg-white/5 border ${errors.confirmationEmail ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#5A4A32] focus:ring-1 focus:ring-[#5A4A32] outline-none transition-all`}
                                                                value={detailsInput.confirmationEmail}
                                                                onChange={e => {
                                                                    setDetailsInput({ ...detailsInput, confirmationEmail: e.target.value });
                                                                    if (errors.confirmationEmail) setErrors({ ...errors, confirmationEmail: '' });
                                                                }}
                                                            />
                                                            {errors.confirmationEmail && <span className="text-[10px] text-red-500 block ml-1 mt-1">{errors.confirmationEmail}</span>}
                                                        </div>
                                                    )}

                                                    <button onClick={handleFormSubmit} className="w-full py-3 bg-[#5A4A32] hover:bg-[#B09476] text-white rounded-lg text-sm font-medium transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">Submit Request</button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    {isTyping && <div className="flex items-center gap-1 text-white/30 text-xs ml-2"><Bot className="w-3 h-3" /> typing...</div>}
                                    <div ref={messagesEndRef} />
                                </div>

                                {formState.step === 'ISSUE' && (
                                    <div className="p-3 bg-[#0a0a0a] border-t border-white/5">
                                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-1.5 py-1.5">
                                            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleTextInput(inputText)} placeholder="Describe your issue..." className="flex-1 bg-transparent px-3 py-1 text-sm text-white placeholder-white/30 focus:outline-none" />
                                            <button onClick={() => handleTextInput(inputText)} disabled={!inputText.trim()} className="w-8 h-8 bg-[#5A4A32] text-white rounded-full flex items-center justify-center hover:scale-105 transition-all disabled:opacity-50"><Send className="w-3.5 h-3.5" /></button>
                                        </div>
                                    </div>
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
const MenuContent = ({ setView }: { setView: (view: "menu" | "chat") => void }) => (
    <>
        <div className="mb-8 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#C4A67C]/10 border border-[#C4A67C]/30 text-[#C4A67C] text-[10px] font-bold tracking-widest uppercase mb-3 backdrop-blur-md">
                Support
            </span>
            <h3 className="text-2xl font-sans text-white font-light tracking-tight leading-snug">
                How can we <br /><span className="text-white font-bold">help</span> you?
            </h3>
        </div>

        <div className="space-y-3 relative z-10">
            <MenuButton
                icon={<MessageCircle className="w-5 h-5 text-green-400" />}
                title="WhatsApp"
                subtitle="Fastest response"
                href="https://wa.me/971542472151?text=Hello%20Dakeek%20Residential%20Services%2C%20I%20would%20like%20to%20book%20a%20service."
                delay={0}
            />

            <button onClick={() => setView("chat")} className="w-full text-left">
                <MenuButton
                    icon={<Sparkles className="w-5 h-5 text-[#C0C0C0]" />}
                    title="Dakeek Assistant"
                    subtitle="Start Service Request"
                    delay={0.1}
                    isButton
                />
            </button>

            <MenuButton
                icon={<Phone className="w-5 h-5 text-blue-400" />}
                title="Call Dakeek"
                subtitle="24/7 Operations"
                href="tel:+971542472151"
                delay={0.2}
            />
        </div>
    </>
);

interface MenuButtonProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    href?: string;
    delay: number;
    isButton?: boolean;
}

const MenuButton = ({ icon, title, subtitle, href, delay, isButton }: MenuButtonProps) => {
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
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#5A4A32]/20">
                    {icon}
                </div>
                <div>
                    <p className="font-medium text-gray-100 group-hover:text-white transition-colors">{title}</p>
                    <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors">{subtitle}</p>
                </div>
                <ChevronRight className="w-4 h-4 ml-auto text-gray-600 group-hover:text-[#5A4A32] transition-colors" />
            </motion.div>
        </Wrapper>
    );
};
