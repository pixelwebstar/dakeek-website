import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
   title: "Home Services Reimagined",
   description: "Experience the new standard in home maintenance. Dakeek combines speed, expertise, and transparency for AC, Plumbing, and Electrical services.",
};

export default function Home() {
   return <HomePage />;
}
