// import { Container, Row, Col, Card } from "react-bootstrap";
// import { motion } from "framer-motion";

// const ProgramStats = ({ stats = [] }) => {
//   if (!stats.length) return null;

//   return (
//     <Container className="py-5">
//       <Row>
//         {stats.map((s, i) => (
//           <Col md={3} key={i}>
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Card className="text-center shadow-sm">
//                 <Card.Body>
//                   <h3 className="fw-bold">{s.value}</h3>
//                   <p className="text-muted">{s.label}</p>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ProgramStats;

import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Stats.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProgramStats = ({ stats = [] }) => {
  if (!stats.length) return null;

  return (
    <section className="program-stats-section py-5">
      <Container>

        {/* SECTION HEADING */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fw-bold display-6">Program Highlights</h2>
          <p className="text-muted mt-2">
            Key outcomes and metrics that define the program value
          </p>
        </motion.div>

        {/* STATS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 🔹 Center horizontally */}
          <Row className="g-4 justify-content-center">
            {stats.map((s, i) => (
              <Col md={3} sm={6} key={i}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="h-100"
                >
                  <Card className="stat-card text-center h-100">
                    <Card.Body className="d-flex flex-column justify-content-center">
                      <h3 className="fw-bold stat-value">{s.value}</h3>
                      <p className="stat-label mb-0">{s.label}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

      </Container>
    </section>
  );
};



export default ProgramStats;
