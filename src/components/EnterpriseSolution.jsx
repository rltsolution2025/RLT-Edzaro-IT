import React from "react";
import { Container, Row, Col, Nav, Navbar, NavDropdown, Button, Card, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// This is a single-file React component for the "RLT Edzaro - Enterprise Solutions" page.
// Usage: place this file in your React project and import <RLTEnterpriseSolutions /> into a route.
// Notes: - Uses Bootstrap for layout + Framer Motion for subtle animations.
//        - Dummy images are placeholders (replace with real logos/banners).
//        - CSS included below via a template literal inserted into a <style> tag for simplicity.

export default function RLTEnterpriseSolutions() {
  return (
    <div className="rlt-ep-page">
      <Style />

      {/* --- NAVBAR --- */}
      <Navbar expand="lg" bg="light" className=" mt-0 shadow-sm" sticky="top">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center gap-3">
            <img src="https://via.placeholder.com/48x48.png?text=Logo" alt="RLT Edzaro" className="logo-img" />
            <div>
              <div className="brand-main">RLT Edzaro</div>
              <div className="brand-sub">Enterprise Solutions</div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link href="#programs" className="fw-bold text-dark">Programs</Nav.Link>
              <Nav.Link href="#solutions" className="fw-bold text-dark">Solutions</Nav.Link>
              <Nav.Link href="#stories" className="fw-bold text-dark">Success Stories</Nav.Link>
              <Nav.Link href="#contact" className="fw-bold text-dark">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* --- HERO --- */}
      <section className="hero-section { margin-top:0 !important;">
        <div className="hero-bg" aria-hidden />
        <Container className="py-6">
          <Row className="align-items-center">
            <Col lg={6} className="text-lg-start text-center">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="display-6 fw-bold"
              >
                Build a Future-Ready Workforce
              </motion.h1>
              <p className="lead mt-3 text-muted">
                Prepare your organization for a disrupted world. RLT Edzaro's customized L&D solutions empower
                organizations to bridge skill gaps, retain top talent, and cultivate high-performing teams.
              </p>

              <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-4">
                <Button variant="primary" size="lg">Get in Touch</Button>
                <Button variant="outline-secondary" size="lg">View Corporate Playbook</Button>
              </div>

              <div className="mt-4 stats d-flex gap-4 justify-content-center justify-content-lg-start">
                <Stat number="40%" label="Workforce needs new capabilities" />
                <Stat number="89%" label="L&D Heads emphasise future-ready skills" />
                <Stat number="94%" label="Employees prefer career development" />
              </div>
            </Col>

            <Col lg={6} className="mt-5 mt-lg-0">
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="card-visual p-4 shadow-lg rounded-3"
              >
                <img src="https://via.placeholder.com/600x360.png?text=Enterprise+Learning+Illustration" alt="enterprise" className="img-fluid rounded" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- SOLUTIONS SUMMARY --- */}
      <Container id="solutions" className="py-5">
        <Row className="mb-4">
          <Col md={8}>
            <h3 className="fw-bold">Tailored Solutions to Attract and Retain Your Workforce</h3>
            <p className="text-muted">Offering tailored and off-the-shelf solutions that empower growth at every career stage.</p>
          </Col>
          <Col md={4} className="d-flex align-items-center justify-content-md-end justify-content-center">
            <Button variant="outline-primary">Talk to an Expert</Button>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <FeatureCard
              title="Access Skilled Fresh Talent"
              description={`Hire industry-ready talent via RLT Edzaro's Hire, Train, Deploy model. Equip new hires with
              job-ready skills to contribute immediately.`}
              iconUrl="https://via.placeholder.com/64.png?text=T"
            />
          </Col>
          <Col md={4}>
            <FeatureCard
              title="Enhance Workforce Learning"
              description={`Leverage our AI-driven Platform-as-a-Service (PaaS) for scalable, corporate learning and
              deliver custom-fit experiences.`}
              iconUrl="https://via.placeholder.com/64.png?text=P"
            />
          </Col>
          <Col md={4}>
            <FeatureCard
              title="Create High-Performance Teams"
              description={`Role-based upskilling cohorts, customized learning aligned to business goals and cohort
              collaboration.`}
              iconUrl="https://via.placeholder.com/64.png?text=C"
            />
          </Col>
        </Row>
      </Container>

      {/* --- PROGRAMS GRID --- */}
      <Container id="programs" className="py-5 bg-light rounded-top">
        <h4 className="fw-bold mb-3">Choose from our off-the-shelf programs</h4>
        <p className="text-muted">Filter by domain, duration, or certification.</p>

        <Row className="g-4 mt-2">
          {programs.map((p, i) => (
            <Col md={4} lg={3} key={i}>
              <Card className="h-100 program-card shadow-sm">
                <Card.Img variant="top" src={p.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{p.title}</Card.Title>
                  <Card.Text className="text-muted small mb-2">{p.tag}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <small className="text-muted">{p.duration}</small>
                    <Button size="sm" variant="primary">Learn More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button variant="outline-primary">View All Programs</Button>
        </div>
      </Container>

      {/* --- SUCCESS STORIES --- */}
      <Container id="stories" className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h4 className="fw-bold">Customer Success Stories</h4>
            <p className="text-muted">Real outcomes from organizations that partnered with RLT Edzaro.</p>

            <blockquote className="blockquote mt-4">
              <p className="mb-0">"The investment in making talent corporate-ready and deliver from day one is a huge differentiator."</p>
              <footer className="blockquote-footer mt-2">Nalini Krishnan, Head of Competency Management</footer>
            </blockquote>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/560x320.png?text=Customer+Logos" alt="logos" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* --- CONTACT FORM --- */}
      <Container id="contact" className="py-5 bg-soft">
        <Row>
          <Col lg={6}>
            <h4 className="fw-bold">Talk to our experts</h4>
            <p className="text-muted">For any queries, reach out to contact@rltedzaro.com</p>

            <Form className="mt-3 contact-form">
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control placeholder="Name" />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control placeholder="Work Email" />
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control placeholder="Phone" />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control placeholder="Organization" />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control as="select">
                  <option>Which solution are you looking for?</option>
                  <option>Tailored solutions</option>
                  <option>Off-the-shelf solutions</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Briefly describe your requirement" />
              </Form.Group>

              <Button variant="primary">Submit</Button>
            </Form>
          </Col>

          <Col lg={6} className="d-flex align-items-center justify-content-center">
            <img src="https://via.placeholder.com/420x320.png?text=Talk+to+Us" alt="talk" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* --- FOOTER --- */}
      <footer className="py-4 text-muted text-center small">
        <Container>
          <div>© {new Date().getFullYear()} RLT Edzaro</div>
        </Container>
      </footer>
    </div>
  );
}

/* ---------------------------- Helper subcomponents ---------------------------- */

function Style() {
  const css = `
.rlt-ep-page { margin-top:0 !important;  font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #22333b; }
.logo-img { width:48px; height:48px; object-fit:cover; border-radius:8px; }
.brand-main { font-weight:700; }
.brand-sub { font-size:12px; color:#6c757d; }
.more-pill { background-color:#2e596dff; }

.hero-section { position:relative; overflow:hidden; }
.hero-bg { position:absolute; inset:0; background: linear-gradient(120deg, rgba(46,89,109,0.06), rgba(46,89,109,0.02)); z-index:0; }
.hero-section > .container { position:relative; z-index:2; }
.card-visual { background: linear-gradient(180deg, #ffffffcc, #ffffffcc); }

.stats { margin-top:16px; }
.stat-block { background:#f8fbff; padding:10px 14px; border-radius:8px; box-shadow:0 2px 8px rgba(34,51,59,0.04); }
.stat-number { font-weight:700; font-size:1.15rem; color:#1b3b4b; }

.feature-card { border:0; }
.program-card img { height:160px; object-fit:cover; }
.bg-soft { background: linear-gradient(180deg,#fbfdff,#f7fbff); }

footer { border-top:1px solid rgba(34,51,59,0.04); }

/* subtle background particles animation (corporate safe) */
@keyframes floaty {
  0% { transform: translateY(0) translateX(0) rotate(0deg); opacity:0.9 }
  50% { transform: translateY(-18px) translateX(8px) rotate(6deg); opacity:0.6 }
  100% { transform: translateY(0) translateX(0) rotate(0deg); opacity:0.9 }
}
.hero-bg::before,
.hero-bg::after {
  content: '';
  position:absolute;
  width:420px; height:420px; border-radius:20px; opacity:0.06; z-index:0;
  background: linear-gradient(180deg,#2e596d, #7fb3c9);
  filter: blur(28px);
}
.hero-bg::before { left:-8%; top:-12%; animation: floaty 8s ease-in-out infinite; }
.hero-bg::after { right:-12%; bottom:-20%; animation: floaty 10s ease-in-out infinite reverse; }

/* Dropdown remove default caret for the custom More pill */
#more-dropdown .dropdown-toggle::after { display:none !important; }

/* responsive tweaks */
@media (max-width:767px) {
  .hero-section { padding-top:2rem; }
  .stats { flex-direction:column; gap:10px; }
}
`;
  return <style>{css}</style>;
}

function Stat({ number, label }) {
  return (
    <div className="stat-block d-flex flex-column align-items-start">
      <div className="stat-number">{number}</div>
      <div className="small text-muted">{label}</div>
    </div>
  );
}

function FeatureCard({ title, description, iconUrl }) {
  return (
    <Card className="h-100 feature-card">
      <Card.Body>
        <div className="d-flex align-items-start gap-3">
          <img src={iconUrl} alt="icon" width={56} height={56} style={{ borderRadius:8 }} />
          <div>
            <div className="fw-bold">{title}</div>
            <div className="text-muted small mt-1">{description}</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

const programs = [
  { title: 'AI Developer Bootcamp', tag: 'Bootcamp Programme', duration: '6 Months', image: 'https://via.placeholder.com/400x220.png?text=AI+Bootcamp' },
  { title: 'Generative AI Foundations', tag: 'Advanced Certification', duration: '4 Months', image: 'https://via.placeholder.com/400x220.png?text=Generative+AI' },
  { title: 'Applied Data Science', tag: 'Advanced Certification', duration: '12 Months', image: 'https://via.placeholder.com/400x220.png?text=Data+Science' },
  { title: 'Cyber Security & Defense', tag: 'Advanced Certification', duration: '6 Months', image: 'https://via.placeholder.com/400x220.png?text=Cyber+Security' },
  { title: 'Leadership in Tech', tag: 'Executive Programme', duration: '10 Months', image: 'https://via.placeholder.com/400x220.png?text=Leadership' },
  { title: 'VLSI & Chip Design', tag: 'Advanced Certification', duration: '9 Months', image: 'https://via.placeholder.com/400x220.png?text=VLSI' },
  { title: 'FinTech & Blockchain', tag: 'Advanced Programme', duration: '6 Months', image: 'https://via.placeholder.com/400x220.png?text=FinTech' },
  { title: 'Women in Software Engineering', tag: 'Bootcamp Programme', duration: '12 Months', image: 'https://via.placeholder.com/400x220.png?text=Women+in+Tech' }
];
