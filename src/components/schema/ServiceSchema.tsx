import React from "react";

interface ServiceSchemaProps {
    name: string;
    description: string;
    providerName?: string;
    areaServed?: string;
    image?: string;
    url?: string;
    telephone?: string;
    priceRange?: string;
    ratingValue?: string;
    reviewCount?: string;
    address?: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo?: {
        latitude: number;
        longitude: number;
    };
}

export function ServiceSchema({
    name,
    description,
    providerName = "DAKEEK Technical Services",
    areaServed = "Dubai",
    image = "https://www.dakeek.ae/opengraph-image.png",
    url,
    telephone,
    priceRange,
    ratingValue,
    reviewCount,
    address,
    geo,
}: ServiceSchemaProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": providerName,
            "image": image,
            ...(address && {
                "address": {
                    "@type": "PostalAddress",
                    ...address
                }
            }),
            ...(geo && {
                "geo": {
                    "@type": "GeoCoordinates",
                    ...geo
                }
            }),
            ...(telephone && { "telephone": telephone }),
        },
        "areaServed": {
            "@type": "City",
            "name": areaServed,
        },
        "description": description,
        ...(url && { "url": url }),
        ...(priceRange && { "priceRange": priceRange }),
        ...(ratingValue && {
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": ratingValue,
                "reviewCount": reviewCount || "1"
            }
        }),
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Home Maintenance Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": name,
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
