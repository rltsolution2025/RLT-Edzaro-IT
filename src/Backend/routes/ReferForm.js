const express = require("express");
const router = express.Router();
const Enquire = require("../models/Refer");
const sendEmail = require("../utils/sendEmail"); // <-- ADD THIS

// Email validation regex
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Phone validation - exactly 10 digits
const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

router.post("/refer", async (req, res) => {
  try {
    const {
      refereeName,
      refereeEmail,
      refereePhone,
      programInterested,
      referredBy,
      refererPhone,
      refererBatchCode,
      status,
    } = req.body;

    // Required fields validation
    if (
      !refereeName ||
      !refereeEmail ||
      !refereePhone ||
      !programInterested ||
      !referredBy ||
      !refererPhone ||
      !refererBatchCode
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate referee email
    if (!validateEmail(refereeEmail)) {
      return res.status(400).json({ message: "Referee email is invalid." });
    }

    // Validate referee phone
    if (!validatePhone(refereePhone)) {
      return res.status(400).json({ message: "Referee phone must be 10 digits." });
    }

    // Validate referrer phone
    if (!validatePhone(refererPhone)) {
      return res.status(400).json({ message: "Referrer phone must be 10 digits." });
    }

    // Validate batch code
    if (refererBatchCode.trim().length < 2) {
      return res.status(400).json({
        message: "Batch code must contain at least 2 characters.",
      });
    }

    // Save into DB
    const newEnquiry = new Enquire({
      refereeName,
      refereeEmail,
      refereePhone,
      programInterested,
      referredBy,
      refererPhone,
      refererBatchCode,
      status,
    });

    await newEnquiry.save();
    console.log("Reference Form saved:", newEnquiry);

    // 1️⃣ 📧 SEND EMAIL TO ADMIN
    await sendEmail(
      "rltsolutionspvtltd@gmail.com",  // <-- REPLACE WITH YOUR EMAIL
      "New Reference Form Submitted",
      `
        <h2>New Referral Received</h2>
        <p><strong>Referee Name:</strong> ${refereeName}</p>
        <p><strong>Referee Email:</strong> ${refereeEmail}</p>
        <p><strong>Referee Phone:</strong> ${refereePhone}</p>
        <p><strong>Program Interested:</strong> ${programInterested}</p>
        <p><strong>Referred By:</strong> ${referredBy}</p>
        <p><strong>Referrer Phone:</strong> ${refererPhone}</p>
        <p><strong>Batch Code:</strong> ${refererBatchCode}</p>
      `
    );

    // 2️⃣ 📧 SEND EMAIL TO REFEREE (USER)
    await sendEmail(
      refereeEmail,
      "We Received Your Referral – Thank You!",
      `
        <h2>Hello ${refereeName},</h2>
        <p>Thank you for showing interest in our program.</p>
        <p>Our admission team will reach out to you shortly.</p>

        <h4>Your submitted details:</h4>
        <p><strong>Program Interested:</strong> ${programInterested}</p>
        <p><strong>Referred By:</strong> ${referredBy}</p>

        <br/>
        <p>Regards,</p>
        <p><strong>RLT Edzaro Team</strong></p>
      `
    );

    return res.status(201).json({
      message: "Reference Form submitted successfully & emails sent.",
    });

  } catch (error) {
    console.error("Error submitting enquiry:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
