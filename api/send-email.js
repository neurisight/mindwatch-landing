import nodemailer from "nodemailer";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, hospital, specialty, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({ error: "Email config missing on server" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Zoho app password
      },
    });

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      hospital: escapeHtml(hospital || "Not provided"),
      specialty: escapeHtml(specialty || "Not provided"),
      message: escapeHtml(message || "No message provided").replace(
        /\n/g,
        "<br/>",
      ),
    };

    const subject = `New Contact Form Submission from ${safe.name}`;

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safe.name}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Hospital/Facility:</strong> ${safe.hospital}</p>
      <p><strong>Specialty:</strong> ${safe.specialty}</p>
      <p><strong>Message:</strong></p>
      <p>${safe.message}</p>
    `;

    const text = `New Contact Form Submission

Name: ${name}
Email: ${email}
Hospital/Facility: ${hospital || "Not provided"}
Specialty: ${specialty || "Not provided"}

Message:
${message || "No message provided"}
`;

    await transporter.sendMail({
      from: `"NeuriSight Contact" <${process.env.EMAIL_USER}>`,
      to: "info@neurisight.io",
      replyTo: email,
      subject,
      html,
      text,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    // Nodemailer sometimes nests details here:
    const msg = error?.response || error?.message || "Failed to send email";
    return res.status(500).json({ error: msg });
  }
}
