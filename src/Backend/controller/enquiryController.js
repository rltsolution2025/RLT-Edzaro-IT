// controllers/enquiryController.js
const Enquiry = require("../models/enquiry");
const sendEmail = require("../utils/sendEmail"); // <-- ADD THIS

const ALLOWED_COURSES = [
  "AWS Cloud Graduate Programme",
    "Center for Artificial Intelligence",
    "AI Lab for Schools",
    "AI-Infinity (Technical / Fundamental)",
    "Others",
];

// Email validation regex
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Phone validation (10 digits only)
const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

const submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone, course } = req.body;

    if (!name || !email || !phone  || !course) {
      return res.status(400).json({ error: "All fields are required" }); 
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (!validatePhone(phone)) {
      return res
        .status(400)
        .json({ error: "Phone number must be exactly 10 digits" });
    }

    if (!ALLOWED_COURSES.includes(course)) {
      return res.status(400).json({ error: "Invalid course selected" });
    }

    const newEnquiry = await Enquiry.create({
      name,
      email,
      phone,
      course,
    });

    await sendEmail(
      "rltsolutionspvtltd@gmail.com",
      "New Program Enquiry Submitted",
      `
        <h2>New Enquiry Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course Interested:</strong> ${course}</p>
      `
    );

    await sendEmail(
      email,
      "We Received Your Enquiry!",
      `
        <h2>Hello ${name},</h2>
        <p>Thank you for your interest in our <strong>${course}</strong> program.</p>
        <p>Our team will contact you soon.</p>
        <br>
        <p>Warm Regards,<br><strong>RLT Edzaro</strong></p>
      `
    );

    return res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: newEnquiry,
    });

  } catch (error) {
    console.error("Error submitting enquiry:", error);
    return res.status(500).json({ error: "Failed to submit enquiry" });
  }
};

module.exports = { submitEnquiry };

