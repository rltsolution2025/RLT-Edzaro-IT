import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm"; // ✅ Reusable form
import { GeoAltFill, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";
import { Helmet } from "react-helmet-async";
import './ContactPage.css';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="py-5"
      style={{ backgroundColor: "#f5f7fa" }}
    >
      <Helmet>
        <title>Contact RLT Edzaro | IT Training & Career Support</title>
        <meta
          name="description"
          content="Get in touch with RLT Edzaro for IT training programs, career guidance, enterprise hiring, and partnerships. Our team is here to help you."
        />
        <link rel="canonical" href="https://rltedzaro.com/contact" />
      </Helmet>
      <Container>
        <h2 className="text-center fw-bold mb-3 section-padding ">Get in Touch</h2>
        <p className="text-center text-muted mb-5">
          We’re here to assist you. Reach out to Edzaro for any queries or partnership opportunities.
        </p>

        <Row className="gy-4">

          {/* LEFT SIDE — CONTACT FORM */}
          <Col md={6}>
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />  {/* 🔥 Reusable Component */}
            </motion.div>
          </Col>

          {/* RIGHT SIDE — COMPANY DETAILS + MAP */}
          <Col md={6}>
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow p-4 border-0 rounded-4 bg-white">
                <h4 className="fw-semibold text-primary">RLT Edzaro</h4>
                <p className="text-muted">
                  Empowering future software developers with hands-on training.
                </p>

                {/* ADDRESS */}
                <div className="mt-3">
                  <p className="d-flex align-items-start gap-2">
                    <GeoAltFill className="text-danger" size={22} />
                    <span>
                      2, 1st St, Corporation Colony, Rangarajapuram, Kodambakkam,<br />
                      Chennai, Tamil Nadu - 600024
                    </span>
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <TelephoneFill className="text-success" size={20} />
                    <span>+91 89255 00513</span>
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <EnvelopeFill className="text-primary" size={20} />
                    <span>contact@rltedzaro.com</span>
                  </p>
                </div>
                <hr />

                <h6 className="fw-semibold text-secondary mb-2">
                  Branch Office – Maraimalai Nagar, Chennai
                </h6>

                <p className="d-flex align-items-start gap-2">
                  <GeoAltFill className="text-danger" size={20} />
                  <span>
                    Door No: 48, HIG NH-1, Valial M.G.R. Salai,<br />
                    Maraimalai Nagar,
                    Chengalpattu, TamilNadu - 603209
                  </span>
                </p>

                <p className="d-flex align-items-center gap-2">
                  <TelephoneFill className="text-success" size={18} />
                  <span>+91 89255 00513</span>
                </p>

                <p className="d-flex align-items-center gap-2">
                  <EnvelopeFill className="text-primary" size={18} />
                  <span>contact@rltedzaro.com</span>
                </p>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* =====================
    MAPS — SEPARATE ROW
===================== */}
        <Row className="mt-5 gy-4">
        
          {/* CHENNAI MAP */}
          {/* <Col md={6}>
            <Card className="border-0 shadow-sm rounded-4 p-3">
              <h6 className="fw-semibold mb-2">Chennai – Head Office</h6>

              <iframe
                title="Chennai Map"
                src="https://share.google/5TAzIR4hHeBjQWaGt"
                width="100%"
                height="260"
                className="rounded-4 border-0"
                loading="lazy"
              ></iframe>
            </Card>
          </Col> */}

          {/* DUMMY MAP */}
          {/* <Col md={6}>
            <Card className="border-0 shadow-sm rounded-4 p-3">
              <h6 className="fw-semibold mb-2">Maraimalai Nagar – Branch Office</h6>

              <iframe
                title="Chennai Map"
                src="https://maps.app.goo.gl/8x7hoEnyq5P19LqT8"
                width="100%"
                height="260"
                className="rounded-4 border-0"
                loading="lazy"
              ></iframe>
            </Card>
          </Col> */}

        </Row>

      </Container>
    </motion.div>
  );
};

export default ContactPage;
