"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Loader2, XCircle, CheckCircle2 } from "lucide-react";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { toast } from "sonner";
import { contactFormSchema, ContactFormData } from "@/lib/schemas";
import { DUBAI_AREAS, SERVICE_TYPES } from "@/lib/constants";

export function SmartForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const { register, control, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            services: [],
            phone: "",
            email: "",
            location: "",
            name: ""
        }
    });

    const selectedServices = watch("services");

    const toggleService = (s: string) => {
        const current = selectedServices || [];
        if (current.includes(s)) {
            setValue("services", current.filter(item => item !== s));
        } else {
            setValue("services", [...current, s]);
        }
    };

    const onSubmit = async (data: ContactFormData) => {
        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch('/api/contact-submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    services: data.services(", "), // Mapping for legacy API structure
                    location: data.location,
                    name: data.name,
                    phone: data.phone,
                    contactMethod: 'WhatsApp',
                    email: data.email || undefined,
                    serviceType: 'General Inquiry'
                })
            });

            const result = await response.json();

            if (!response.ok) {
                console.error("API Error:", result);
                throw new Error(result.error || 'Failed to send');
            }

            setStatus("success");
            reset();
            toast.success("Request Received", {
                description: "We'll be in touch shortly via WhatsApp/Phone.",
                duration: 5000,
            });

            // Reset status after a delay
            setTimeout(() => setStatus("idle"), 3000);

        } catch (error: any) {
            console.error("Form submission error:", error);
            setStatus("error");
            const message = error?.message || "Something went wrong. Please try again.";
            setErrorMessage(message);
            toast.error("Submission Failed", { description: message });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-2xl border border-white/50 p-6 md:p-12 rounded-[2.5rem] shadow-2xl flex flex-col justify-center md:h-full md:min-h-[600px]"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">

                {/* Global Feedback */}
                <AnimatePresence>
                    {status === "error" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-red-50 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 text-xs font-medium"
                        >
                            <XCircle className="w-4 h-4 shrink-0" />
                            {errorMessage}
                        </motion.div>
                    )}
                    {status === "success" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-green-50 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3 text-xs font-medium"
                        >
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            Request Sent Successfully!
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 1. Services */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <label className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">01 / Services Required</label>
                        {errors.services && <span className="text-red-500 text-[10px] font-bold">{errors.services.message}</span>}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {SERVICE_TYPES.map((s) => {
                            const isSelected = selectedServices?.includes(s);
                            return (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => toggleService(s)}
                                    className={`
                                        px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border
                                        ${isSelected
                                            ? "bg-[#1f2937] text-white border-[#1f2937] shadow-lg transform scale-105"
                                            : "bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-white"}
                                    `}
                                >
                                    {s}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 2. Details */}
                <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 block">02 / Contact Info</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Location with Datalist */}
                        <div className="md:col-span-2 relative">
                            <input
                                {...register("location")}
                                list="dubai-areas"
                                placeholder="Location (Select or Type Area)"
                                className={`w-full bg-slate-50/50 border rounded-xl px-4 py-4 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all placeholder:text-slate-400 text-slate-900
                                    ${errors.location ? "border-red-200 bg-red-50/10 focus:ring-red-100" : "border-slate-200 focus:ring-slate-100 focus:border-[#A18262]"}
                                `}
                            />
                            <datalist id="dubai-areas">
                                {DUBAI_AREAS.map(area => <option key={area} value={area} />)}
                            </datalist>
                            {errors.location && <span className="text-red-500 text-[10px] absolute -bottom-4 left-2">{errors.location.message}</span>}
                        </div>

                        {/* Name */}
                        <div className="relative">
                            <input
                                {...register("name")}
                                placeholder="Your Name"
                                className={`w-full bg-slate-50/50 border rounded-xl px-4 py-4 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all placeholder:text-slate-400 text-slate-900
                                    ${errors.name ? "border-red-200 bg-red-50/10 focus:ring-red-100" : "border-slate-200 focus:ring-slate-100 focus:border-[#A18262]"}
                                `}
                            />
                            {errors.name && <span className="text-red-500 text-[10px] absolute -bottom-4 left-2">{errors.name.message}</span>}
                        </div>

                        {/* Phone (Custom) */}
                        <div className="relative">
                            <Controller
                                control={control}
                                name="phone"
                                render={({ field: { onChange, value } }) => (
                                    <PhoneInput
                                        value={value}
                                        onChange={onChange}
                                        error={errors.phone?.message}
                                    />
                                )}
                            />
                        </div>

                        {/* Email */}
                        <div className="md:col-span-2 relative">
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Email Address (Optional)"
                                className={`w-full bg-slate-50/50 border rounded-xl px-4 py-4 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all placeholder:text-slate-400 text-slate-900
                                    ${errors.email ? "border-red-200 bg-red-50/10 focus:ring-red-100" : "border-slate-200 focus:ring-slate-100 focus:border-[#A18262]"}
                                `}
                            />
                            {errors.email && <span className="text-red-500 text-[10px] absolute -bottom-4 left-2">{errors.email.message}</span>}
                        </div>
                    </div>
                </div>

                {/* 3. Action */}
                <div className="pt-4">
                    <button
                        disabled={status === "submitting"}
                        type="submit"
                        className="w-full bg-[#18181b] text-white rounded-xl py-5 text-base font-bold tracking-wide shadow-xl hover:shadow-2xl hover:bg-black active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {status === "submitting" ? (
                            <Loader2 className="animate-spin w-5 h-5" />
                        ) : (
                            <>
                                Book Technician <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </>
                        )}
                    </button>
                    <p className="text-center text-[10px] text-slate-400 font-medium mt-4">We respect your privacy.</p>
                </div>
            </form>
        </motion.div>
    );
}
