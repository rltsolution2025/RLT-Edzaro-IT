import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import './Refer.css';
import { submitReference } from './Api/Api';
import { Helmet } from "react-helmet-async";
import { useNavigate, useLocation } from "react-router-dom";

const ReferFriend = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
    programInterested: "",
    referredBy: "",
    refererPhone: "",
    refererBatchCode: "",
    status: "Pending",
  });

  const [errors, setErrors] = useState({
    refereeEmail: "",
    refereePhone: "",
    refererPhone: "",
    refererBatchCode: ""
  });

  const [message, setMessage] = useState("");

  /** ⭐ Dynamic Thank-You URL Builder */
  const getThankYouPath = () => {
    let basePath = location.pathname;

    if (basePath.endsWith("/")) basePath = basePath.slice(0, -1);
    if (basePath.endsWith("/thank-you")) basePath = basePath.replace("/thank-you", "");
    if (basePath === "" || basePath === "/") return "/thank-you";

    return `${basePath}/thank-you`;
  };

  // Email validation
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Phone validation (10 digits)
  const validatePhone = (phone) =>
    /^[0-9]{10}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "refereeEmail") {
      setErrors((prev) => ({
        ...prev,
        refereeEmail: validateEmail(value)
          ? ""
          : "Enter a valid email address",
      }));
    }

    if (name === "refereePhone") {
      setErrors((prev) => ({
        ...prev,
        refereePhone: validatePhone(value)
          ? ""
          : "Phone must be 10 digits",
      }));
    }

    if (name === "refererPhone") {
      setErrors((prev) => ({
        ...prev,
        refererPhone: validatePhone(value)
          ? ""
          : "Phone must be 10 digits",
      }));
    }

    if (name === "refererBatchCode") {
      setErrors((prev) => ({
        ...prev,
        refererBatchCode: value.trim() ? "" : "Batch code is required",
      }));
    }

    if ((name === "refereePhone" || name === "refererPhone") && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Final validation on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let finalErrors = {};

    if (!validateEmail(formData.refereeEmail)) {
      finalErrors.refereeEmail = "Enter a valid email address";
    }

    if (!validatePhone(formData.refereePhone)) {
      finalErrors.refereePhone = "Phone must be 10 digits";
    }

    if (!validatePhone(formData.refererPhone)) {
      finalErrors.refererPhone = "Phone must be 10 digits";
    }

    if (!formData.refererBatchCode.trim()) {
      finalErrors.refererBatchCode = "Batch code is required";
    }

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      return;
    }

    try {
      await submitReference(formData);

      const finalPath = getThankYouPath();
      navigate(finalPath);

      setFormData({
        refereeName: "",
        refereeEmail: "",
        refereePhone: "",
        programInterested: "",
        referredBy: "",
        refererPhone: "",
        refererBatchCode: "",
        status: "Pending",
      });

      setErrors({});
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setMessage(`❌ ${error.message || "Error submitting form."}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" refer-bg"
    >
      <Helmet>
        <title>Refer Friends & Earn Course Credits | RLT Edzaro</title>
        <meta 
          name="description"
          content="Help friends start their IT learning journey. Refer & earn course discounts, mentorship rewards, and exclusive benefits."
        />
         <link rel="canonical" href="https://rltedzaro.com/refer-and-earn" />
      </Helmet>

  <section className="refer-section animated-bg-refer position-relative">
  
  {/* 🔹 HERO BACKGROUND IMAGE */}
  <div className="refer-hero-bg"
   style={{backgroundImage : "url('/assets/Refer&Reward.png')" }}
   ></div>
  <div className="refer-hero-overlay"></div>

  {/* Decorative background shape */}
  <div className="refer-shape"></div>

  <div className="container hero-content position-relative">
    <div className="row align-items-center min-vh-75">

      {/* LEFT ILLUSTRATION */}
      <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
        <div className="refer-illustration position-relative">
          
          {/* <div className="floating-bubble bubble-1">
            <i className="bi bi-person-plus-fill display-6"></i>
          </div>
          <div className="floating-bubble bubble-2">
            <i className="bi bi-gift-fill display-6"></i>
          </div>
          <div className="floating-bubble bubble-3">
            <i className="bi bi-megaphone-fill display-6"></i>
          </div> */}

          <img
            src="/assets/Refer&Earn.png"
            alt="Refer a Friend"
            className="img-fluid rounded-4 shadow-lg"
            // style={{ maxHeight: "600px" }}
          />
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="col-md-6 text-white">
        <h1 className="fw-bold display-5">
          Refer Your <span className="brand">Friends</span> & Earn Rewards!
        </h1>

        <p className="lead mt-3">
          Invite your friends to join <strong>Edzaro</strong> and help them kickstart their
          learning journey. For every successful referral, you earn exciting rewards
          and help build our growing community of learners.
        </p>

        {/* 🔘 REFER NOW BUTTON (Hero CTA) */}
        <button
          className="btn btn-primary btn-lg mt-4 fw-semibold shadow"
          onClick={() => {
            const target = document.getElementById("refer-form");
            if (target) {
              const yOffset = -120;
              const y =
                target.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          Refer Now
        </button>
      </div>

    </div>
  </div>
</section>


      <Container>
        {/* Benefits Section */}
        <Row className="mb-5">
          {[
            {
              icon: "https://cdn-icons-png.flaticon.com/512/4202/4202842.png",
              title: "Rs. 20000 Credit for You",
              text: "Get 20000 off your next course when your friend enrolls",
              color: "primary",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
              title: "Rs.10000 Off for Friend",
              text: "Your friend gets 10000 off their first course enrollment",
              color: "success",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
              title: "Extra Rewards",
              text: "Refer 3+ friends and get exclusive mentorship sessions",
              color: "warning",
            },
          ].map((item, i) => (
            <Col md={4} className="mb-4 mt-4" key={i}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="card h-100 text-center shadow border-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="card-body">
                  <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="mb-3"
                    width={70}
                    height={70}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Referral Form */}
        <Row className="mb-5" id="refer-form" >
          <Col md={8} className="mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <Card.Header className="bg-primary text-white">
                  <h4 className="mb-0" >Share Your Referral </h4>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>

                    {/* Referee Name & Email */}
                    <Row className="mb-3">
                      <Col md={6} className="mb-2">
                        <Form.Control
                          type="text"
                          name="refereeName"
                          value={formData.refereeName}
                          onChange={handleChange}
                          placeholder="Referee's Name"
                          required
                        />
                      </Col>

                      <Col md={6}>
                        <Form.Control
                          type="email"
                          name="refereeEmail"
                          value={formData.refereeEmail}
                          onChange={handleChange}
                          placeholder="Referee's Email"
                          isInvalid={!!errors.refereeEmail}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.refereeEmail}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>

                    {/* Referee Phone */}
                    <Form.Control
                      type="text"
                      name="refereePhone"
                      value={formData.refereePhone}
                      onChange={handleChange}
                      placeholder="Referee's Phone (10 digits)"
                      className="mb-2"
                      isInvalid={!!errors.refereePhone}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.refereePhone}
                    </Form.Control.Feedback>

                    {/* Program Select */}
                    <Form.Select
                      name="programInterested"
                      value={formData.programInterested}
                      onChange={handleChange}
                      className="mb-3"
                      required
                    >
                      <option value="">Select Program Interested</option>
                      <option value="AI-for-Developer">AI for Developer</option>
                      <option value="Cloud-Developer">Cloud Developer</option>
                      <option value="Center-for-AI">Center for Artificial Intelligence</option>
                      <option value="AI-Lab">AI Lab</option>
                    </Form.Select>

                    {/* Referred By */}
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="referredBy"
                        value={formData.referredBy}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />

                      <Form.Control
                        type="text"
                        name="refererPhone"
                        value={formData.refererPhone}
                        onChange={handleChange}
                        placeholder="Your Phone (10 digits)"
                        className="mt-2"
                        isInvalid={!!errors.refererPhone}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.refererPhone}
                      </Form.Control.Feedback>

                      <Form.Control
                        type="text"
                        name="refererBatchCode"
                        value={formData.refererBatchCode}
                        onChange={handleChange}
                        placeholder="Your Batch Code (Required)"
                        className="mt-2"
                        isInvalid={!!errors.refererBatchCode}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.refererBatchCode}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Send Referral Invitation
                    </Button>

                    {message && <p className="mt-3">{message}</p>}
                  </Form>

                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* How it Works */}
        <Row className="how-it-works pb-5 position-relative">
          <Col md={12}>
            <h3 className="text-center mb-4">How It Works</h3>
            <div className="steps-container">
              {[
                { step: "1", title: "Share Your Link", text: "Send your unique referral link to friends", color: "primary" },
                { step: "2", title: "Friend Enrolls", text: "They use your link to sign up for a course", color: "success" },
                { step: "3", title: "Complete Payment", text: "Your friend completes their course payment", color: "info" },
                { step: "4", title: "Get Rewarded", text: "You both receive your discounts automatically", color: "warning" },
              ].map((item, i) => (
                <div key={i} className="step-wrapper text-center position-relative">

                  {/* Step Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.3 }}
                    className={`step-number bg-${item.color} ${item.color === "warning" ? "text-dark" : "text-white"
                      } rounded-circle d-inline-flex align-items-center justify-content-center`}
                    style={{ width: "55px", height: "55px", fontWeight: "bold", zIndex: 3 }}
                  >
                    {item.step}
                  </motion.div>

                  {/* Individual Connector Line */}
                  {i < 3 && <div className="connector-line"></div>}

                  <h6 className="mt-2">{item.title}</h6>
                  <p className="step-text">{item.text}</p>
                </div>
              ))}
            </div>
            {/* =========================
   FAQ SECTION
========================= */}
<Row className="mb-5  mt-4" >
  <Col md={10} className="mx-auto">
    <h3 className="text-center fw-bold mb-4">
      Frequently Asked Questions
    </h3>

    {[
      {
        q: "How does the referral program work?",
        a: "You refer a friend using this form. Once they enroll and complete payment, both of you receive rewards.",
      },
      {
        q: "When will I receive my referral reward?",
        a: "Rewards are credited after your friend completes enrollment and payment verification.",
      },
      {
        q: "Can I refer more than one friend?",
        a: "Yes! You can refer unlimited friends and earn additional rewards for multiple successful referrals.",
      },
      {
        q: "Is there any limit to referral benefits?",
        a: "No limit. More referrals mean more benefits and exclusive perks.",
      },
    ].map((item, i) => (
      <Card key={i} className="mb-3 shadow-sm border-0">
        <Card.Body>
          <h6 className="fw-semibold">{item.q}</h6>
          <p className="text-muted mb-0">{item.a}</p>
        </Card.Body>
      </Card>
    ))}
  </Col>
</Row>


          </Col>


          <style>{`
    /* Desktop Layout */
/* Container must stay horizontal */
.steps-container {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 100%;
}

/* Each step block */
.step-wrapper {
  flex: 1;
  position: relative;
  text-align: center;
}

/* Connector line between circles */
.connector-line {
  position: absolute;
  top: 27px; /* middle of circle (55px height) */
  left: calc(50% + 30px); /* start AFTER circle */
  width: calc(100% - 55px); /* connect to next circle center */
  height: 4px;
  background-color: #3b82f6;
  z-index: 1;
}

/* Circle stays above the line */
.step-number {
  position: relative;
  z-index: 3;
}

/* Mobile layout (stack vertically) */
@media (max-width: 768px) {
  .steps-container {
    flex-direction: column !important;
    align-items: center;
    gap: 30px;
  }

  .connector-line {
    display: none; /* no horizontal lines in mobile */
  }
}


`}</style>
        </Row>


      </Container>

      {/* Background Animation */}
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* CSS */}
      <style>{`
        .refer-bg {
          background: #e6f2ff;
          position: relative;
          overflow: hidden;
        }

        /* floating animated circles */
        .animated-bg span {
          position: absolute;
          border-radius: 50%;
          background: rgba(0, 123, 255, 0.15);
          animation: float 8s linear infinite;
        }

        .animated-bg span:nth-child(1) {
          width: 120px;
          height: 120px;
          left: 10%;
          bottom: -120px;
          animation-delay: 0s;
        }
        .animated-bg span:nth-child(2) {
          width: 180px;
          height: 180px;
          left: 40%;
          bottom: -180px;
          animation-delay: 2s;
        }
        .animated-bg span:nth-child(3) {
          width: 90px;
          height: 90px;
          right: 15%;
          bottom: -90px;
          animation-delay: 4s;
        }
        .animated-bg span:nth-child(4) {
          width: 150px;
          height: 150px;
          right: 35%;
          bottom: -150px;
          animation-delay: 6s;
        }

        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-400px) scale(1.1); opacity: 0.8; }
          100% { transform: translateY(-800px) scale(1); opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default ReferFriend;
