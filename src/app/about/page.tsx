import { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
    title: "Our Story & Promise",
    description: "Built DIFFERENT. Dakeek creates full-time careers for technicians to ensure quality, trust, and reliability for your home.",
};

export default function Page() {
    return <AboutPage />;
}
