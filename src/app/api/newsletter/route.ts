import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const subject = `New Newsletter Subscriber: ${email}`;
        const toEmails = ['care@dakeek.ae']; // Using the generic inbox as requested
        
        const html = `
            <h2>New Newsletter Subscriber Received</h2>
            <p><strong>Email Address:</strong> ${email}</p>
            <hr />
            <p><em>This user requested to stay informed via the Journal page.</em></p>
        `;

        // 1. Try Resend
        const resendKey = process.env.RESEND_API_KEY;
        if (resendKey) {
            try {
                const resend = new Resend(resendKey);
                await resend.emails.send({
                    from: 'Dakeek System <onboarding@resend.dev>',
                    to: toEmails,
                    subject: subject,
                    html: html
                });
                return NextResponse.json({ success: true });
            } catch (error) {
                console.warn("⚠️ Resend Failed for newsletter, trying fallback...", error);
            }
        }

        // 2. Fallback to Nodemailer
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;

        if (emailUser && emailPass) {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: emailUser,
                        pass: emailPass
                    }
                });

                await transporter.sendMail({
                    from: `"Dakeek System" <${emailUser}>`,
                    to: toEmails.join(", "),
                    subject: subject,
                    html: html
                });
                return NextResponse.json({ success: true });
            } catch (error) {
                console.error("❌ Fallback Nodemailer Failed:", error);
            }
        }

        return NextResponse.json({ error: "Failed to process newsletter subscription." }, { status: 500 });

    } catch (error) {
        console.error('Newsletter API Error:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
