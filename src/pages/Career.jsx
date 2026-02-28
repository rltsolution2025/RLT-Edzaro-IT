import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import EnrollForm from "../components/EnrollForm";
import './Career.css';
import { Accordion } from "react-bootstrap";
import { programData } from "./CareerData";
import {
  FaHandshake,
  FaIndustry,
  FaChalkboardTeacher,
  FaBuilding,
  FaUserTie,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa"
import { Helmet } from "react-helmet-async";

const Career = () => {
  const { programId } = useParams();

  // ✅ SAFE fallback
  const program =
    programData[programId] || programData["cloud-developer"];

  // ✅ Guard (extra safety)
  if (!program) {
    return (
      <div className="text-center py-5">
        <h2>Program not found</h2>
        <p>Please select a valid program.</p>
      </div>
    );
  }
  return (
    <motion.div className="inside-program-page">
      <Helmet>
        <title>Careers in AI & Cloud | Industry-Ready Pathways – RLT EDZARO</title>
        <meta
          name="description"
          content="RLT EDZARO helps learners explore technology career pathways with a focus on AI & Cloud roles, industry relevance, and long-term growth."
        />
        <link rel="canonical" href="https://rltedzaro.com/career" />
      </Helmet>

      {/* ================= HERO ================= */}

      <section className="aci-hero text-white position-relative overflow-hidden">

        {/* 🔵 Animated Tech Background */}
        <div className="tech-bg"></div>

        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row
            className="align-items-center"
            style={{
              // backgroundColor: "rgba(0, 0, 0, 0.55)",
              padding: "40px",
              borderRadius: "12px",
            }}
          >
            <Col md={6} >
              <h1 className="display-4 fw-bold">
                Industry-Ready AI & Cloud Programs
              </h1>

              <p className="lead">
                Empowering students, professionals, institutions, and enterprises with
                globally benchmarked AI and Cloud education through hands-on learning,
                real-world labs, and industry-aligned curriculum.
              </p>

              <div className="d-flex justify-content-center justify-content-md-start">
                <Badge bg="warning" text="dark" className="fs-5 p-2">
                  Industry Curriculum • Hands-on Labs
                </Badge>
              </div>

              <div className="mt-4">
                <strong>In partnership with TalentSprint (part of Accenture)</strong>
              </div>
            </Col>

            <Col className="form" xs={12} md={6} >
              <EnrollForm courseName={program.title} />
            </Col>
          </Row>
        </Container>
      </section>


      {/* ================= TRACKS ================= */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Role-Based Learning Tracks</h2>
        <Row className="g-4">
          {program.tracks.map((track, i) => (
            <Col xs={12} sm={6} md={3} key={i}>
              <Card className="h-100 shadow-sm">
                <Card.Body
                  className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start">

                  <h5 className="fw-bold">{track.name}</h5>
                  <ul className="list-unstyled text-center text-md-start">
                    {track.modules.map((m, idx) => (
                      <li key={idx}>{m}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="why-rlt-section py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why RLT Edzaro?</h2>
            <p className="text-muted">
              India’s trusted Leading partner for industry-ready AWS Cloud & AI programs
            </p>
          </div>

          <Row className="g-4">
            <Col md={4}>
              <Card className="why-card h-100">
                <Card.Body>
                  <FaHandshake className="why-icon" />
                  <h5 className="fw-bold mt-3">
                    Official ACI Leading Partner in India
                  </h5>
                  <p className="text-muted">
                    RLT Edzaro delivers AWS Cloud Institute programs in partnership with
                    TalentSprint (An Accenture Company), India’s leading deep-tech education provider.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="why-card h-100">
                <Card.Body>
                  <FaIndustry className="why-icon" />
                  <h5 className="fw-bold mt-3">
                    700+ Hiring Partner Network
                  </h5>
                  <p className="text-muted">
                    TalentSprint’s ecosystem includes 700+ global and Indian companies actively hiring
                    cloud and AI professionals.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="why-card h-100">
                <Card.Body>
                  <FaCertificate className="why-icon" />
                  <h5 className="fw-bold mt-3">
                    Industry-Aligned Curriculum
                  </h5>
                  <p className="text-muted">
                    Curriculum designed by AWS and industry experts, aligned with real-world job roles
                    and certifications.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="why-card h-100">
                <Card.Body>
                  <FaBuilding className="why-icon" />
                  <h5 className="fw-bold mt-3">
                    Offline Classroom Training
                  </h5>
                  <p className="text-muted">
                    Instructor-led offline classes available for candidates who prefer structured,
                    classroom-based learning.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="why-card h-100">
                <Card.Body>
                  <FaChalkboardTeacher className="why-icon" />
                  <h5 className="fw-bold mt-3">
                    AWS Certified Trainers
                  </h5>
                  <p className="text-muted">
                    Sessions delivered by AWS-certified professionals with real industry and project
                    experience.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="why-card h-100">
                <Card.Body>
                  <FaBriefcase className="why-icon" />
                  <h5 className="fw-bold mt-3">
                    Career Readiness & Mock Interviews
                  </h5>
                  <p className="text-muted">
                    Resume building, mock interviews, interview prep, and career guidance included as
                    part of the curriculum.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= ROLES ================= */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">In-demand Cloud Roles</h2>
        <Row>
          {program.roles.map((role, i) => (
            <Col md={3} key={i} className="mb-3">
              <Card className="text-center shadow-sm p-3">{role}</Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ================= IDEAL FOR ================= */}
      <section className="bg-dark text-white py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Ideal For</h2>
          <Row>
            {program.idealFor.map((item, i) => (
              <Col md={3} key={i}>✔ {item}</Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Frequently Asked Questions</h2>
        <Accordion>
          {program.faq.map((f, i) => (
            <Accordion.Item eventKey={i.toString()} key={i}>
              <Accordion.Header>{f.q}</Accordion.Header>
              <Accordion.Body>{f.a}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>


    </motion.div>
  );
};

export default Career;