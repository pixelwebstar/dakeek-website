import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

// Initialize Resend
export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        // Basic validation - relaxed as per requirements
        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        // Forward message to admin
        const sendAdminNotification = async () => {
            const subject = 'New Chat Message via Dakeek Bot';
            const toEmails = ['care@dakeek.ae'];
            const html = `
                <h2>New Message Received</h2>
                <p><strong>Message:</strong> ${message}</p>
                <hr />
                <h3>Chat History Context:</h3>
                <pre>${JSON.stringify(history, null, 2)}</pre>
            `;

            const resendKey = process.env.RESEND_API_KEY;
            if (resendKey) {
                try {
                    console.log("[CHAT DEBUG] Attempting delivery via Resend...");
                    const resend = new Resend(resendKey);
                    await resend.emails.send({
                        from: 'Dakeek Bot <onboarding@resend.dev>',
                        to: toEmails,
                        subject: subject,
                        html: html
                    });
                    console.log("✅ Chat message forwarded via Resend.");
                    return true;
                } catch {
                    console.warn("⚠️ Chat Resend Failed, trying fallback...");
                }
            }

            // Fallback: Nodemailer
            const emailUser = process.env.EMAIL_USER;
            const emailPass = process.env.EMAIL_PASS;

            if (emailUser && emailPass) {
                try {
                    console.log("[CHAT DEBUG] Attempting delivery via Nodemailer...");
                    const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: emailUser,
                            pass: emailPass
                        }
                    });

                    await transporter.sendMail({
                        from: `"Dakeek Bot" <${emailUser}>`,
                        to: toEmails.join(", "),
                        subject: subject,
                        html: html
                    });
                    console.log("✅ Chat message forwarded via Nodemailer.");
                    return true;
                } catch (error) {
                    console.error("❌ Chat Fallback Failed:", error);
                }
            } else {
                console.warn("⚠️ Chat Fallback Impossible: Missing Credentials");
                console.warn(`- EMAIL_USER: ${emailUser ? "Present" : "MISSING"}`);
                console.warn(`- EMAIL_PASS: ${emailPass ? "Present" : "MISSING"}`);
            }
            return false;
        };

        // Fire and forget (don't block user response)
        sendAdminNotification();


        // Static Response Logic (No AI)
        // Simple heuristic response to acknowledge receipt
        let responseText = "Thanks for your message. Our team has been notified and will contact you shortly.";

        const lowerMsg = message.toLowerCase();
        if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("how much")) {
            responseText = "Our team will review your request and get back to you with a quote shortly.";
        } else if (lowerMsg.includes("urgent-support") || lowerMsg.includes("urgent")) {
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
