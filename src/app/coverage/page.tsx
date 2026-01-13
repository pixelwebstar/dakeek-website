import CoveragePage from "@/components/pages/CoveragePage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quality & Coverage | Dakeek",
    description: "Our standards of service excellence and coverage areas across Dubai, including Palm Jumeirah, Dubai Marina, and 30+ communities.",
};

export default function Page() {
    return <CoveragePage />;
}
