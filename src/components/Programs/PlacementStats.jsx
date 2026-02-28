import { Container, Row, Col, Card } from "react-bootstrap";
import "./PlacementStats.css";

const PlacementStats = () => {
  return (
    <section className="placement-stats-section py-5">
      <Container>

        {/* HEADER */}
        <div className="text-center mb-4">
          <h3 className="fw-bold">
            Get Exclusive Access to Placement Drives
          </h3>
        </div>

        {/* STATS */}
        <Row className="g-4 justify-content-center">
          <Col md={3} sm={6}>
            <Card className="placement-card text-center h-100">
              <Card.Body>
                <h2 className="placement-value">95%</h2>
                <p className="placement-label">Assured Placement</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6}>
            <Card className="placement-card text-center h-100">
              <Card.Body>
                <h2 className="placement-value">44 L</h2>
                <p className="placement-label">Top Salary</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6}>
            <Card className="placement-card text-center h-100">
              <Card.Body>
                <h2 className="placement-value">4.5 L</h2>
                <p className="placement-label">Average Salary</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6}>
            <Card className="placement-card text-center h-100">
              <Card.Body>
                <h2 className="placement-value">3.5 L</h2>
                <p className="placement-label">Median Salary</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default PlacementStats;
