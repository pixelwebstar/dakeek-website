import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const coverLetter = formData.get("coverLetter") as string;
        const position = formData.get("position") as string;
        const resumeFile = formData.get("resume") as File;

        if (!name || !email || !phone || !position || !resumeFile) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Convert the File object to a Buffer
        const arrayBuffer = await resumeFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const subject = `New Job Application: ${position} - ${name}`;
        const toEmails = ['care@dakeek.ae']; // Using the generic inbox as requested
        
        const html = `
            <h2>New Job Application Received</h2>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Applicant Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <hr />
            <h3>Cover Letter / Message:</h3>
            <p>${coverLetter || "<i>No cover letter provided.</i>"}</p>
            <hr />
            <p><em>The applicant's resume is attached to this email.</em></p>
        `;

        const attachmentConfig = [
            {
                filename: resumeFile.name,
                content: buffer
            }
        ];

        // 1. Try Resend
        const resendKey = process.env.RESEND_API_KEY;
        if (resendKey) {
            try {
                const resend = new Resend(resendKey);
                await resend.emails.send({
                    from: 'Dakeek Careers <onboarding@resend.dev>',
                    to: toEmails,
                    subject: subject,
                    html: html,
                    attachments: attachmentConfig
                });
                return NextResponse.json({ success: true });
            } catch (error) {
                console.warn("⚠️ Resend Failed for application, trying fallback...", error);
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
                    from: `"Dakeek Careers" <${emailUser}>`,
                    to: toEmails.join(", "),
                    subject: subject,
                    html: html,
                    attachments: attachmentConfig
                });
                return NextResponse.json({ success: true });
            } catch (error) {
                console.error("❌ Fallback Nodemailer Failed:", error);
            }
        }

        // If we get here, both methods failed.
        return NextResponse.json({ error: "Failed to send application. Check server logs." }, { status: 500 });

    } catch (error) {
        console.error('Apply API Error:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
