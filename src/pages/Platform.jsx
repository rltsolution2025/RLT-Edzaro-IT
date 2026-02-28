import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Button} from 'react-bootstrap';
import './Platform.css'; // Import custom CSS for additional styling
import { Helmet } from 'react-helmet-async';

const Platform = () => {
  return (
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Learning Platform for IT Skills | RLT Edzaro</title>
        <meta
          name="description"
          content="Build IT expertise anytime with our hybrid learning platform featuring live classes, recordings, coding labs, collaboration tools, and mobile learning."
        />
        <link rel="canonical" href="https://rltedzaro.com/learning-platform" />
      </Helmet>
  
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section animated-bg hero-mobile-padding"> 
        <div className="hero-shape"></div>

        <div className="container hero-content">
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-md-6 mb-4 mb-md-0 text-white">
              <h1 className="fw-bold display-5">
                Hi-Tech Hi-Touch Hybrid <br /> Learning Platform of Choice
              </h1>
              <p className="lead mt-3">
                Learning never stops. Build expertise 24x7.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
              <div className="laptop-box">
                <div className="laptop-header">
                  <span style={{ background: "#ff5f57" }}></span>
                  <span style={{ background: "#febc2e" }}></span>
                  <span style={{ background: "#28c940" }}></span>
                </div>

                <div className="laptop-body">
                  <div className="laptop-block big"></div>
                  <div className="laptop-block small"></div>
                  <div className="laptop-block small"></div>
                  <div className="laptop-block big"></div>
                </div>

                <div className="code-popup">
                  &lt;div&gt;<br />
                  &nbsp;&nbsp;Hello World<br />
                  &lt;/div&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section className="features-section animated-bg-secondary py-5">
        <Container>
          <Row className="mb-5">
            <Col md={10} className="mx-auto text-center text-black">
              <h1 className="mb-4">Our Learning Platform</h1>
<p className="lead">
  We deliver a world-class learning experience to our students through our 
  partnership with <strong>TalentSprint, a part of Accenture</strong>. 
  This cutting-edge platform is designed specifically for software development 
  education, offering flexible access to high-quality courses with features 
  that support every learner’s success.
</p>

            </Col>
          </Row>

          {/* Platform Features */}
          <Row>
            {[
              { icon: "bi-play-circle", title: "Live & Recorded Classes", text: "Attend live sessions or watch recordings at your own pace with full HD video quality", color: "primary" },
              { icon: "bi-code-square", title: "Integrated Code Editor", text: "Write, run, and debug code directly in the browser with our built-in IDE", color: "success" },
              { icon: "bi-chat-dots", title: "Real-time Collaboration", text: "Pair programming, group projects, and instant messaging with peers and mentors", color: "info" },
              { icon: "bi-clipboard-check", title: "Progress Tracking", text: "Visual dashboards showing your learning progress, completion rates, and skill growth", color: "warning" },
              { icon: "bi-cloud-arrow-down", title: "Offline Access", text: "Download lessons and code exercises for learning without internet connection", color: "danger" },
              { icon: "bi-phone", title: "Mobile App", text: "Learn on the go with our dedicated iOS and Android mobile applications", color: "secondary" },
            ].map((feature, index) => (
              <Col md={4} className="mb-4" key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card h-100 text-center border-0 shadow feature-card"
                >
                  <Card.Body>
                    <i className={`bi ${feature.icon} display-4 text-${feature.color} mb-3`}></i>
                    <h5>{feature.title}</h5>
                    <p>{feature.text}</p>
                  </Card.Body>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </motion.div>

  );
};

export default Platform;