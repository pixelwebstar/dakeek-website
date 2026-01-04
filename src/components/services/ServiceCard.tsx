"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  href: string;
  image: string;
  icon?: React.ElementType<{ className?: string }>;
  features: string[];
  variant?: "default" | "emergency" | "other";
}

export default function ServiceCard({
  title,
  href,
  image,
  icon: Icon,
  features,
  variant = "default",
}: ServiceCardProps) {
  const isEmergency = variant === "emergency";
  const isOther = variant === "other";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={href}
        className={`group relative block h-[480px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
          ${isEmergency ? "rounded-2xl" : "rounded-2xl"}`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 transition-opacity duration-500
            ${isEmergency
              ? "bg-gradient-to-t from-red-950/95 via-red-950/60 to-transparent"
              : isOther
                ? "bg-gradient-to-t from-teal-950/95 via-teal-950/60 to-transparent"
                : "bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95"}`}
          />
        </div>

        {/* Glowing Border on Hover */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2
          ${isEmergency ? "border-red-500/50" : isOther ? "border-teal-500/50" : "border-[#A18262]/50"}`}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col z-10">
          {/* Icon Badge */}
          {Icon && (
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md transition-transform duration-500 group-hover:scale-110
              ${isEmergency ? "bg-red-500/20 border border-red-500/30" : isOther ? "bg-teal-500/20 border border-teal-500/30" : "bg-white/10 border border-white/20"}`}
            >
              <Icon className={`w-7 h-7 ${isEmergency ? "text-red-400" : isOther ? "text-teal-400" : "text-white"}`} />
            </div>
          )}

          {/* Title */}
          <h3 className={`text-2xl font-serif font-semibold mb-2 transition-colors duration-300
            ${isEmergency ? "text-white group-hover:text-red-300" : isOther ? "text-white group-hover:text-teal-300" : "text-white"}`}
          >
            {title}
          </h3>

          {/* Emergency Badge */}
          {isEmergency && (
            <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-red-400 mb-3">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              60 Minute Response
            </span>
          )}

          {/* Features */}
          <ul className="flex flex-wrap gap-2 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md backdrop-blur-md
                  ${isEmergency
                    ? "bg-red-500/20 text-red-200 border border-red-500/20"
                    : isOther
                      ? "bg-teal-500/20 text-teal-200 border border-teal-500/20"
                      : "bg-white/10 text-white/80 border border-white/10"}`}
              >
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3
            ${isEmergency ? "text-red-400" : isOther ? "text-teal-400" : "text-[#A18262]"}`}
          >
            View Service
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
