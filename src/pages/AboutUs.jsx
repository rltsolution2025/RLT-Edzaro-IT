import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.css';
import AOS from "aos";
import "aos/dist/aos.css";
import RLTTreeBootstrap from '../components/OrgTree';
import OurStory from '../components/OurStory';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style = {{overflowX: 'hidden'}}
    >
      <Helmet>
        <title>About RLT Group | Empowering Education & Technology Excellence</title>
        <meta
          name="description"
          content="RLT Group is a diversified organization spanning schools, colleges, industrial solutions, and software training through RLT Edzaro in partnership with TalentSprint."
        />
        <link rel="canonical" href="https://rltedzaro.com/about-us" />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero-section position-relative ">
        {/* Subtle background shapes */}
        <div className="bg-shape-hero shape-1"></div>
        <div className="bg-shape-hero shape-2"></div>

        <Container>
          <Row className="align-items-center">
            {/* Left Illustration */}
            <Col lg={6} className="mb-4 mb-lg-0 d-flex justify-content-center">
              <div className="about-illustration position-relative">
                <div className="floating-bubble bubble-1">
                  {/* <i className="bi bi-building display-5 text-primary"></i> */}
                </div>
                <div className="floating-bubble bubble-2">
                  {/* <i className="bi bi-laptop display-5 text-success"></i> */}
                </div>
                <div className="floating-bubble bubble-3">
                  {/* <i className="bi bi-people-fill display-5 text-info"></i> */}
                </div>
                {/* <img
                  src="/assets/Aboutus.png"
                  alt="About RLT Group"
                  className="img-fluid rounded-4 shadow-sm"
                /> */}
                <RLTTreeBootstrap />
              </div>
            </Col>

            {/* Right Text */}
            <Col lg={6}>
              <h1 className="fw-bold display-5 mb-3">
                About <span className="brand">RLT Group</span>
              </h1>
              <p className="lead mb-4 text-dark">
                Founded in <strong>1995</strong>, RLT Group has been a pioneer in instrumentation, water management, and education.  
                Today, we are expanding into software training with a strategic partnership with <strong>TalentSprint</strong>, 
                part of Accenture, empowering the next generation of tech professionals.
              </p>

              <ul className="list-unstyled about-benefits mb-4 text-dark">
                <li>
                  <i className="bi bi-laptop-fill me-2 fs-5 text-primary"></i>
                  Industry-Relevant Software Training
                </li>
                <li>
                  <i className="bi bi-award-fill me-2 fs-5 text-success"></i>
                  Mentorship by Experts from TalentSprint & Accenture
                </li>
                <li>
                  <i className="bi bi-people-fill me-2 fs-5 text-info"></i>
                  Holistic Learning Environment
                </li>
                <li>
                  <i className="bi bi-briefcase-fill me-2 fs-5 text-warning"></i>
                  Career-Focused Skill Development
                </li>
              </ul>
              <button className="btn btn-primary btn-lg fw-semibold">
                Learn More
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section py-5">
        <Container>
          <Row className="mb-5 text-center">
            <Col>
              <h2 className="fw-bold mb-4">Our Mission & Vision</h2>
              <p className="text-muted">
                Driving excellence across industries and empowering the next generation through quality training and mentorship.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
  <Col md={6}>
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}
    className="card h-100 border-0 shadow-sm p-4 text-center bg-light rounded-4"
  >
    <img
      src="/assets/Mission.png"
      alt="Mission Icon"
      className="mb-3 mission-img"
    />

    <h4 className="mb-3">Our Mission</h4>

    <p className="text-muted">
      To provide holistic training across instrumentation, water management,
      schools, and now software education, empowering individuals to excel in
      their careers.
    </p>
  </motion.div>
</Col>


  {/* ⭐ Add spacing on small screens */}
  <Col md={6} className="mt-4 mt-md-0">
  <motion.div
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}
    className="card h-100 border-0 shadow-sm p-4 text-center bg-light rounded-4"
  >
    <img
      src="/assets/Vision.png"
      alt="Vision Icon"
      className="mb-3 mission-img"
    />

    <h4 className="mb-3">Our Vision</h4>

    <p className="text-muted">
      To be recognized as the most trusted provider of innovative education and
      training, bridging industry needs with human potential across multiple
      domains.
    </p>
  </motion.div>
</Col>

</Row>

        </Container>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section py-5 bg-light"> <OurStory /> </section>
      
      {/* Leadership & Stats Section */}
      {/* <section className="stats-section">
      <div className="animated-bg1"></div> */}

      {/* <Row>
        <Col md={8} className="mx-auto text-center  mb-5 px-4 px-md-5 ">
          <h3 className="mb-4 text-white" data-aos="fade-up">
            By the Numbers
          </h3>

          <ListGroup variant="flush" className="stats-list">
            <ListGroup.Item
              data-aos="fade-right"
              className="d-flex justify-content-between align-items-center bg-transparent border-0 text-white stat-item"
            >
              <span>Years in Industry</span>
              <strong className="text-primary">28+</strong>
            </ListGroup.Item>

            <ListGroup.Item
              data-aos="fade-left"
              className="d-flex justify-content-between align-items-center bg-transparent border-0 text-white stat-item"
            >
              <span>Students Trained</span>
              <strong className="text-success">4,500+</strong>
            </ListGroup.Item>

            <ListGroup.Item
              data-aos="fade-right"
              className="d-flex justify-content-between align-items-center bg-transparent border-0 text-white stat-item"
            >
              <span>Countries Served</span>
              <strong className="text-info">15</strong>
            </ListGroup.Item>

            <ListGroup.Item
              data-aos="fade-left"
              className="d-flex justify-content-between align-items-center bg-transparent border-0 text-white stat-item"
            >
              <span>Partner Companies</span>
              <strong className="text-warning">120+</strong>
            </ListGroup.Item>

            <ListGroup.Item
              data-aos="fade-up"
              className="d-flex justify-content-between align-items-center bg-transparent border-0 text-white stat-item"
            >
              <span>Graduation Rate</span>
              <strong className="text-danger">94%</strong>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row> */}
    {/* </section> */}
    </motion.div>
  );
};

export default AboutUs;