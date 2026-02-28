import { Container, Row, Col, Carousel, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import "./HeroLanding.css";

const ProgramHero = ({ program }) => {
  return (
    <section
      className="program-hero text-white py-5 position-relative overflow-hidden"
      style={{
        backgroundImage: `url(${program.heroImages?.[0]})`,
      }}
    >
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center min-vh-75">
          <Col md={8} lg={7}>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="display-4 fw-bold"
            >
              {program.title}
            </motion.h1>

            <p className="lead mt-3">{program.overview}</p>

            {program.type === "school" && program.feature && (
              <Badge bg="warning" text="dark" className="p-3 fs-6 mt-3">
                {program.feature}
              </Badge>
            )}

            {program.type !== "school" && program.salaryRange && (
              <Badge bg="warning" text="dark" className="p-3 fs-6 mt-3">
                Salary Package: {program.salaryRange}
              </Badge>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProgramHero;