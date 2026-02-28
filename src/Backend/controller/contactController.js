const contact = require("../models/contact");
const sendEmail = require("../utils/sendEmail"); // <-- ADD THIS

// Email validation regex
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Phone validation (10 digits only)
const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Required fields check
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Email format validation
    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Phone number validation
    if (!validatePhone(phone)) {
      return res
        .status(400)
        .json({ error: "Phone number must be exactly 10 digits" });
    }

    // Save the data
    const newContact = await contact.create({
      name,
      email,
      phone,
      message,
    });

    console.log("Contact form saved:", newContact);

    // ----------------------------------------------------------------
    // 1️⃣ SEND EMAIL TO ADMIN
    // ----------------------------------------------------------------
    await sendEmail(
      "rltsolutionspvtltd@gmail.com", // <-- replace with your admin email
      "New Contact Form Submission",
      `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    );

    // ----------------------------------------------------------------
    // 2️⃣ SEND CONFIRMATION EMAIL TO USER
    // ----------------------------------------------------------------
    await sendEmail(
      email,
      "We Received Your Message!",
      `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting us.</p>
        <p>We have received your message and our team will get back to you soon.</p>

        <h4>Your Message:</h4>
        <p>${message}</p>

        <br/>
        <p>Regards,</p>
        <p><strong>RLT Edzaro</strong></p>
      `
    );

    return res.status(200).json({
      success: true,
      message: "Contact form submitted & emails sent successfully!",
      data: newContact,
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = { submitContactForm };
