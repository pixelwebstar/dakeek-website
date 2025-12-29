import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { service, serviceType, issue, contactMethod, name, contactInfo } = body;

        // Validating required fields
        if (!service || !contactMethod || !name || !contactInfo) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Configure Transporter (Mock or Real)
        // NOTE: For production, use environment variables.
        // For this demo/dev, we will log the email to console if no creds are found.
        const transporter = nodemailer.createTransport({
            // Example: Gmail (requires App Password) or SMTP service
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // e.g. "orders@dakeek.ae"
                pass: process.env.EMAIL_PASS  // App password
            }
        });

        // Action-Oriented Subject Line
        const subject = `⚠️ ACTION: ${contactMethod} Request - ${name} (${service})`;

        const mailOptions = {
            from: '"Dakeek Assistant" <no-reply@dakeek.ae>',
            to: `orders@dakeek.ae, ${contactInfo}`,
            subject: subject,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; border: 1px solid #ddd; padding: 20px; max-width: 600px;">
                    <h2 style="color: #A18262;">New Service Request</h2>
                    <p><strong>Status:</strong> <span style="background: #e6fffa; color: #047857; padding: 4px 8px; rounded: 4px;">Pending Action</span></p>
                    
                    <hr style="border-top: 1px solid #eee; margin: 20px 0;" />
                    
                    <h3>👤 Client Details</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Contact:</strong> ${contactInfo}</p>
                    <p><strong>Preferred Method:</strong> <strong>${contactMethod}</strong></p>
                    
                    <h3>🛠️ Service Requested</h3>
                    <ul>
                        <li><strong>Category:</strong> ${service}</li>
                        <li><strong>Specifics:</strong> ${serviceType || issue}</li>
                    </ul>

                    <div style="background: #fdf2f8; color: #be185d; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <strong>Next Step:</strong> Please ${contactMethod === 'Email' ? 'email' : (contactMethod === 'WhatsApp' ? 'WhatsApp' : 'call')} this client immediately.
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
