import { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
    title: "Get in Touch",
    description: "Ready for a technician? Contact Dakeek today. Call, WhatsApp, or Book Online. We respond within minutes, not hours.",
};

export default function Page() {
    return <ContactPage />;
}
