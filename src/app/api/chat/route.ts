
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        // Basic validation - relaxed as per requirements
        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        // Forward message to admin via Email using Resend
        if (process.env.RESEND_API_KEY) {
            try {
                await resend.emails.send({
                    from: 'Dakeek Bot <bot@dakeek.ae>', // Ensure this domain is verified in Resend
                    to: ['admin@dakeek.ae'], // Replace with actual admin email if known, or keep generic for now
                    subject: 'New Chat Message via Dakeek Bot',
                    html: `
                        <h2>New Message Received</h2>
                        <p><strong>Message:</strong> ${message}</p>
                        <hr />
                        <h3>Chat History Context:</h3>
                        <pre>${JSON.stringify(history, null, 2)}</pre>
                    `
                });
                console.log("✅ Chat message forwarded to email.");
            } catch (emailError) {
                console.error("❌ Failed to forward chat message to email:", emailError);
                // Continue to respond to user even if email fails - user experience first
            }
        } else {
            console.warn("⚠️ RESEND_API_KEY missing. Chat message NOT forwarded.");
        }


        // Static Response Logic (No AI)
        // Simple heuristic response to acknowledge receipt
        let responseText = "Thanks for your message. Our team has been notified and will contact you shortly.";

        const lowerMsg = message.toLowerCase();
        if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("how much")) {
            responseText = "Our team will review your request and get back to you with a quote shortly.";
        } else if (lowerMsg.includes("emergency") || lowerMsg.includes("urgent")) {
            responseText = "For urgent matters, please call us directly at 800-DAKEEK (800-325335).";
        } else if (lowerMsg.includes("ac") || lowerMsg.includes("cooling")) {
            responseText = "We've received your AC service inquiry. A specialist will be in touch.";
        }


        return NextResponse.json({
            text: responseText
        });

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json({
            text: "I'm having trouble connecting right now. Please call us directly."
        }, { status: 500 });
    }
}
