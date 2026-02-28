const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // ✅ correct Gmail SMTP
      port: 587,
      secure: false, // use TLS
      auth: {
        user: process.env.EMAIL_USER, // e.g., contact@rltedzaro.com
        pass: process.env.EMAIL_PASS, // App Password if using Gmail 2FA
      },
      tls: {
        rejectUnauthorized: false, // optional
      },
    });

    const mailOptions = {
      from: `"RLT Edzaro" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent successfully!");
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    throw error;
  }
};

module.exports = sendEmail;
