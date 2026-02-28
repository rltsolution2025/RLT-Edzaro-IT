import { Container, Row, Col, Button, Card } from "react-bootstrap";

const LandingPage = () => {
  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold">
                Become an Industry-Ready IT Professional
              </h1>
              <p className="mt-3 text-muted">
                Hands-on training, real-world projects, and placement support
                to accelerate your tech career with RLT Edzaro.
              </p>

              <div className="mt-4">
                <Button variant="primary" size="lg" className="me-3">
                  Enroll Now
                </Button>
                <Button variant="outline-primary" size="lg">
                  Talk to Career Advisor
                </Button>
              </div>

              <div className="mt-4 text-muted small">
                25+ Years Industry Experience · 50+ Monthly Placements
              </div>
            </Col>

            <Col md={6} className="d-none d-md-block">
              {/* Hero Image Placeholder */}
              <div className="bg-secondary rounded" style={{ height: "300px" }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= WHY THIS PROGRAM ================= */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="fw-bold">Why This Program?</h2>
              <p className="text-muted">
                Designed to bridge the gap between academic learning and
                real-world industry requirements.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {[
              "Industry-aligned curriculum",
              "Hands-on labs & projects",
              "Mentorship by experts",
              "Career & placement support",
            ].map((item, i) => (
              <Col md={3} key={i}>
                <Card className="h-100 text-center shadow-sm">
                  <Card.Body>{item}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= PROGRAM HIGHLIGHTS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Program Highlights & Modules
          </h2>

          <Row className="g-4">
            {[
              "Core IT Foundations",
              "Advanced Technology Modules",
              "Hands-on Labs",
              "Industry Capstone Projects",
              "Interview & Soft Skills Training",
              "Placement Preparation",
            ].map((item, i) => (
              <Col md={4} key={i}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>{item}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= CAPSTONE PROJECTS ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Capstone Projects
          </h2>

          <Row className="g-4">
            {[
              "AI / Cloud-based Application",
              "Industry Use Case Project",
              "End-to-End Deployment",
            ].map((item, i) => (
              <Col md={4} key={i}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>{item}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= PLACEMENT STATS ================= */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Placement & Career Outcomes
          </h2>

          <Row className="g-4 text-center">
            {[
              { value: "50+", label: "Monthly Placements" },
              { value: "44 LPA", label: "Top Salary" },
              { value: "4.5 LPA", label: "Average Salary" },
              { value: "3.5 LPA", label: "Median Salary" },
            ].map((stat, i) => (
              <Col md={3} sm={6} key={i}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <h3 className="fw-bold">{stat.value}</h3>
                    <p className="text-muted mb-0">{stat.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= WHO IS THIS FOR ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Who Is This Program For?
          </h2>

          <Row className="g-4">
            {[
              "Final Year Students",
              "Fresh Graduates",
              "Working Professionals",
              "Career Switchers",
            ].map((item, i) => (
              <Col md={3} key={i}>
                <Card className="h-100 text-center shadow-sm">
                  <Card.Body>{item}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= ENROLL FORM ================= */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Card className="shadow-sm p-4">
                <h4 className="fw-bold mb-3">
                  Enroll Now
                </h4>
                {/* Replace with <EnrollForm /> later */}
                <div className="bg-secondary rounded" style={{ height: "220px" }} />
              </Card>
            </Col>

            <Col md={6} className="d-none d-md-block">
              {/* Form Illustration Placeholder */}
              <div className="bg-secondary rounded" style={{ height: "300px" }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">FAQs</h2>

          <Row className="g-3">
            {[
              "Is this program beginner friendly?",
              "Is placement support provided?",
              "Is the program online or offline?",
              "What is the duration of the program?",
            ].map((faq, i) => (
              <Col md={6} key={i}>
                <Card className="shadow-sm">
                  <Card.Body>{faq}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </>
  );
};

export default LandingPage;
