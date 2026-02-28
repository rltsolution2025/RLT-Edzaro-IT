// import { Container, Row, Col } from "react-bootstrap";

// const EligibilitySection = ({ items = [] }) => {
//   if (!items.length) return null;

//   return (
//     <Container className="py-5">
//       <h2 className="text-center fw-bold mb-4">Who Is This For?</h2>
//       <Row>
//         {items.map((i, idx) => (
//           <Col md={3} key={idx}>
//             ✔ {i}
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default EligibilitySection;

import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./EligibilitySection.css";

const EligibilitySection = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <section className="eligibility-section py-5">
      <Container>

        {/* SECTION HEADER */}
        <div className="text-center mb-5">
          <h3 className="fw-bold">Who Is This Program For?</h3>
          <p className="text-muted mt-2">
            This program is designed for learners and professionals looking to
            build industry-relevant skills and accelerate their career growth.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {items.map((item, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card
                as={motion.div}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="eligibility-card h-100 text-center"
              >
                <div className="eligibility-icon">
                  <i className="bi bi-person-check-fill"></i>
                </div>

                <Card.Body>
                  <p className="eligibility-text mb-0">{item}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default EligibilitySection;
