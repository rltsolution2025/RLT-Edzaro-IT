import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Platform = () => {
  return (
    <section className="ipearl-section position-relative">

      {/* Gradient Overlay */}
      <div className="ipearl-overlay"></div>

      <Container className="position-relative ipearl-content">
        <Row>
          <Col md={6} className="text-white">
            <img
              src="/assets/ipearl.png"
              alt="iPearl Logo"
              className="ipearl-logo mb-3"
            />

            <h2 className="fw-bold ipearl-title">
              Hi-Tech • Hi-Touch
            </h2>
            <h3 className="fw-semibold ipearl-subtitle">
              Hybrid Learning Platform
            </h3>

            <p className="ipearl-text">
              iPearl.ai (AI-Powered Interactive Platform for Experiential And
              Remote Learning), TalentSprint’s digital delivery platform, is
              built with cutting-edge technologies and state-of-the-art
              components.
            </p>

            <p className="ipearl-text">
              Its seamless integration of synchronous learning, asynchronous
              modules, assignments, assessments, cloud labs, group work, and
              video indexing—all with a single sign-on—maximizes user delight
              for students and instructors.
            </p>
          </Col>
        </Row>
      </Container>

      {/* ================= STYLES ================= */}
      <style>{`
        /* ================= DESKTOP ================= */
        .ipearl-section {
          width: 100%;
          height: 450px;
          background-image: url("https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg");
          background-size: cover;
          background-position: right center;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .ipearl-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 30, 0.85) 0%,
            rgba(0, 0, 17, 0.6) 40%,
            rgba(0, 0, 26, 0.2) 70%,
            rgba(0, 0, 30, 0) 100%
          );
          z-index: 1;
        }

        .ipearl-content {
          position: relative;
          z-index: 2;
        }

        .ipearl-logo {
          width: 180px;
        }

        .ipearl-title {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .ipearl-subtitle {
          margin-bottom: 18px;
        }

        .ipearl-text {
          font-size: 1.05rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* ================= MOBILE FIX ================= */
        @media (max-width: 768px) {
          .ipearl-section {
            height: auto;              /* ✅ shrink height */
            padding: 28px 0 36px;      /* ✅ reduce top space */
            background-position: center;
            display: block;            /* ❌ remove vertical centering */
          }

          .ipearl-logo {
            width: 150px;
            margin-bottom: 14px;
          }

          .ipearl-title {
            font-size: 1.4rem;
          }

          .ipearl-subtitle {
            font-size: 1.1rem;
            margin-bottom: 14px;
          }

          .ipearl-text {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 576px) {
          .ipearl-section {
            padding: 22px 0 28px;
          }
        }
      `}</style>
    </section>
  );  
};

export default Platform;
