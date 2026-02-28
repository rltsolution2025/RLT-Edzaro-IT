import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  {
    name: "Abhijith Morla",
    program: "Full Stack Development (FSD)",
    text: `I joined the Java Full Stack Development Bootcamp by TalentSprint. Coming from an EEE with no IT experience,
    I learned everything step-by-step with expert mentorship.`,
    img: "/assets/Test1.png",
    link: "https://www.youtube.com/embed/l0fSJMkTXDY"
  },
  {
    name: "Samarth Sahi",
    program: "PG Certification in AI & ML (IIIT Hyderabad)",
    text: `After 16 years in IT, I felt stuck in the same cycle. This program gave me the confidence to explore new opportunities.`,
    img: "/assets/Test2.png",
    link: "https://www.youtube.com/embed/zlhb3D_5Kcw"
  },
  {
    name: "Prem Niskeode",
    program: "Advanced Programme in Digital Business Leadership (IIM Calcutta)",
    text: `The structured curriculum and expert faculty exceeded my expectations and helped drive digital transformation.`,
    img: "/assets/Test3.png",
    link: "https://www.youtube.com/embed/zL784L76eko"
  }
];

export default function SuccessStories() {
  const [show, setShow] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const openVideo = (url) => {
    setActiveVideo(url);
    setShow(true);
  };

  const closeVideo = () => {
    setShow(false);
    setActiveVideo("");
  };

  return (
    <section className="success-section py-5 position-relative">
      <div className="pattern-bg"></div>

      <Container style={{ position: "relative", zIndex: 3 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold display-6">
           Our Partner Have Empowered <span className="text-primary">250,000+ Learners</span> Globally
          </h2>
          <p className="text-muted lead">
            Real stories from learners who transformed their careers.
          </p>
        </motion.div>

        <Row className="g-4">
          {testimonials.map((t, index) => (
            <Col md={4} key={index} className="d-flex">
              <motion.div
                className="w-100 d-flex"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="testimonial-card h-100 d-flex flex-column w-100">
                  {/* Video Thumbnail */}
                  <div
                    className="video-thumb"
                    onClick={() => openVideo(t.link)}
                  >
                    <img src={t.img} alt={t.name} />
                    <FaPlayCircle className="play-icon" />
                  </div>

                  <Card.Body className="d-flex flex-column">
                    <h5 className="fw-bold">{t.name}</h5>
                    <p className="text-primary small fw-semibold">{t.program}</p>
                    <p className="text-muted flex-grow-1">{t.text}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 🎥 Video Modal */}
      <Modal
        show={show}
        onHide={closeVideo}
        size="lg"
        centered
        backdrop="static"
        keyboard
        dialogClassName="video-modal"
      >
        {/* ❌ VIEWPORT CLOSE BUTTON */}
        <button className="viewport-close-btn" onClick={closeVideo}>
          ✕
        </button>

        <div className="video-modal-wrapper">
          <div className="ratio ratio-16x9">
            <iframe
              src={`${activeVideo}?autoplay=1`}
              title="Testimonial Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </Modal>

      {/* Styles */}
      <style>{`
        .success-section {
          background: #f8fbff;
          position: relative;
          overflow: hidden;
        }

        .pattern-bg {
          position: absolute;
          inset: 0;
          background: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png');
          opacity: 0.35;
        }

        .testimonial-card {
          border-radius: 16px;
          background: #fff;
          min-height: 520px;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
        }

        .video-thumb {
          position: relative;
          cursor: pointer;
        }

        .video-thumb img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          border-radius: 16px 16px 0 0;
        }

        .play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 60px;
          color: #ff0000;
          opacity: 0.9;
        }

        /* Modal clean look */
        .video-modal .modal-content {
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .video-modal-wrapper {
          background: #000;
          border-radius: 12px;
          overflow: hidden;
        }

        /* ❌ CLOSE BUTTON IN VIEWPORT */
        .viewport-close-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0,0,0,0.8);
          color: #fff;
          border: none;
          font-size: 22px;
          cursor: pointer;
          z-index: 1060; /* above modal */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .viewport-close-btn:hover {
          background: #dc3545;
        }
      `}</style>
    </section>
  );
}
