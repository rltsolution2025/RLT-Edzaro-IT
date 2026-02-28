import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { CallbackRequest } from "../pages/Api/Api";
import { useNavigate, useLocation } from "react-router-dom";

const CallbackForm = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  /** ⭐ Build perfect thank-you path */
  const getThankYouPath = () => {
    let basePath = location.pathname;

    // remove trailing slash ("/refer/" → "/refer")
    if (basePath.endsWith("/")) {
      basePath = basePath.slice(0, -1);
    }

    // prevent double /thank-you ("/refer/thank-you" → "/refer")
    if (basePath.endsWith("/thank-you")) {
      basePath = basePath.replace("/thank-you", "");
    }

    // if root "/", return global thank-you
    if (basePath === "" || basePath === "/") {
      return "/thank-you";
    }

    // otherwise append thank-you to current path
    return `${basePath}/thank-you`;
  };

  /** Email Validation */
  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  /** Phone Validation */
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  /** Handle Input */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });

    let newErrors = { ...errors };

    if (name === "email") {
      newErrors.email = validateEmail(value)
        ? ""
        : "Please enter a valid email address";
    }

    if (name === "phone") {
      newErrors.phone = validatePhone(value)
        ? ""
        : "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
  };

  /** Submit Handler */
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      await CallbackRequest(formData);

      handleClose();

      setFormData({ name: "", email: "", phone: "" });
      setErrors({ email: "", phone: "" });

      // ⭐ Generate correct thank-you URL
      const finalPath = getThankYouPath();
      navigate(finalPath);

    } catch (error) {
      alert("Failed to submit callback request. Please try again.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Body style={{ padding: 0, position: "relative" }}>
        
        <Button
          variant="light"
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
            borderRadius: "50%",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          ✕
        </Button>

        <Row className="g-0" style={{ height: "100%" }}>
          <Col md={6}>
            <img
              src="/assets/Callback.png"
              alt="Request Callback"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "0.3rem",
                borderBottomLeftRadius: "0.3rem",
              }}
            />
          </Col>

          <Col
            md={6}
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              borderTopRightRadius: "0.3rem",
              borderBottomRightRadius: "0.3rem",
            }}
          >
            <h4 className="mb-4 text-center">Request a Callback</h4>

            <Form onSubmit={handleSubmit}>
              
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  isInvalid={!!errors.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  isInvalid={!!errors.phone}
                  maxLength={10}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-2">
                Submit
              </Button>

            </Form>
          </Col>
        </Row>

      </Modal.Body>
    </Modal>
  );
};

export default CallbackForm;
