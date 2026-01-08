"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Share, PlusSquare, X } from "lucide-react";

interface InstallModalProps {
    isOpen: boolean;
    onClose: () => void;
    isIOS: boolean;
}

export default function InstallModal({ isOpen, onClose, isIOS }: InstallModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-[#FAFAF9] rounded-2xl w-full max-w-sm p-6 shadow-2xl relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-[#666] hover:text-black">
                            <X size={20} />
                        </button>

                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 bg-black rounded-xl shadow-lg flex items-center justify-center">
                                <span className="text-white font-serif italic text-2xl font-bold">D.</span>
                            </div>

                            <h3 className="text-xl font-bold text-[#111]">Install Dakeek App</h3>

                            {isIOS ? (
                                <div className="space-y-4 text-sm text-[#666]">
                                    <p>Install this web app on your iPhone for the best experience.</p>
                                    <div className="flex flex-col gap-3 bg-white p-4 rounded-lg border border-[#e5e5e5]">
                                        <div className="flex items-center gap-3">
                                            <Share size={20} className="text-blue-500" />
                                            <span>1. Tap the <strong>Share</strong> button.</span>
                                        </div>
                                        <div className="w-full h-[1px] bg-[#f0f0f0]" />
                                        <div className="flex items-center gap-3">
                                            <PlusSquare size={20} className="text-[#111]" />
                                            <span>2. Tap <strong>Add to Home Screen</strong>.</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-sm text-[#666]">
                                    Installing app... Check your browser if the prompt doesn't appear.
                                </p>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
