import React from "react";

interface ServiceSchemaProps {
    type?: string;
    name: string;
    description: string;
    providerName?: string;
    areaServed?: string[];
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
    type = "Service",
    name,
    description,
    providerName = "DAKEEK Technical Services",
    areaServed = ["Dubai"],
    image = "https://dakeek.ae/opengraph-image.png",
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
        "@type": type,
        "name": name,
        "image": image,
        "description": description,
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": providerName,
            "image": image,
            "priceRange": priceRange,
            "telephone": telephone,
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
        },
        "areaServed": areaServed.map(area => ({
            "@type": "Place",
            "name": area
        })),
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            }
        ],
        ...(url && { "url": url }),
        ...(ratingValue && {
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": ratingValue,
                "reviewCount": reviewCount || "1"
            }
        }),
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Property Maintenance Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": type,
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
