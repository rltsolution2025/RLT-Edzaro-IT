const CallBack = require("../models/CallBack");
const sendEmail = require("../utils/sendEmail"); // <-- ADD THIS

// Email validation regex
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Phone validation (10 digits only)
const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

const handleCallbackRequest = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Check required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Email validation
    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Phone validation
    if (!validatePhone(phone)) {
      return res
        .status(400)
        .json({ error: "Phone number must be exactly 10 digits" });
    }

    // Save data
    const newCallback = new CallBack({ name, email, phone });
    await newCallback.save();

    console.log("New callback request saved:", newCallback);

    // ---------------------------------------------------------------
    // 1️⃣ SEND EMAIL TO ADMIN
    // ---------------------------------------------------------------
    await sendEmail(
      "rltsolutionspvtltd@gmail.com", // <-- Replace with your admin email
      "New Callback Request",
      `
        <h2>New Callback Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `
    );

    // ---------------------------------------------------------------
    // 2️⃣ SEND CONFIRMATION EMAIL TO USER
    // ---------------------------------------------------------------
    await sendEmail(
      email,
      "We Will Call You Shortly",
      `
        <h2>Hello ${name},</h2>
        <p>Thank you for requesting a callback!</p>
        <p>Our team will contact you soon on your registered phone number.</p>

        <p><strong>Your Details:</strong></p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>

        <br/>
        <p>Warm Regards,</p>
        <p><strong>RLT Edzaro Team</strong></p>
      `
    );

    return res.status(201).json({
      message: "Callback request received & emails sent successfully!",
      data: newCallback,
    });

  } catch (err) {
    console.error("Callback Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { handleCallbackRequest };
