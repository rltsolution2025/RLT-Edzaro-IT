import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Tracks.css";

const ProgramTracks = ({ highlights = [] }) => {
  if (!Array.isArray(highlights) || highlights.length === 0) return null;

  return (
    <section className="program-highlights-section py-5">
      <Container>

        {/* SECTION HEADING */}
        <div className="text-center mb-5 program-track-header ">
          <h3 className="fw-bold">Program Track Modules</h3>
          <p className="text-muted mt-2">
            The Program Track is divided into multiple modules covering foundational concepts,
            advanced technologies, hands-on labs, and industry-aligned projects. These modules
            are designed to ensure structured learning progression, skill mastery, and career
            readiness across real-world use cases.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {highlights.map((item, index) => {
            const title = typeof item === "string" ? item : item.title;
            const image =
              typeof item === "string"
                ? "/assets/highlights/dummy.png"
                : item.image || "/assets/highlights/dummy.png";

            return (
              <Col md={6} lg={4} key={index}>
                {/* ✅ ONLY ONE motion element */}
                <Card
                  as={motion.div}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="highlight-card h-100 text-center"
                  style={{ willChange: "transform" }}
                >
                  {/* PERFECT CIRCLE AVATAR */}
                  <div className="highlight-avatar">
                    <img
                      src={image}
                      alt={title}
                      className="highlight-avatar-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/assets/highlights/dummy.png";
                      }}
                    />
                  </div>

                  <Card.Body>
                    <p className="highlight-text">{title}</p>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

      </Container>
    </section>
  );
};

export default ProgramTracks;
