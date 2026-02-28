import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { SubmitEnquiryForm } from "../pages/Api/Api";
import { useNavigate, useLocation } from "react-router-dom";

const EnrollForm = ({ courseName }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agree: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  /** ⭐ Build perfect thank-you path */
  const getThankYouPath = () => {
    let basePath = location.pathname;

    // Remove trailing slash
    if (basePath.endsWith("/")) {
      basePath = basePath.slice(0, -1);
    }

    // Prevent duplicate thank-you
    if (basePath.endsWith("/thank-you")) {
      basePath = basePath.replace("/thank-you", "");
    }

    // If root
    if (basePath === "" || basePath === "/") {
      return "/thank-you";
    }

    return `${basePath}/thank-you`;
  };

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation (exactly 10 digits)
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      setErrors((prev) => ({
        ...prev,
        phone: validatePhone(value) ? "" : "Phone number must be 10 digits",
      }));
    }

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value) ? "" : "Enter a valid email address",
      }));
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Enter a valid email address",
      }));
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must be 10 digits",
      }));
      return;
    }

    try {
      await SubmitEnquiryForm(formData);

      setFormData({ name: "", email: "", phone: "", agree: false });
      setErrors({ email: "", phone: "" });

      const finalPath = getThankYouPath();
      navigate(finalPath);

    } catch (error) {
      alert(`❌ ${error.message || "Error submitting form."}`);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="p-5 bg-white rounded-3xl shadow-lg"
    
    >
      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        
        <Form.Group>
          <Form.Control
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="py-3 rounded-xl border-gray-300"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={`py-3 rounded-xl border-gray-300 ${
              errors.email ? "is-invalid" : ""
            }`}
            required
          />
          {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Phone (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            className={`py-3 rounded-xl border-gray-300 ${
              errors.phone ? "is-invalid" : ""
            }`}
            required
          />
          {errors.phone && <div className="text-danger mt-1">{errors.phone}</div>}
        </Form.Group>

        <Form.Group className="form-check">
          <Form.Check
            type="checkbox"
            name="agree"
            label="I agree to receive SMS & WhatsApp communications on this number."
            checked={formData.agree}
            onChange={handleChange}
            className="text-muted"
            required
          />
        </Form.Group>

        <Button
          type="submit"
          variant="warning"
          className="w-100 rounded-xl fw-bold py-3 shadow-sm hover:shadow-md transition"
        >
          Enroll Now
        </Button>
      </Form>

      <style>{`
        .rounded-3xl { border-radius: 1.5rem !important; }
        .gap-4 > *:not(:last-child) { margin-bottom: 1rem !important; }
        .transition { transition: all 0.3s ease-in-out; }
        .hover\\:shadow-md:hover { box-shadow: 0px 6px 20px rgba(0,0,0,0.1); }
      `}</style>
    </div>
  );
};

export default EnrollForm;
