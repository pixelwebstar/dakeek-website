"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Loader2, Send, AlertCircle, XCircle } from "lucide-react";

// Form Schema
const formSchema = z.object({
    service: z.enum(["ac", "plumbing", "electrical", "cleaning", "gas", "stoves", "emergency"]),
    location: z.string().min(3, "Location is required (e.g. Villa 12, Springs)"),
    name: z.string().min(2, "Name is required"),
    phone: z.string().regex(/^(?:\+971|00971|0)?5\d{8}$/, "Enter a valid UAE mobile number (e.g. 050 123 4567)")
});

type FormData = z.infer<typeof formSchema>;

export function SmartForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: ""
        }
    });

    const selectedService = watch("service");

    const onSubmit = async (data: FormData) => {
        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch('/api/contact-submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service: data.service,
                    location: data.location,
                    name: data.name,
                    contactInfo: data.phone,
                    contactMethod: 'Phone', // Defaulting to Phone since form only asks for phone
                    serviceType: 'General Inquiry'
                })
            });

            if (!response.ok) throw new Error('Failed to send');

            setStatus("success");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again or call 800-DAKEEK.");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/90 backdrop-blur-xl p-12 rounded-3xl shadow-2xl text-center space-y-6 border border-green-100"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-serif italic text-slate-900">Request Sent!</h3>
                <p className="text-slate-600">Our dispatch team is analyzing your request. You will receive a WhatsApp confirmation shortly.</p>
                <button onClick={() => setStatus("idle")} className="text-sm font-mono uppercase underline decoration-dashed text-slate-400 hover:text-slate-900">Send another</button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl border border-white/50 p-8 md:p-10 rounded-3xl shadow-xl"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                {/* Global Error Message */}
                <AnimatePresence>
                    {status === "error" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm"
                        >
                            <XCircle className="w-5 h-5 shrink-0" />
                            {errorMessage}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 1. Service Selection */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-mono uppercase tracking-widest text-slate-500">01 / Service Required</label>
                        {errors.service && (
                            <span className="text-red-500 text-xs font-medium bg-red-50 px-2 py-1 rounded-md flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {errors.service.message}
                            </span>
                        )}
                    </div>
                    <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 p-1 rounded-2xl transition-colors ${errors.service ? "bg-red-50/50 ring-1 ring-red-100" : ""}`}>
                        {["ac", "plumbing", "electrical", "cleaning", "gas", "stoves", "emergency"].map((s) => (
                            <label key={s} className={`
                                cursor-pointer px-4 py-3 rounded-xl border text-sm font-medium transition-all relative overflow-hidden
                                ${selectedService === s
                                    ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
                                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-50"}
                            `}>
                                <input {...register("service")} type="radio" value={s} className="hidden" />
                                <span className="capitalize relative z-10">{s}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* 2. Detail Inputs */}
                <div className="space-y-6">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-500">02 / Your Details</label>

                    <div className="space-y-4">
                        {/* Location */}
                        <div className="relative group">
                            <input
                                {...register("location")}
                                placeholder="Location (e.g. Springs 14, Villa 22)"
                                className={`w-full bg-slate-50 border rounded-xl px-5 py-4 focus:outline-none focus:bg-white focus:ring-2 transition-all placeholder:text-slate-400 text-slate-900
                                    ${errors.location
                                        ? "border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50/30"
                                        : "border-slate-200 focus:ring-[#A18262]/20 focus:border-[#A18262]"}
                                `}
                            />
                            {errors.location && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                                    className="absolute right-4 top-4 text-red-500 text-xs font-medium flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm"
                                >
                                    <AlertCircle className="w-3 h-3" /> {errors.location.message}
                                </motion.p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name */}
                            <div className="relative">
                                <input
                                    {...register("name")}
                                    placeholder="Your Name"
                                    className={`w-full bg-slate-50 border rounded-xl px-5 py-4 focus:outline-none focus:bg-white focus:ring-2 transition-all placeholder:text-slate-400 text-slate-900
                                        ${errors.name
                                            ? "border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50/30"
                                            : "border-slate-200 focus:ring-[#A18262]/20 focus:border-[#A18262]"}
                                    `}
                                />
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                                        className="absolute right-4 top-4 text-red-500 text-xs font-medium flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm"
                                    >
                                        <AlertCircle className="w-3 h-3" /> Required
                                    </motion.p>
                                )}
                            </div>

                            {/* Phone */}
                            <div className="relative">
                                <input
                                    {...register("phone")}
                                    placeholder="050 123 4567"
                                    type="tel"
                                    className={`w-full bg-slate-50 border rounded-xl px-5 py-4 focus:outline-none focus:bg-white focus:ring-2 transition-all placeholder:text-slate-400 text-slate-900
                                        ${errors.phone
                                            ? "border-red-300 focus:border-red-500 focus:ring-red-100 bg-red-50/30"
                                            : "border-slate-200 focus:ring-[#A18262]/20 focus:border-[#A18262]"}
                                    `}
                                />
                                {errors.phone && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                                        className="absolute right-4 top-4 text-red-500 text-xs font-medium flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm"
                                    >
                                        <AlertCircle className="w-3 h-3" /> Invalid #
                                    </motion.p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Action */}
                <button
                    disabled={status === "submitting"}
                    type="submit"
                    className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl py-5 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === "submitting" ? (
                        <>
                            <Loader2 className="animate-spin w-5 h-5" /> Processing...
                        </>
                    ) : (
                        <>
                            Book Technician <Send className="w-5 h-5" />
                        </>
                    )}
                </button>
                <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">No payment required until job completion</p>
            </form>
        </motion.div>
    );
}
