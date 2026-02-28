import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaChalkboardTeacher,
  FaCertificate,
} from "react-icons/fa";
import "./Partners.css";

const Partners = () => {
  return (
    <>
      {/* ================= SECTION HEADING ================= */}
      <section className="partners-heading-section text-center  pb-3">
        <motion.h2
          className="display-5 fw-bold"
          style={{ color: "#2e58a7" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Strategic Partners
        </motion.h2>

        <motion.p
          className="lead text-muted opacity-75"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Collaborating with global leaders to deliver world-class learning
          experiences.
        </motion.p>
      </section>

      {/* ================= FULL-WIDTH PARTNER SECTION ================= */}
      <section className="partners-fullwidth-section position-relative d-flex align-items-center">
        
        {/* Gradient Overlay */}
        <div className="partners-overlay"></div>

        {/* Content */}
        <Container className="position-relative" style={{ zIndex: 3 }}>
          <Row className="align-items-center">
            {/* Left Image */}
            <Col md={6} className="mb-4">
              <motion.img
                src="/assets/Partner.png"
                alt="Strategic Partnership"
                className="img-fluid rounded shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
              />
            </Col>

            {/* Right Content */}
            <Col md={6}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fs-5 text-white"
              >
                RLT Edzaro partners with{" "}
                <strong>TalentSprint (a part of Accenture)</strong> to deliver
                globally benchmarked technology programs. This collaboration
                ensures industry-aligned curriculum, world-class mentorship, and
                employment-ready skills for learners across emerging
                technologies.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="list-unstyled fs-5 mt-4 text-white"
              >
                <li className="d-flex align-items-center mb-3">
                  <FaChalkboardTeacher className="me-3 text-warning fs-4" />
                  Industry-aligned curriculum
                </li>
                <li className="d-flex align-items-center mb-3">
                  <FaHandshake className="me-3 text-info fs-4" />
                  Mentorship from global experts
                </li>
                <li className="d-flex align-items-center mb-3">
                  <FaCertificate className="me-3 text-success fs-4" />
                  Globally recognized certifications
                </li>
              </motion.ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Partners;
