import { Container, Row, Col, Card } from "react-bootstrap";
import "./CapstoneSection.css";

const CapstoneSection = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <section className="capstone-wrapper">
      {/* SECTION */}
      <div className="capstone-section position-relative">
        {/* Background layers */}
        <div className="capstone-bg-gradient" />
        <div className="capstone-bg-grid" />

        <Container className="position-relative">
          <Row>
            {/* LEFT CONTENT */}
            <Col lg={7}>
              <h2 className="fw-bold text-white mb-4">
                Capstone Projects
              </h2>

              <Row className="g-4">
                {items.map((c, i) => (
                  <Col md={6} key={i}>
                    <Card className="capstone-card h-100">
                      <Card.Body>
                        <p className="mb-0">{c}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* IMAGE THAT OVERLAPS THE SECTION */}
      <img
        src="/assets/Capstone-image.png"
        alt="Capstone Projects"
        className="capstone-outside-image"
      />
    </section>
  );
};

export default CapstoneSection;
