import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBookOpen, FaCogs, FaUsers, FaChalkboardTeacher, FaRocket } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurStory.css";

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      className="our-story-section text-white py-5"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522204507491-7bcd429da3a0?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="overlay"></div>
      <Container>
        <Row className="align-items-center">
          <Col md={12} data-aos="fade-up">
            <h3 className="mb-4 text-center fw-bold display-6">
              <FaBookOpen className="me-2 text-warning" /> Our Success Story
            </h3>

            <div className="story-content fs-5" style={{ lineHeight: "1.8" }}>
              <p>
                In the year <strong>1995</strong>, a visionary leader, <strong>Dr. G. P. Thirumurugan</strong>, laid the foundation for what would become the <strong>RLT Group</strong>. A former <strong>Vice President of Larsen & Toubro (L&amp;T) India</strong>, Dr. Thirumurugan was not only an accomplished engineer but also a passionate educator. His deep love for learning and teaching, combined with his strong technical expertise, inspired him to create an organization that could make a meaningful difference in society.
              </p>
              <p>
                With just <strong>six dedicated individuals</strong> and an unshakable vision, RLT Group began its journey in the fields of <strong>instrumentation</strong> and <strong>water management</strong>. These humble beginnings were fueled by determination, integrity, and a commitment to excellence. Dr. Thirumurugan firmly believed that knowledge and innovation are the true drivers of progress, and he built RLT on this powerful philosophy.
              </p>
              <p>
                As the organization grew, Dr. Thirumurugan turned his attention to education—his true passion. He established schools that quickly became known for their <strong>high academic standards</strong> and <strong>remarkable student success rates</strong>. These institutions weren’t just schools; they were places where young minds were nurtured, inspired, and empowered to achieve their full potential. His vision was clear: to build a strong foundation of learning that could shape future generations.
              </p>
              <p>
                Over the years, RLT Group continued to expand its horizons, venturing into new domains and taking on <strong>prestigious government projects</strong>. What started as a small team has now grown into a thriving group with <strong>250+ talented employees</strong>, all united by a shared purpose and commitment to excellence. Each milestone in this journey has been a testament to perseverance, innovation, and the power of collective effort.
              </p>
              <p>
                Today, RLT Group stands at the forefront of <strong>education, technology, and skill development</strong>. Through our brand <strong>Edzaro</strong> and a strategic partnership with <strong>TalentSprint</strong>, we are bringing world-class <strong>software training, mentorship, and industry-aligned programs</strong> to aspiring professionals. Our goal is to empower the next generation of tech leaders, helping them build meaningful careers and shape the future of innovation.
              </p>
              <p>
                From a modest beginning with six people to a flourishing organization impacting thousands, the RLT journey is a story of <strong>passion, vision, and unstoppable growth</strong>. And this is only the beginning — we continue to grow <strong>year after year</strong>, guided by our founder’s values and our unwavering belief in the power of education and technology to transform lives.
              </p>
            </div>

            <div className="icon-row mt-5 text-center">
              <FaCogs className="mx-3 text-warning fs-2" data-aos="zoom-in" />
              <FaChalkboardTeacher className="mx-3 text-warning fs-2" data-aos="zoom-in" data-aos-delay="200" />
              <FaUsers className="mx-3 text-warning fs-2" data-aos="zoom-in" data-aos-delay="400" />
              <FaRocket className="mx-3 text-warning fs-2" data-aos="zoom-in" data-aos-delay="600" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurStory;
