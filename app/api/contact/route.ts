import nodemailer from "nodemailer";

export async function POST(req:any) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,       //owner email
        pass: process.env.GMAIL_APP_PASS,   // app passward from gmail
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Message from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
