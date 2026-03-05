import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/lib/schemas';

// Force dynamic to ensure API is not cached
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const apiKey = process.env.RESEND_API_KEY;

        // Safe logging: Only show prefix and suffix to protect full key
        const keyStatus = apiKey ? `Present (${apiKey.substring(0, 6)}...${apiKey.substring(apiKey.length - 4)})` : "MISSING";
        console.log(`[API DEBUG] Received submission. Key: ${keyStatus}`);
        // 1. Strict Validation using Zod
        const validation = contactFormSchema.safeParse({
            ...body,
            // Map legacy fields if necessary or ensure frontend matches schema
            services: body.service ? body.service.split(", ") : body.services
        });

        if (!validation.success) {
            console.error("❌ Validation Error:", validation.error.format());
            // Safe access to errors array
            return NextResponse.json({
                error: "Invalid Request",
                details: validation.error.issues.map((e) => e.message)
            }, { status: 400 });
        }

        const data = validation.data;
        const { serviceType, issue, contactMethod, name, phone, email, location } = data;

        // Use phone as contactInfo fallback or primary
        const contactInfo = phone;

        // 2. Check for API Key securely
        if (!apiKey) {
            console.error("❌ FATAL: Missing RESEND_API_KEY");
            return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        // Determine Client Email (Primary or Optional)
        const clientEmail = email;

        // Action-Oriented Subject Line
        const servicesList = data.services.join(", ");
        const subject = `⚠️ ACTION: ${contactMethod || 'Service'} Request - ${name} (${servicesList})`;

        const htmlContent = `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; padding: 40px 0;">
                <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                    
                    <!-- Header -->
                    <div style="background: #18181b; padding: 30px; text-align: center; border-bottom: 4px solid #5A4A32;">
                        <h1 style="color: #5A4A32; margin: 0; font-size: 24px; letter-spacing: 1px;">DAKEEK</h1>
                        <p style="color: #a1a1aa; margin: 5px 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Service Intelligence</p>
                    </div>

                    <!-- Content -->
                    <div style="padding: 40px 30px;">
                        <div style="margin-bottom: 30px;">
                            <h2 style="color: #18181b; font-size: 20px; font-weight: 700; margin: 0 0 10px;">New Request: <span style="color: #5A4A32;">${servicesList}</span></h2>
                            <p style="color: #52525b; font-size: 16px; margin: 0; line-height: 1.5;">
                                <strong>${name}</strong> is requesting assistance via ${contactMethod || 'Website Form'}.
                            </p>
                        </div>

                        <!-- Key Details Card -->
                        <div style="background: #f4f4f5; border-radius: 12px; padding: 20px; margin-bottom: 30px; border-left: 4px solid #5A4A32;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 8px 0; color: #71717a; font-size: 14px;">CLIENT NAME</td>
                                    <td style="padding: 8px 0; color: #18181b; font-weight: 600; text-align: right;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #71717a; font-size: 14px;">PHONE</td>
                                    <td style="padding: 8px 0; color: #18181b; font-weight: 600; text-align: right;">
                                        <a href="tel:${contactInfo}" style="color: #18181b; text-decoration: none;">${contactInfo}</a>
                                    </td>
                                </tr>
                                ${email ? `<tr>
                                    <td style="padding: 8px 0; color: #71717a; font-size: 14px;">EMAIL</td>
                                    <td style="padding: 8px 0; color: #18181b; font-weight: 600; text-align: right;">${email}</td>
                                </tr>` : ''}
                                <tr>
                                    <td style="padding: 8px 0; color: #71717a; font-size: 14px;">LOCATION</td>
                                    <td style="padding: 8px 0; color: #18181b; font-weight: 600; text-align: right;">${location}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #71717a; font-size: 14px;">ISSUE DETAILS</td>
                                    <td style="padding: 8px 0; color: #18181b; font-weight: 600; text-align: right;">${issue || serviceType || 'General Inquiry'}</td>
                                </tr>
                            </table>
                        </div>

                        <!-- Action Buttons -->
                        <div style="text-align: center; margin-top: 40px;">
                            <p style="color: #71717a; font-size: 12px; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px;">Immediate Actions</p>
                            <div style="display: inline-flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
                                <a href="https://wa.me/${contactInfo.replace(/\D/g, '')}" style="background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(37, 211, 102, 0.2);">WhatsApp 💬</a>
                                <a href="tel:${contactInfo}" style="background: #18181b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">Call Now 📞</a>
                            </div>
                        </div>

                    </div>

                    <!-- Footer -->
                    <div style="background: #f4f4f5; padding: 20px; text-align: center; font-size: 12px; color: #a1a1aa;">
                        <p style="margin: 0;">Sent by Dakeek V5 System</p>
                    </div>
                </div>
            </div>
        `;

        // Safe recipient handling: In development, Resend restricts sending to the verified owner email.
        const isProd = process.env.NODE_ENV === 'production';
        const fromEmail = isProd ? 'Dakeek Service <care@dakeek.ae>' : 'Dakeek <onboarding@resend.dev>';

        // In production, send to main email and CC the rest. In dev, only send to verified owner.
        const toEmail = 'care@dakeek.ae';
        const ccEmails: string[] = [];

        // Attempt to send email
        try {
            console.log("[API DEBUG] Attempting delivery via Resend...");
            const { data: resendData, error: resendError } = await resend.emails.send({
                from: fromEmail,
                to: [toEmail],
                ...(ccEmails.length > 0 && { cc: ccEmails }),
                subject: subject,
                html: htmlContent,
                replyTo: clientEmail || undefined,
            });

            if (resendError) {
                console.warn("⚠️ Resend API Error:", resendError);
                throw new Error("Resend failed, trying fallback...");
            }

            console.log("✅ Email dispatched via Resend:", resendData?.id);
            return NextResponse.json({ success: true, message: "Request received", emailId: resendData?.id });

        } catch (error) {
            console.error("❌ Primary Email Method Failed:", error);

            // FALLBACK: Nodemailer
            const emailUser = process.env.EMAIL_USER;
            const emailPass = process.env.EMAIL_PASS;

            if (emailUser && emailPass) {
                try {
                    console.log("[API DEBUG] Attempting delivery via Nodemailer (Gmail SMTP)...");
                    const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: emailUser,
                            pass: emailPass,
                        },
                    });

                    const info = await transporter.sendMail({
                        from: `"Dakeek Bot" <${emailUser}>`,
                        to: [toEmail, ...ccEmails].join(", "),
                        subject: subject,
                        html: htmlContent,
                        replyTo: clientEmail || undefined,
                    });

                    console.log("✅ Email dispatched via Nodemailer:", info.messageId);
                    return NextResponse.json({ success: true, message: "Request received (Fallback)", emailId: info.messageId });
                } catch (fallbackError) {
                    console.error("❌ Fallback Email Method Failed:", fallbackError);
                    return NextResponse.json({ error: "Email Dispatch Failed (All Methods)" }, { status: 502 });
                }
            } else {
                console.error("❌ Fallback Impossible: Missing Credentials");
                console.error(`- EMAIL_USER: ${emailUser ? "Present" : "MISSING"}`);
                console.error(`- EMAIL_PASS: ${emailPass ? "Present" : "MISSING"}`);
            }

            return NextResponse.json({ error: "Email Dispatch Failed (No Fallback Available)" }, { status: 502 });
        }

    } catch (error) {
        console.error("❌ Unhandled API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
