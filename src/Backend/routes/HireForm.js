const express = require("express");
const router = express.Router();
const Enquire = require("../models/Hire");
const sendEmail = require("../utils/sendEmail");

const validateEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

router.post("/hire", async (req, res) => {
  try {
    const { companyName, yourName, email, roles } = req.body;

    if (!companyName || !yourName || !email || !roles) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const newEnquiry = new Enquire({
      companyName,
      yourName,
      email,
      roles,
    });

    await newEnquiry.save();

    // 1️⃣ 📧 Send email to Admin
    await sendEmail(
      "rltsolutionspvtltd@gmail.com",
      "New Hire Enquiry Received",
      `
        <h2>New Hire Request</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Name:</strong> ${yourName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Roles:</strong> ${roles}</p>
      `
    );

    // 2️⃣ 📧 Send email to USER (confirmation)
    await sendEmail(
      email,
      "We Received Your Hiring Request ✔",
      `
        <h2>Hello ${yourName},</h2>
        <p>Thank you for submitting your hiring enquiry.</p>
        <p>Our team will contact you soon.</p>
        <br/>
        <p><strong>Submitted Details:</strong></p>
        <p>Company: ${companyName}</p>
        <p>Roles Requested: ${roles}</p>
        <br/>
        <p>Regards,</p>
        <p><strong>RLT Edzaro Team</strong></p>
      `
    );

    return res.status(201).json({
      message: "Enquiry submitted. Email sent to admin and user.",
    });

  } catch (error) {
    console.error("Error submitting enquiry:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
