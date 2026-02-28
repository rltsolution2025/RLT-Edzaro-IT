import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import './Advantages.css';

const advantages = [
  {
    title: "Industry-Aligned Curriculum",
    img: "/assets/curriculum.png",
  },
  {
    title: "Ready-to-Deploy Talent",
    img: "/assets/talents.png",
  },
  {
    title: "Hands-on Project Experience",
    img: "/assets/projects.png",
  },
  {
    title: "AI Lab & Technology Infrastructure",
    img: "/assets/ai-lab.png",
  },
  {
    title: "Close Mentorship & Expert Guidance",
    img: "/assets/mentorship.png",
  },
  {
    title: "Strong Network with Top MNCs",
    img: "/assets/network.png",
  },
];

const Advantages = () => {
  return (
   <section className="advantage-section-full py-5">
  <Container className="position-relative" style={{ zIndex: 2 }}>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-4"
    >
      <h2 className="fw-bold display-6 text-dark">
        The <span className="text-primary">RLT Edzaro Advantage</span>
      </h2>

      <p className="text-muted lead mt-3">
        As an official TalentSprint partner (part of Accenture), RLT Edzaro delivers
        future-ready programs powered by industry-aligned curriculum, hands-on learning,
        AI lab facilities, and strong connections with leading MNCs.
      </p>
    </motion.div>

    <Row className="g-4">
      {advantages.map((item, index) => (
        <Col md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="adv-card shadow-sm rounded-4 overflow-hidden"
          >
            <div className="adv-card-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="adv-card-body d-flex justify-content-between align-items-center p-3">
              <h5 className="m-0 fw-semibold">{item.title}</h5>
              <FaArrowRight className="text-primary" />
            </div>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>

  {/* FULL WIDTH BACKGROUND & PATTERN */}
  <style>{`
    .advantage-section-full {
      width: 100vw;
      margin-left: calc(-50vw + 50%);
      position: relative;
      padding-top: 80px;
      padding-bottom: 80px;

      background:
        url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png'),
        radial-gradient(circle at top left, #eef3ff, #ffffff);
      background-size: 200px 200px, cover;
      overflow: hidden;
    }

    /* Floating background soft shapes */
    .advantage-section-full::before,
    .advantage-section-full::after {
      content: "";
      position: absolute;
      width: 280px;
      height: 280px;
      background: rgba(90, 140, 255, 0.18);
      border-radius: 50%;
      filter: blur(60px);
      animation: float 10s infinite ease-in-out;
      z-index: 0;
    }

    .advantage-section-full::before {
      top: -70px;
      left: -100px;
    }

    .advantage-section-full::after {
      bottom: -80px;
      right: -80px;
      animation-delay: 4s;
    }

    @keyframes float {
      0% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-30px) translateX(20px); }
      100% { transform: translateY(0) translateX(0); }
    }

    /* Cards */
    .adv-card {
      background: #fff;
      transition: transform 0.25s ease;
      cursor: pointer;
      z-index: 2;
      position: relative;
    }

    .adv-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 20px rgba(0,0,0,0.15);
    }

    .adv-card-img img {
      width: 100%;
      height: 160px;
      object-fit: cover;
    }
  `}</style>
</section>


  );
};

export default Advantages;
