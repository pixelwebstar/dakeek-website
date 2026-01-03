

import Link from "next/link";
import { ArrowRight } from "lucide-react";


interface ServiceCardProps {
  title: string;
  href: string;
  icon: React.ElementType<{ className?: string }>;
  features: string[];
  variant?: "default" | "emergency";
}

export default function ServiceCard({
  title,
  href,
  icon: Icon,
  features,
  variant = "default",
}: ServiceCardProps) {
  const isEmergency = variant === "emergency";

  return (
    <Link
      href={href}
      className={`group relative block p-10 h-[420px] border flex flex-col justify-between items-center text-center transition-all duration-500 hover:-translate-y-1
        ${isEmergency
          ? "bg-[#111] border-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]"
          : "bg-white border-[#E5E5E5] hover:border-[#D6D3D1] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
        }`}
    >
      {/* Subtle Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-700
        ${isEmergency ? "from-transparent to-white/5" : "from-transparent to-[#FAFAF9]"}`}
      />

      {/* Hover Top Line */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[3px] group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
        ${isEmergency ? "bg-red-600" : "bg-[#A18262]"}`}
      />

      <div className="relative z-10 w-full flex flex-col items-center pt-2">
        <div className="mb-8 relative transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
          {/* Icon Glow */}
          <div className={`absolute inset-0 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ${isEmergency ? "bg-red-600/20" : "bg-[#A18262]/10"}`}
          />

          <Icon className={`relative z-10 w-12 h-12 transition-colors duration-500
            ${isEmergency
              ? "text-white group-hover:text-red-500"
              : "text-[#444] group-hover:text-[#A18262]"}`}
          />
        </div>

        <h3 className={`text-3xl font-serif font-medium mb-2 transition-all duration-300
          ${isEmergency
            ? "text-white group-hover:text-red-500 group-hover:italic"
            : "text-[#111] group-hover:text-[#A18262] group-hover:italic"}`}
        >
          {title}
        </h3>

        {/* Emergency Extra Text */}
        {isEmergency && (
          <p className="font-mono text-[9px] text-white/50 uppercase tracking-[0.2em] mb-1">60 Minute Response</p>
        )}

        {/* Decorative short line */}
        <div className={`w-8 h-[1px] my-4 transition-all duration-500 group-hover:w-16
          ${isEmergency
            ? "bg-white/20 group-hover:bg-red-500/50"
            : "bg-[#E5E5E5] group-hover:bg-[#A18262]/30"}`}
        />
      </div>

      <ul className="relative z-10 space-y-3 flex flex-col items-center w-full mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`font-mono text-[10px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-colors
              ${isEmergency
                ? "text-white/60 group-hover:text-white"
                : "text-[#86868b] group-hover:text-[#444]"}`}
          >
            {feature}
          </li>
        ))}
      </ul>

      {/* Interaction Hint */}
      <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        <ArrowRight className={`w-5 h-5 ${isEmergency ? "text-red-500" : "text-[#A18262]"}`} />
      </div>
    </Link>
  );
}
