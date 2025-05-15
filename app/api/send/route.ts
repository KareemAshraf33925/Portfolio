// export const dynamic = 'force-dynamic'; // ضروري إذا كنت تستخدم استيرادات ديناميكية

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request:any) {
  const { name, email, message } = await request.json();

  try {
    // إنشاء ناقل البريد
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // خيارات البريد الإلكتروني
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // أو أي بريد آخر تريد استقبال الرسائل عليه
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // إرسال البريد الإلكتروني
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({  message: 'Email sent Failed'  }, { status: 500 });
  }
}