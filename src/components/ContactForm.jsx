import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { submitContactForm } from "../pages/Api/Api";
import { useNavigate, useLocation } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [phoneError, setPhoneError] = useState("");

  // ⭐ FIXED FUNCTION TO BUILD CORRECT THANK-YOU PATH
  const getThankYouPath = () => {
    let basePath = location.pathname;

    // remove trailing slash ("/contact/" → "/contact")
    if (basePath.endsWith("/")) {
      basePath = basePath.slice(0, -1);
    }

    // prevent duplicate thank-you
    if (basePath.endsWith("/thank-you")) {
      basePath = basePath.replace("/thank-you", "");
    }

    // if root "/", navigate to /thank-you
    if (basePath === "" || basePath === "/") {
      return "/thank-you";
    }

    // for any other page
    return `${basePath}/thank-you`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;

      if (value.length > 10) setPhoneError("Phone number cannot exceed 10 digits");
      else if (value.length < 10 && value.length > 0)
        setPhoneError("Phone number must be exactly 10 digits");
      else setPhoneError("");
    }

    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitContactForm(contact);

      // reset form
      setContact({ name: "", email: "", phone: "", message: "" });

      // ⭐ dynamically generate thank-you URL
      const finalPath = getThankYouPath();

      navigate(finalPath);

    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="shadow p-4 border-0 rounded-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              isInvalid={!!phoneError}
            />
            <Form.Control.Feedback type="invalid">
              {phoneError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={contact.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100 py-2 fw-semibold">
            Submit Inquiry
          </Button>
        </Form>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
