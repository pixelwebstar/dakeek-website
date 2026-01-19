"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Step {
    id: number;
    label: string;
    description: string;
    icon: LucideIcon;
    strokeWidth?: number;
}

interface ProcessStepperProps {
    steps: Step[];
}

export default function ProcessStepper({ steps }: ProcessStepperProps) {
    return (
        <div className="relative border-l-2 border-structure ml-4 md:ml-8 space-y-12 py-4">
            {steps.map((step, index) => (
                <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-8 md:pl-12"
                >
                    {/* Timeline Dot */}
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#C4A67C]" />

                    <div className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="p-3 bg-canvas rounded-xl border border-structure">
                            <step.icon className="w-6 h-6 text-[#C4A67C]" strokeWidth={step.strokeWidth || 2} />
                        </div>
                        <div>
                            <span className="block font-serif text-xl font-medium mb-2">
                                {step.label}
                            </span>
                            <p className="text-titanium text-sm leading-relaxed max-w-sm">
                                {step.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
