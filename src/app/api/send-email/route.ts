import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the POST request handler
export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Basic validation (optional)
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Check if environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Email credentials are not configured");
    console.log(
      "EMAIL_USER is",
      process.env.EMAIL_USER ? "defined" : "undefined"
    );
    console.log(
      "EMAIL_PASS is",
      process.env.EMAIL_PASS ? "defined" : "undefined"
    );
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Please set up environment variables.",
      },
      { status: 503 }
    );
  }

  // Set up Nodemailer transporter with SMTP details
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true, // Enable logging
    debug: true, // Enable debug output
  });

  try {
    // Create beautiful HTML email template matching website style
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Message</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif; background-color: #ffffff; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #ffffff;">
          <tr>
            <td align="center" style="padding: 48px 20px;">
              
              <!-- Main Card Container -->
              <table role="presentation" style="max-width: 640px; width: 100%; border-collapse: collapse; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid #d2d2d7; border-radius: 16px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);">
                
                <!-- Header -->
                <tr>
                  <td style="padding: 40px 40px 32px;">
                    <h1 style="margin: 0 0 8px; color: #1d1d1f; font-size: 36px; font-weight: 600; letter-spacing: -0.5px; line-height: 1.2;">
                      Get in Touch
                    </h1>
                    <p style="margin: 0; color: #6e6e73; font-size: 17px; font-weight: 400; line-height: 1.5;">
                      New message from your personal website
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 0 40px 40px;">
                    
                    <!-- Name Field -->
                    <div style="margin-bottom: 24px;">
                      <label style="display: block; margin-bottom: 10px; font-size: 14px; font-weight: 500; color: #1d1d1f;">
                        Name
                      </label>
                      <div style="background-color: #f9f9fb; border: 1px solid #d2d2d7; border-radius: 12px; padding: 14px 16px;">
                        <p style="margin: 0; font-size: 15px; color: #1d1d1f; font-weight: 400;">
                          ${name}
                        </p>
                      </div>
                    </div>
                    
                    <!-- Email Field -->
                    <div style="margin-bottom: 24px;">
                      <label style="display: block; margin-bottom: 10px; font-size: 14px; font-weight: 500; color: #1d1d1f;">
                        Email
                      </label>
                      <div style="background-color: #f9f9fb; border: 1px solid #d2d2d7; border-radius: 12px; padding: 14px 16px;">
                        <a href="mailto:${email}" style="margin: 0; font-size: 15px; color: #007aff; text-decoration: none; font-weight: 400;">
                          ${email}
                        </a>
                      </div>
                    </div>
                    
                    <!-- Message Field -->
                    <div style="margin-bottom: 32px;">
                      <label style="display: block; margin-bottom: 10px; font-size: 14px; font-weight: 500; color: #1d1d1f;">
                        Message
                      </label>
                      <div style="background-color: #f9f9fb; border: 1px solid #d2d2d7; border-radius: 12px; padding: 14px 16px;">
                        <p style="margin: 0; font-size: 15px; color: #1d1d1f; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word; font-weight: 400;">
${message}
                        </p>
                      </div>
                    </div>
                    
                    <!-- Reply Button -->
                    <div style="text-align: center;">
                      <a href="mailto:${email}?subject=Re: Your message" style="display: inline-block; padding: 16px 32px; background-color: #007aff; color: #ffffff; text-decoration: none; border-radius: 9999px; font-size: 16px; font-weight: 500; box-shadow: 0 4px 12px rgba(0, 122, 255, 0.25); transition: all 0.2s;">
                        Send Message →
                      </a>
                    </div>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 40px 32px;">
                    <p style="margin: 0; font-size: 13px; color: #6e6e73; text-align: center; line-height: 1.6;">
                      ${new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </td>
                </tr>
                
              </table>
              
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER, // Defaults to EMAIL_USER if FROM not set
      to: process.env.EMAIL_USER,
      subject: `Message from Personal Website - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: htmlTemplate,
    });

    // Return success response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
