import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { motion } from "framer-motion";

const courseData = {
  "cloud-developer": {
    title: "Cloud Application Developer Track",
    description:
      "Master AWS cloud fundamentals, DevOps, and application development through hands-on labs, certifications, and capstone projects.",
    modules: [
      "AWS Foundations & Python",
      "DevOps Basics (CI/CD, Containers)",
      "AI & Microservices",
      "Capstone Projects (Onboarding App, Scheduler App)",
      "Job Readiness & Portfolio Building",
    ],
  },
  "ai-developer": {
    title: "AI Application Developer Track",
    description:
      "Become an AI-powered application developer. Learn ML, AI services on AWS, and integrate them into production-ready apps.",
    modules: [
      "Machine Learning Foundations",
      "AWS AI Services (Lex, Polly, Rekognition)",
      "Serverless AI Integration",
      "Capstone AI Project",
      "Career Preparation & Certifications",
    ],
  },
};

const Courses = () => {
  const { courseId } = useParams();
  const course = courseData[courseId] || courseData["cloud-developer"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5 bg-light"
    >
      <Container>
        <Row className="mb-5">
          <Col md={10} className="mx-auto text-center">
            <h1 className="fw-bold display-5 mb-3">{course.title}</h1>
            <p className="lead text-muted fs-5">{course.description}</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm border-0 rounded-3">
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">Course Modules</h4>
                <ListGroup variant="flush">
                  {course.modules.map((module, idx) => (
                    <ListGroup.Item
                      key={idx}
                      className="d-flex justify-content-between align-items-center py-3 px-4"
                    >
                      <span className="fw-medium text-muted">{module}</span>
                      <Button
                        size="sm"
                        variant="outline-primary"
                        className="rounded-pill px-3"
                      >
                        View
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Courses;
