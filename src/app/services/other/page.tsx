
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";
import { ServiceSchema } from "../../../components/schema/ServiceSchema";
import { BreadcrumbSchema } from "../../../components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
    title: serviceData.other.seo.title,
    description: serviceData.other.hero.description + " " + serviceData.other.intro.heading,
    keywords: serviceData.other.seo.keywords,
    openGraph: {
        title: serviceData.other.seo.title,
        description: serviceData.other.hero.description,
        images: [serviceData.other.details[0].image],
    }
};

export default function OtherServicePage() {
    return (
        <>
            <ServiceSchema
                name={serviceData.other.seo.title}
                description={serviceData.other.hero.description}
                image={serviceData.other.details[0].image}
                url="https://dakeek.ae/services/other"
                telephone="+971542472151"
                priceRange="$$"
                ratingValue="4.8"
                reviewCount="45"
                address={{
                    streetAddress: "Anzar Gallery, Al Karama",
                    addressLocality: "Dubai",
                    addressRegion: "Dubai",
                    postalCode: "00000",
                    addressCountry: "AE"
                }}
                geo={{
                    latitude: 25.2532,
                    longitude: 55.3657
                }}
            />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Other Services', path: '/services/other' }
            ]} />
            <ServicePageLayout slug="other" />
        </>
    );
}
