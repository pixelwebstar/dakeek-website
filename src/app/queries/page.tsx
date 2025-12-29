import { Metadata } from "next";
import QueriesPage from "@/components/pages/QueriesPage";

export const metadata: Metadata = {
    title: "FAQs & Help Center",
    description: "Find answers to your questions about Dakeek's home maintenance services. Pricing, warranty, coverage areas, and more.",
};

export default function Page() {
    return <QueriesPage />;
}
