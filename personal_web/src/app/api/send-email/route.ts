import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the POST request handler
export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Basic validation (optional)
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Log the presence of environment variables (do not log actual values)
  console.log('EMAIL_USER is', process.env.EMAIL_USER ? 'defined' : 'undefined');
  console.log('EMAIL_PASS is', process.env.EMAIL_PASS ? 'defined' : 'undefined');

  // Set up Nodemailer transporter with SMTP details
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true, // Enable logging
    debug: true,  // Enable debug output
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    // Return success response
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
