import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
    name,
    email,
    service,
    timeline,
    message,
    } = body;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'njain1845@gmail.com', // your email
      replyTo: email,
      subject: `🚀 New Nexora Project Enquiry | ${service}`,
      html: `
            <div style="
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 0 auto;
            background: #0A0A0F;
            color: #FFFFFF;
            padding: 40px;
            border-radius: 16px;
            ">

            <div style="margin-bottom: 32px;">
                <div style="
                font-size: 12px;
                letter-spacing: 4px;
                color: #00F0FF;
                text-transform: uppercase;
                ">
                Nexora Client Portal
                </div>

                <h1 style="
                margin: 12px 0 0 0;
                font-size: 32px;
                font-weight: 300;
                ">
                New Project Enquiry
                </h1>
            </div>

            <div style="
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 12px;
                padding: 24px;
                margin-bottom: 24px;
            ">

                <h2 style="
                font-size: 14px;
                color: #00F0FF;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin-bottom: 18px;
                ">
                Client Information
                </h2>

                <p><strong>Name / Business:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service Required:</strong> ${service}</p>
                <p><strong>Desired Timeline:</strong> ${timeline}</p>

            </div>

            <div style="
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 12px;
                padding: 24px;
                margin-bottom: 24px;
            ">

                <h2 style="
                font-size: 14px;
                color: #00F0FF;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin-bottom: 18px;
                ">
                Project Details
                </h2>

                <p style="
                line-height: 1.8;
                white-space: pre-wrap;
                ">
                ${message}
                </p>

            </div>

            <div style="
                font-size: 12px;
                color: #9CA3AF;
                border-top: 1px solid rgba(255,255,255,0.08);
                padding-top: 20px;
            ">
                <p>Submitted via the Nexora website enquiry form.</p>
                <p>Received: ${new Date().toLocaleString()}</p>
            </div>

            </div>
            `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}