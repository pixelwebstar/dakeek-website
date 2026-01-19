"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";

export interface FAQItem {
    question: string;
    answer: string;
    category?: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
    showSearch?: boolean;
    defaultOpen?: number;
}

export function FAQAccordion({ faqs, showSearch = true, defaultOpen = 0 }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full space-y-6">
            {/* Search Bar */}
            {showSearch && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                >
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search questions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-structure rounded-2xl text-ink placeholder-gray-400 focus:outline-none focus:border-[#C4A67C] transition-all font-light text-lg"
                    />
                </motion.div>
            )}

            {/* FAQ Items */}
            <div className="space-y-3">
                {filteredFaqs.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 text-gray-500"
                    >
                        <p className="text-lg font-serif">No questions found matching &quot;{searchQuery}&quot;</p>
                        <button
                            onClick={() => setSearchQuery("")}
                            className="mt-4 text-sm text-[#C4A67C] hover:underline"
                        >
                            Clear search
                        </button>
                    </motion.div>
                ) : (
                    filteredFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="bg-white border border-structure rounded-xl overflow-hidden hover:border-[#C4A67C] transition-all hover:shadow-lg">
                                {/* Question Button */}
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex justify-between items-center p-6 md:p-8 text-left transition-all group-hover:bg-[#FAFAF9]"
                                >
                                    <span className="text-lg md:text-xl font-serif text-ink pr-4 leading-relaxed">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="flex-shrink-0"
                                    >
                                        {openIndex === index ? (
                                            <Minus className="w-5 h-5 text-[#C4A67C]" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-[#86868b] group-hover:text-[#C4A67C] transition-colors" />
                                        )}
                                    </motion.div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                                <div className="w-12 h-px bg-structure mb-4"></div>
                                                <p className="text-[#666] leading-relaxed text-base md:text-lg font-light">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>

            {/* Results Count */}
            {searchQuery && filteredFaqs.length > 0 && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-gray-500 text-center font-mono uppercase tracking-wider"
                >
                    Showing {filteredFaqs.length} of {faqs.length} questions
                </motion.p>
            )}
        </div>
    );
}
