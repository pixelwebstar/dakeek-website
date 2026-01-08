"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "../../lib/utils";

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc?: string;
}

export default function ImageWithFallback({
    src,
    alt,
    className,
    fallbackSrc = "https://images.unsplash.com/photo-1581094794329-cd1096d7a43f?auto=format&fit=crop&q=80", // Professional technical abstract fallback
    ...props
}: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn("relative overflow-hidden bg-stone-100", className)}>
            <Image
                {...props}
                src={imgSrc || fallbackSrc}
                alt={alt}
                className={cn(
                    "duration-700 ease-in-out",
                    isLoading ? "scale-110 blur-xl opacity-0" : "scale-100 blur-0 opacity-100",
                    className
                )}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setImgSrc(fallbackSrc);
                    setIsLoading(false);
                }}
            />
        </div>
    );
}
