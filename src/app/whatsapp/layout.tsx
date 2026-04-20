import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Redirecting to WhatsApp | Dakeek",
    description: "Opening Dakeek Property Maintenance WhatsApp Support...",
    robots: {
        index: false,
        follow: false,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
