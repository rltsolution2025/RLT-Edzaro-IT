import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Hire.css";
import { submitHiringPartner } from "../pages/Api/Api"; // ✅ API CONNECTED
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function HireEdzaro() {

  // ================= FORM STATE =================
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    email: "",
    roles: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { companyName, yourName, email, roles } = formData;

    if (!companyName || !yourName || !email || !roles) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    try {
      setLoading(true);
      const res = await submitHiringPartner(formData);
      setSuccess(res.message);
      setFormData({
        companyName: "",
        yourName: "",
        email: "",
        roles: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hirepage-wrapper">
      <Helmet>
        <title>Enterprise DeepTech Hiring Solutions | RLT Edzaro</title>
        <meta
          name="description"
          content="Hire industry-ready Cloud & AI professionals with zero hiring cost. Immediate joiners, high retention talent powered by TalentSprint ecosystem."
        />
        <link rel="canonical" href="https://rltedzaro.com/hire-it-talent" />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section
        className="hero-section hero-bg text-white"
        style={{ backgroundImage: "url('/assets/Hire_Landing.png')" }}
      >
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col md={7}>
              <motion.h1
                className="fw-bold display-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Recruit DeepTech Talent <br />
                And Empower Your Workforce
              </motion.h1>

              <motion.p
                className="lead mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Industry-ready • Immediate Joiners • High Retention Rate • Zero
                Cost Hiring
              </motion.p>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button size="lg" variant="warning" className="fw-semibold px-4"
                  onClick={() => {
                    document
                      .getElementById("hire-form")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  Request a Call Back
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= WHY EDZARO ================= */}
      <section className="why-edzaro-section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <motion.h2
                className="fw-bold display-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Why Enterprises Choose{" "}
                <span className="brand-highlight">RLT Edzaro</span>
              </motion.h2>
              <p className="text-muted mt-2">
                A proven partner for scalable, future-ready DeepTech talent
              </p>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            <CorporateStat number="700+" label="Enterprise Partners" sub="Through TalentSprint Ecosystem" delay={0} />
            <CorporateStat number="9000+" label="DeepTech Professionals" sub="From TalentSprint Programs" delay={0.1} />
            <CorporateStat number="94%" label="Retention Rate" sub="TalentSprint Benchmarks" delay={0.3} />
          </Row>
        </Container>
      </section>

      {/* ================= TALENT CATEGORIES ================= */}
      <section className="py-4">
        <Container>
          <h3 className="fw-bold mb-4 text-center">
            World-class Talent Upskilled with High-demand Cloud & AI Skills
          </h3>

          <Row className="g-4">
            <TalentCard
              title="Cloud Developers"
              text="Industry-ready cloud developers trained on AWS Cloud Institute."
              img="/assets/Cloud.png"
              link="/aws-cloud-developer-program"
            />
            <TalentCard
              title="Cloud AI Developers"
              text="AI developers trained in Generative AI & cloud-native solutions."
              img="/assets/AI-Dev.png"
              link="/aws-ai-developer-program"
            />
            <TalentCard
              title="Cloud Operators"
              text="Certified professionals skilled in AWS infrastructure management."
              img="/assets/Cloud-operator.png"
              link="/aws-cloud-operations-devops-program"
            />
            <TalentCard
              title="AI Professionals"
              text="Multi-skilled professionals trained across cloud, AI, and automation."
              img="/assets/AI-infinity.png"
              link="/ai-infinity-corporate-upskilling-program"
            />
            <TalentCard
              title="Centre for AI"
              text="AI specialists trained to build, deploy, and scale intelligent solutions"
              img="/assets/AI.png"
              link="/center-for-ai-proficiency-program"
            />
          </Row>
        </Container>
      </section>
      <section>
        <img src="/assets/Hire-Section.png" alt="Divider" className="w-100" />
      </section>

      {/* ================= CONTACT FORM ================= */}

      <section
        className="py-5 hire-section"
        style={{
          backgroundImage: 'url("/assets/Enroll-LandingPage.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          {/* 👇 change justify-content-end to start */}
          <Row className="justify-content-start" id="hire-form">
            <Col md={6} lg={5}>
              <Card className="shadow-lg hire-card">
                <Card.Body>
                  <h4 className="fw-bold mb-4 text-center">
                    Hire from Us
                  </h4>

                  {error && <div className="alert alert-danger">{error}</div>}
                  {success && <div className="alert alert-success">{success}</div>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Contact Person</Form.Label>
                      <Form.Control
                        name="yourName"
                        value={formData.yourName}
                        onChange={handleChange}
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
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Roles Required</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="roles"
                        value={formData.roles}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Button type="submit" className="w-100" disabled={loading}>
                      {loading ? "Submitting..." : "Submit Hiring Request"}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

const CorporateStat = ({ number, label, sub, delay }) => (
  <Col md={3} sm={6}>
    <motion.div
      className="corporate-stat-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
    >
      <h2 className="stat-number">{number}</h2>
      <h6 className="stat-label">{label}</h6>
      <p className="stat-sub">{sub}</p>
    </motion.div>
  </Col>
);

const TalentCard = ({ title, text, img, link }) => (
  <Col md={6} lg={3} className="d-flex">
    <motion.div whileHover={{ scale: 1.03 }} className="w-100">

      {/* FULL CARD LINK */}
      <Link
        to={link}
        style={{ textDecoration: "none", color: "inherit" }}
        className="w-100"
      >
        <Card className="shadow-sm h-100 w-100 border-0">

          {/* FULL-WIDTH IMAGE — NO PADDING, NO CROP */}
          <img
            src={img}
            alt={title}
            style={{
              width: "100%",
              height: "160px",
              objectFit: "contain", // ✅ no crop
              display: "block",
            }}
          />

          {/* CONTENT */}
          <Card.Body className="d-flex flex-column text-center px-3">
            <h5 className="fw-bold">{title}</h5>

            {/* Equal height fix */}
            <p className="text-muted small flex-grow-1">
              {text}
            </p>

            <span className="btn btn-outline-primary btn-sm">
              Know More
            </span>
          </Card.Body>
        </Card>
      </Link>
    </motion.div>
  </Col>
);