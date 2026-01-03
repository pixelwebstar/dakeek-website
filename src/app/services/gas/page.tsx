import ServicePageLayout from "../../../components/services/ServicePageLayout";
import { serviceData } from "../../../data/serviceData";
import { Metadata } from "next";
import { ServiceSchema } from "../../../components/schema/ServiceSchema";
import { FAQSchema } from "../../../components/schema/FAQSchema";
import { BreadcrumbSchema } from "../../../components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
    title: serviceData.gas.seo.title,
    description: serviceData.gas.hero.description + " " + serviceData.gas.intro.heading,
    keywords: serviceData.gas.seo.keywords,
    openGraph: {
        title: serviceData.gas.seo.title,
        description: serviceData.gas.hero.description,
        images: [serviceData.gas.details[0].image],
    }
};

export default function GasServicePage() {
    return (
        <>
            <ServiceSchema
                name={serviceData.gas.seo.title}
                description={serviceData.gas.hero.description}
                image={serviceData.gas.details[0].image}
                url="https://dakeek.ae/services/gas"
                telephone="+971542472151"
                ratingValue="5.0"
                reviewCount="30"
                areaServed="Dubai"
            />
            <FAQSchema faqs={serviceData.gas.seo.qna ? serviceData.gas.seo.qna.map(q => ({ question: q.question, answer: q.answer })) : []} />
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Gas Services', path: '/services/gas' }
            ]} />
            <ServicePageLayout slug="gas" />
        </>
    );
}
