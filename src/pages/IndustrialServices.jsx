import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm"; 
import {
  Briefcase,
  Gear,
  People,
  Award,
  Cpu,
  Rocket,
} from "react-bootstrap-icons";
import "./IndustrialServices.css";

const services = [
  {
    icon: <Briefcase size={40} className="text-primary" />,
    title: "Corporate Training Programs",
    description:
      "Customized workforce development programs designed to improve employee skills and productivity.",
  },
  {
    icon: <People size={40} className="text-primary" />,
    title: "Industrial On-the-Job Training (OJT)",
    description:
      "Real-time hands-on training inside industries with exposure to live projects.",
  },
  {
    icon: <Cpu size={40} className="text-primary" />,
    title: "Industrial Automation with AI",
    description:
      "AI-powered automation and robotics solutions designed for smart industries.",
  },
  {
    icon: <Award size={40} className="text-primary" />,
    title: "Placement & Employability Training",
    description:
      "Skill development programs designed to increase student placement readiness.",
  },
  {
    icon: <Gear size={40} className="text-primary" />,
    title: "Industrial Software Automation",
    description:
      "Custom software-based automation solutions for industrial operations.",
  },
  {
    icon: <Rocket size={40} className="text-primary" />,
    title: "AI Infinity",
    description:
      "A self-paced industrial employee skill-up program focused on Artificial Intelligence applications.",
  },
];

export default function IndustrialServices() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="industrial-bg "
    >
      {/* HERO SECTION */}
      <section className="industrial-hero-section">
        <div className="container hero-content">
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0 hero-left">
              <h1 className="fw-bold display-5 text-dark">
                Industrial <span className="brand">Services</span> for Modern Workforce
              </h1>
              <p className="lead mt-3">
                Empowering industries, institutions, and professionals with
                future-ready technical and operational capabilities.
              </p>

              <Button className="btn btn-primary btn-lg fw-semibold mt-3"
               onClick={() => {
                  const target = document.getElementById("ContactForm");
                  if (target) {
                    const yOffset = -120; // Adjust this based on your navbar height
                    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                Get Started
              </Button>
            </Col>

            <Col md={6} className="text-center">
              <motion.img
                src="/assets/Industrial-services.png"
                alt="Industrial Services"
                className="img-fluid rounded-4 shadow-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5">Our Industrial Services</h2>

        <Row>
          {services.map((item, i) => (
            <Col md={4} className="mb-4" key={i}>
              <motion.div
                className="card h-100 text-center shadow-sm border-0 p-3 service-card"
                whileHover={{ y: -8, scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="icon-wrapper mx-auto mb-3">{item.icon}</div>
                <h5 className="fw-semibold">{item.title}</h5>
                <p className="text-muted mt-2">{item.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CONTACT FORM SECTION */}
      <section className="contact-section py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-3">Contact Us</h2>
          <p className="text-center text-muted mb-5">
            Need a custom industrial solution or training program? Reach out to us.
          </p>

          <Row className="justify-content-center" id="ContactForm">
            <Col md={7}>
              {/* ✅ Reusable Component */}
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      {/* BACKGROUND FLOATING ANIMATION */}
      <div className="industrial-animated-bg">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.div>
  );
}
