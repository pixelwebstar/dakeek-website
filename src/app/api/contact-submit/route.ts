import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { service, serviceType, issue, contactMethod, name, contactInfo, confirmationEmail } = body;

        // Validating required fields
        if (!service || !contactMethod || !name || !contactInfo) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Determine Client Email (Primary or Optional)
        const clientEmail = contactMethod === 'Email' ? contactInfo : confirmationEmail;

        // Configure Transporter (Mock or Real)
        // NOTE: For production, use environment variables.
        // For this demo/dev, we will log the email to console if no creds are found.
        // Configure Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Verify connection configuration
        try {
            await transporter.verify();
            console.log("✅ SMTP Connection Verified");
        } catch (verifyError) {
            console.error("❌ SMTP Connection Failed:", verifyError);
            return NextResponse.json({ error: "Email Server Connection Failed. Check credentials." }, { status: 500 });
        }

        // Action-Oriented Subject Line
        const subject = `⚠️ ACTION: ${contactMethod} Request - ${name} (${service})`;

        const mailOptions = {
            from: `"Dakeek Assistant" <${process.env.EMAIL_USER}>`,
            to: clientEmail ? `asheejajayan@gmail.com, ${clientEmail}` : 'asheejajayan@gmail.com',
            replyTo: clientEmail || undefined,
            subject: subject,
            html: `
                <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; padding: 40px 0;">
                    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                        
                        <!-- Header -->
                        <div style="background: #18181b; padding: 30px; text-align: center; border-bottom: 4px solid #A18262;">
                            <h1 style="color: #A18262; margin: 0; font-size: 24px; letter-spacing: 1px;">DAKEEK</h1>
                            <p style="color: #a1a1aa; margin: 5px 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Service Intelligence</p>
                        </div>

                        <!-- Content -->
                        <div style="padding: 40px 30px;">
                            <div style="margin-bottom: 30px;">
                                <h2 style="color: #18181b; font-size: 20px; font-weight: 700; margin: 0 0 10px;">New Request: <span style="color: #A18262;">${service}</span></h2>
                                <p style="color: #52525b; font-size: 16px; margin: 0; line-height: 1.5;">
                                    <strong>${name}</strong> is requesting ${serviceType || 'assistance'} (${contactMethod}).
                                </p>
                            </div>

                            <!-- Key Details Card -->
                            <div style="background: #f4f4f5; border-radius: 12px; padding: 20px; margin-bottom: 30px; border-left: 4px solid #A18262;">
                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #71717a; font-size: 14px;">CLIENT NAME</td>
                                        <td style="padding: 8px 0; color: #18181b; font-weight: 600; text-align: right;">${name}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #71717a; font-size: 14px;">CONTACT info</td>
                                        <td style="padding: 8px 0; color: #18181b; font-weight: 600; text-align: right;">${contactInfo}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #71717a; font-size: 14px;">ISSUE DETAILS</td>
                                        <td style="padding: 8px 0; color: #18181b; font-weight: 600; text-align: right;">${issue || serviceType || 'General Inquiry'}</td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Action Buttons -->
                            ${contactMethod !== 'Email' ? `
                            <div style="text-align: center; margin-top: 40px;">
                                <p style="color: #71717a; font-size: 12px; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px;">Immediate Actions</p>
                                <div style="display: inline-flex; gap: 15px;">
                                    <a href="https://wa.me/${contactInfo.replace(/\D/g, '')}" style="background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(37, 211, 102, 0.2);">Chat on WhatsApp 💬</a>
                                    <a href="tel:${contactInfo}" style="background: #18181b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">Call Now 📞</a>
                                </div>
                            </div>
                            ` : ''}

                            <!-- Email Specific Footer -->
                            ${contactMethod === 'Email' ? `
                            <div style="margin-top: 30px; padding: 15px; background: #eff6ff; border-radius: 8px; color: #1e40af; font-size: 14px; text-align: center;">
                                ✉️ <strong>Email Action:</strong> Please reply securely to this thread or compose a new email to <strong>${contactInfo}</strong>.
                            </div>
                            ` : ''}

                        </div>

                        <!-- Footer -->
                        <div style="background: #f4f4f5; padding: 20px; text-align: center; font-size: 12px; color: #a1a1aa;">
                            <p style="margin: 0;">Sent by Dakeek Intelligent Service Assistant</p>
                        </div>
                    </div>
                </div>
            `,
        };

        // Send logic
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
            console.log("Email sent successfully to:", contactInfo);
        } else {
            console.warn("⚠️ No Email Credentials in .env (EMAIL_USER/EMAIL_PASS). Email NOT sent, but logged.");
            console.log("--- MOCK EMAIL ---");
            console.log(JSON.stringify(mailOptions, null, 2));
            console.log("------------------");
        }

        return NextResponse.json({ success: true, message: "Request received successfully" });

    } catch (error) {
        console.error("Email Dispatch Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
