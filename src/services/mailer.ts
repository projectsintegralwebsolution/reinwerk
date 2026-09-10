import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export interface ContactMessagePayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  sector?: string;
  serviceInterest?: string;
  message: string;
}

export interface QuoteRequestPayload {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  targetStandard: string;
  roomLength: number;
  roomWidth: number;
  roomHeight: number;
  wallType: string;
  airflowType: string;
  airlockCount: number;
  timeline: string;
  targetBudget?: string;
  additionalNotes?: string;
}

// Create Nodemailer Transporter with Gmail & Generic SMTP support
function createTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const user = process.env.SMTP_USER || "integralwebsolution@gmail.com";
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  // Check if real password is provided (not dummy placeholder)
  const isDummyPass = !pass || pass.includes("xxxx") || pass === "your_smtp_password_here" || pass.length < 8;

  if (!isDummyPass) {
    if (host.includes("gmail")) {
      return nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass }
      });
    }

    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass }
    });
  }

  // Fallback to console logger if dummy password is present
  return null;
}

const transporter = createTransporter();

/**
 * Send Contact Inquiry Email
 */
export async function sendContactEmail(data: ContactMessagePayload): Promise<{ success: boolean; message: string }> {
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "integralwebsolution@gmail.com";

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
      <div style="background: #0b3b60; color: #ffffff; padding: 20px; text-align: center;">
        <h2 style="margin: 0; font-size: 20px;">REINWERK Cleanroom Inquiry</h2>
        <p style="margin: 4px 0 0; font-size: 13px; color: #cbd5e1;">Website: reinwerk.co</p>
      </div>
      <div style="padding: 24px; color: #1e293b;">
        <p style="font-size: 16px; font-weight: bold; color: #0b3b60;">New Contact Form Submission</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
        ${data.sector ? `<p><strong>Sector:</strong> ${data.sector}</p>` : ""}
        <div style="margin-top: 16px; padding: 14px; background: #f8fafc; border-left: 4px solid #0b3b60; border-radius: 4px;">
          <strong>Message:</strong><br>
          ${data.message.replace(/\n/g, "<br>")}
        </div>
      </div>
      <div style="background: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #64748b;">
        Delivered to Admin: ${receiverEmail} • ${new Date().toLocaleString()}
      </div>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"REINWERK Web" <${process.env.SMTP_USER || "integralwebsolution@gmail.com"}>`,
        to: receiverEmail,
        replyTo: data.email,
        subject: `[reinwerk.co] New Contact from ${data.name} (${data.company || "Direct"})`,
        html: htmlContent
      });
      return { success: true, message: "Your message has been sent successfully. An engineer will contact you shortly." };
    } catch (err) {
      console.error("[Nodemailer Error]:", err);
      return { success: false, message: "Mail server delivery failed. Please verify SMTP app password." };
    }
  } else {
    console.log("=================================================");
    console.log(" [DEV MODE] CONTACT EMAIL RECEIVED (Dummy Password Set)");
    console.log(` To: ${receiverEmail}`);
    console.log(` From: ${data.name} <${data.email}>`);
    console.log(` Message: ${data.message}`);
    console.log("=================================================");
    return {
      success: true,
      message: "Your inquiry has been received. (Admin will receive via integralwebsolution@gmail.com once App Password is added)."
    };
  }
}

/**
 * Send Cleanroom Quote Request Email
 */
export async function sendQuoteEmail(data: QuoteRequestPayload): Promise<{ success: boolean; message: string }> {
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "integralwebsolution@gmail.com";
  const floorArea = (data.roomLength * data.roomWidth).toFixed(1);

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
      <div style="background: #0b3b60; color: #ffffff; padding: 20px; text-align: center;">
        <h2 style="margin: 0; font-size: 20px;">REINWERK Cleanroom Quotation Request</h2>
        <p style="margin: 4px 0 0; font-size: 13px; color: #cbd5e1;">Website: reinwerk.co</p>
      </div>
      <div style="padding: 24px; color: #1e293b;">
        <p style="font-size: 16px; font-weight: bold; color: #ba1c24;">New Cleanroom RFQ</p>
        <p><strong>Contact Name:</strong> ${data.fullName}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Industry Sector:</strong> ${data.industry}</p>
        <p><strong>Target Classification:</strong> ${data.targetStandard}</p>
        <p><strong>Approx Floor Area:</strong> ~${floorArea} m²</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        ${data.additionalNotes ? `
        <div style="margin-top: 14px; padding: 12px; background: #f8fafc; border-left: 4px solid #ba1c24; border-radius: 4px;">
          <strong>Project Notes:</strong><br>
          ${data.additionalNotes.replace(/\n/g, "<br>")}
        </div>` : ""}
      </div>
      <div style="background: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #64748b;">
        Delivered to Admin: ${receiverEmail} • ${new Date().toLocaleString()}
      </div>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"REINWERK Web" <${process.env.SMTP_USER || "integralwebsolution@gmail.com"}>`,
        to: receiverEmail,
        replyTo: data.email,
        subject: `[reinwerk.co] Quote Request: ${data.company} (${data.targetStandard})`,
        html: htmlContent
      });
      return { success: true, message: "Cleanroom quote request submitted successfully." };
    } catch (err) {
      console.error("[Nodemailer RFQ Error]:", err);
      return { success: false, message: "Mail server delivery failed. Please verify SMTP app password." };
    }
  } else {
    console.log("=================================================");
    console.log(" [DEV MODE] QUOTE REQUEST RECEIVED (Dummy Password Set)");
    console.log(` To: ${receiverEmail}`);
    console.log(` Client: ${data.fullName} (${data.company})`);
    console.log(` Standard: ${data.targetStandard} | Area: ~${floorArea} m²`);
    console.log("=================================================");
    return {
      success: true,
      message: "Quote request received. (Admin will receive via integralwebsolution@gmail.com once App Password is added)."
    };
  }
}
