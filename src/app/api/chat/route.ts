import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- Configuration ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// --- Knowledge Base (Fallback) ---
// Used when Gemini is unavailable.
const DAKEEK_KNOWLEDGE_BASE = [
    { keywords: ["ac", "cooling", "hvac", "duct", "maintenance", "hot"], response: "For AC issues, we recommend: \n\n1. Check your thermostat settings.\n2. Ensure air filters are clean (should be changed every 3-6 months).\n3. If leaking, **turn off the unit immediately** to prevent ceiling damage.\n\nWe offer **AC Services** including duct cleaning and emergency repairs for all brands. Urgent? Call 800-DAKEEK." },
    { keywords: ["plumbing", "leak", "water", "pipe", "heater", "drip"], response: "Plumbing issue? \n\n• **Leak:** Turn off the main water valve immediately.\n• **Heater:** Switch off the power breaker if there's an electrical smell.\n\nOur Master Plumbers can handle leak detection and heaters 24/7. Shall we dispatch a team?" },
    { keywords: ["paint", "wall", "interior", "exterior"], response: "We use premium **Jotun & Benjamin Moore** low-VOC paints. \n\n• **Interior:** Matte, Eggshell, or Semi-Gloss finishes.\n• **Exterior:** Weather-resistant coatings.\n\nWe cover all prep: sanding, filling, and priming for a flawless finish." },
    { keywords: ["price", "cost", "how much", "rate", "fee", "charge"], response: "Our pricing is transparent: \n\n• **Inspection Fee:** AED 150 (Waived if you proceed with repair)\n• **Labor:** AED 150/hr\n• **Annual Maintenance:** Starts at AED 1200/year\n\nNo hidden charges. We quote before we start." },
    { keywords: ["emergency", "urgent", "fast", "now"], response: "🚨 **Emergency Protocol**\n\nFor flooding, dangerous electrical faults, or total AC failure, call **800-DAKEEK (800 325335)** immediately. We prioritize these calls with our **Priority Response** service." },
];

const SYSTEM_PROMPT = `
You are Dakeek's "Mini Technician" 🛠️.
**IDENTITY**: You are a helpful, expert technical assistant for Dakeek (Precision Technical Services) in Dubai.
**GOAL**: Diagnose the user's issue briefly, then **CLOSE THE DEAL** by pivoting to a **FREE Check-up**.

**BEHAVIOR**:
1.  **Diagnose**: If the user says "AC not cooling", asking *one* clarifying question like "Is the thermostat on?" or give *one* quick tip. Show you know your stuff.
2.  **The Pivot**: Immediately after helping, say: "To be sure, I can send a team for a **FREE Check-up** (Inspection Fee Waived if repair proceeds)."
3.  **Links**: Use [Book Now](/contact) or [Call 800-DAKEEK](tel:800332533) to drive action.
4.  **Tone**: Professional, confident, friendly.
5.  **Brevity**: Keep it under 60 words. Short and punchy.

**SERVICES**: AC Services, Plumbing Services, Electrical Services, Cleaning Services, Handyman Services, Gas & Cookers, AMC Contracts.
**OFFER**: Free Inspection (Limited time). Normal fee AED 150 is WAIVED with service.
**URGENCY**: "We offer Priority Response for emergencies."
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const lastUserMessage = messages[messages.length - 1];
        const userQuery = lastUserMessage?.content || "";

        // 1. Try Gemini
        if (GEMINI_API_KEY) {
            try {
                const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
                // Use gemini-pro if flash is failing, or stick to flash if confident
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

                const result = await model.generateContent(`${SYSTEM_PROMPT}\n\nUser: "${userQuery}"\n\nTechnician:`);
                const response = result.response;
                const text = response.text();

                return NextResponse.json({
                    role: "assistant",
                    content: text
                });

            } catch (error: unknown) {
                console.error("Gemini API FAILED:", error);
                const errDetail = (error as Error)?.message || JSON.stringify(error);

                // If the key is bad or model not found, let's gracefully fall back 
                // BUT we log it clearly.
                console.log("Falling back to local logic due to API error: " + errDetail);
            }
        }

        // 2. Fallback Logic (The "dumb" bot, but smarter now)
        let bestResponse = "That sounds like something we should look at. I can send a senior technician to check it for **FREE** (Inspection fee waived).\n\nShall we book a slot? [Book Now](/contact)";

        let maxScore = 0;
        const tokens = userQuery.toLowerCase().split(/\s+/);

        DAKEEK_KNOWLEDGE_BASE.forEach(intent => {
            let score = 0;
            intent.keywords.forEach(kw => {
                if (userQuery.toLowerCase().includes(kw)) score += 3;
                else if (tokens.includes(kw)) score += 1;
            });

            if (score > maxScore) {
                maxScore = score;
                bestResponse = intent.response;
            }
        });

        // Add debug note if in dev
        if (process.env.NODE_ENV === 'development' && !GEMINI_API_KEY) {
            bestResponse += "\n\n*(Debug: No Gemini Key)*";
        } else if (process.env.NODE_ENV === 'development') {
            bestResponse += "\n\n*(Debug: Fallback used - Check Server Console for Gemini Error)*";
        }

        return NextResponse.json({
            role: "assistant",
            content: bestResponse
        });

    } catch (error) {
        console.error("Critical Chat Error:", error);
        return NextResponse.json(
            { role: "assistant", content: "I'm having a brief connection issue. Please use the WhatsApp button for immediate assistance." },
            { status: 500 }
        );
    }
}
