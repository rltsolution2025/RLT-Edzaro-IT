import { useState, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { programDetails } from "../Programs/InsideProgramData";
import "./ProgramSection.css";

const TABS = [
  { key: "all", label: "All" },
  { key: "course", label: "Institute Programs" },
  { key: "corporate", label: "Corporate Training" },
  { key: "college", label: "Colleges Programs" },
  { key: "school", label: "Program for Schools" },
];

export default function ProgramSection() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();
  const tabRef = useRef(null);

  const allPrograms = Object.values(programDetails);

  const programs =
    activeTab === "all"
      ? allPrograms
      : activeTab === "course"
      ? allPrograms.filter(
          (p) =>
            p.type === "course" ||
            (p.type === "college" && p.showInInstitute === true)
        )
      : allPrograms.filter((p) => p.type === activeTab);
      


  const scrollLeft = () => {
    tabRef.current.scrollBy({ left: -180, behavior: "smooth" });
  };

  const scrollRight = () => {
    tabRef.current.scrollBy({ left: 180, behavior: "smooth" });
  };

  return (
    <section className="py-5">
      {/* ================= HEADING ================= */}
      <h2 className="text-center display-6 fw-bold">
        Explore Our Programs
      </h2>
      <p className="text-center text-muted mb-4">
        Choose from specialized learning paths built for students and institutions.
      </p>

      {/* ================= ARROW TABS ================= */}
      <div className="d-flex justify-content-center mb-5">
        <div className="arrow-tab-wrapper">
          <button className="arrow-btn" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="tab-container" ref={tabRef}>
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`tab-btn ${
                  activeTab === tab.key ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button className="arrow-btn" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* ================= PROGRAM CARDS ================= */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Container>
          <Row>
            {programs.map((program) => (
              <Col
                key={program.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4 d-flex"
              >
                <Card className="shadow-sm w-100 h-100 text-center program-card">
                  <Card.Img
                    variant="top"
                    src={program.img}
                    alt={program.title}
                    style={{ height: "160px", objectFit: "cover" }}
                  />

                  <Card.Body className="d-flex flex-column">
                    <h5 className="fw-semibold">{program.title}</h5>

                    {program.duration && (
                      <p className="text-muted small mb-1">
                        ⏱ {program.duration}
                      </p>
                    )}

                    {program.audience && (
                      <p className="text-muted small">
                        👥 {program.audience}
                      </p>
                    )}

                    <Button
                      variant="primary"
                      size="sm"
                      className="mt-auto"
                      onClick={() =>
                        navigate(`/${program.id}`)
                      }
                    >
                      View Program
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>
    </section>
  );
}
