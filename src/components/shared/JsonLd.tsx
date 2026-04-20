"use client";

import { DUBAI_AREAS } from "../../lib/constants";

/**
 * JsonLd component to handle structured data.
 * Extracted from layout.tsx to reduce initial HTML size and improve TTFB.
 */
export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://dakeek.ae/#organization",
        "name": "Dakeek Technical Services LLC",
        "legalName": "Dakeek Technical Services Co. L.L.C",
        "alternateName": "Dakeek Dubai",
        "description": "Professional property maintenance and technical services in Dubai. Licensed and verified provider of commercial and residential AC repair, plumbing, electrical, cleaning, and handyman services across all Dubai areas.",
        "slogan": "Engineering rigor for Dubai's finest properties. Precision in every detail.",
        "url": "https://dakeek.ae",
        "telephone": "+971542472151",
        "email": "care@dakeek.ae",
        "image": "https://dakeek.ae/opengraph-image.png",
        "logo": "https://dakeek.ae/icons/icon-512.png",
        "priceRange": "$$",
        "currenciesAccepted": "AED",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Business License",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "Dubai Department of Economy and Tourism"
          },
          "description": "Dubai DET License No. 1382290"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Xavier Business Center, BN Building, B1 Floor, M2, Al Mateena St, Deira",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.27,
          "longitude": 55.32
        },
        "areaServed": [
          { "@type": "City", "name": "Dubai", "geo": { "@type": "GeoCoordinates", "latitude": 25.2048, "longitude": 55.2708 } },
          ...DUBAI_AREAS.map(area => ({ "@type": "Place", "name": area }))
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 25.27,
            "longitude": 55.32
          },
          "geoRadius": "30000"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "1",
          "bestRating": "5",
          "worstRating": "1"
        },
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "15"
        },
        "sameAs": [
          "https://www.instagram.com/dakeek.ae/",
          "https://www.facebook.com/dakeektechnicalservice/",
          "https://www.linkedin.com/company/dakeek-technical-service-co-llc/"
        ]
      },
      {
        "@type": "Service",
        "name": "AC Maintenance & Repair Dubai",
        "serviceType": "Air Conditioning maintenance, repair, and installation services in Dubai",
        "provider": { "@id": "https://dakeek.ae/#organization" },
        "areaServed": "Dubai, United Arab Emirates",
        "url": "https://dakeek.ae/services/ac",
        "description": "Professional AC repair and maintenance services in Dubai. Specialized AC repair, yearly maintenance contracts, and AC installation across all Dubai areas.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "AED"
          }
        }
      },
      {
        "@type": "Service",
        "name": "Plumbing Services Dubai",
        "serviceType": "Professional plumber, leak detection, pipe repair services in Dubai",
        "provider": { "@id": "https://dakeek.ae/#organization" },
        "areaServed": "Dubai, United Arab Emirates",
        "url": "https://dakeek.ae/services/plumbing",
        "description": "professional plumber in Dubai. Water leak detection, pipe repairs, drainage solutions, water heater repair, and bathroom fitting services.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "AED"
          }
        }
      },
      {
        "@type": "Service",
        "name": "Electrical Services Dubai",
        "serviceType": "Licensed electrician services, electrical repairs, and installations in Dubai",
        "provider": { "@id": "https://dakeek.ae/#organization" },
        "areaServed": "Dubai, United Arab Emirates",
        "url": "https://dakeek.ae/services/electrical",
        "description": "Professional electrical services in Dubai. Circuit repairs, switch and socket installation, lighting solutions, electrical troubleshooting, and power distribution.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "AED"
          }
        }
      },
      {
        "@type": "Service",
        "name": "Deep Cleaning Services Dubai",
        "serviceType": "Deep cleaning, water tank cleaning, and duct sanitization in Dubai",
        "provider": { "@id": "https://dakeek.ae/#organization" },
        "areaServed": "Dubai, United Arab Emirates",
        "url": "https://dakeek.ae/services/cleaning",
        "description": "Professional deep cleaning services in Dubai. Water tank cleaning, AC duct cleaning, move-in/move-out cleaning, and comprehensive home sanitization.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "AED"
          }
        }
      },
      {
        "@type": "Service",
        "name": "Handyman Services Dubai",
        "serviceType": "Handyman and general home repair services in Dubai",
        "provider": { "@id": "https://dakeek.ae/#organization" },
        "areaServed": "Dubai, United Arab Emirates",
        "url": "https://dakeek.ae/services/handyman",
        "description": "Professional handyman services in Dubai. Furniture assembly, painting, carpentry, fixture installation, and general home repairs.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "AED"
          }
        }
      },
      {
        "@type": "Service",
        "name": "Urgent Property Support Dubai",
        "serviceType": "Urgent property maintenance and repair services in Dubai",
        "provider": { "@id": "https://dakeek.ae/#organization" },
        "areaServed": "Dubai, United Arab Emirates",
        "url": "https://dakeek.ae/services/urgent-support",
        "description": "Professional urgent property repair services in Dubai. Rapid response for plumbing issues, AC breakdowns, and electrical failures.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "AED"
          }
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
