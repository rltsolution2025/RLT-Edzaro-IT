const express = require("express");
const router = express.Router();
const Enquire = require("../models/Enquire");
const sendEmail = require("../utils/sendEmail"); // <-- ADD THIS

// Email validation regex
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Phone validation (10 digits only)
const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

router.post("/enquire", async (req, res) => {
  try {
    const { name, email, phone, agree } = req.body;

    // Required fields validation
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

    // Agree checkbox must be true
    if (agree !== true) {
      return res
        .status(400)
        .json({ error: "You must agree to receive communications" });
    }

    // Save enquiry in DB
    const newEnquire = new Enquire({ name, email, phone, agree });
    await newEnquire.save();

    console.log("Enquiry saved:", newEnquire);

    // --------------------------------------------------------
    // 1️⃣ SEND EMAIL TO ADMIN
    // --------------------------------------------------------
    await sendEmail(
      "rltsolutionspvtltd@gmail.com", // <-- Replace with your email
      "New Enquiry Form Submitted",
      `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Agreed for communications:</strong> ${agree}</p>
      `
    );

    // --------------------------------------------------------
    // 2️⃣ SEND CONFIRMATION EMAIL TO USER
    // --------------------------------------------------------
    await sendEmail(
      email,
      "Thank You for Your Enquiry",
      `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting us! We have received your enquiry.</p>
        <p>Our team will reach out to you shortly.</p>

        <br>
        <p>Regards,</p>
        <p><strong>RLT Edzaro</strong></p>
      `
    );

    // Response to frontend
    res.status(201).json({
      message: "Enquiry submitted successfully & emails sent.",
      data: newEnquire,
    });

  } catch (err) {
    console.error("Error saving enquiry:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

