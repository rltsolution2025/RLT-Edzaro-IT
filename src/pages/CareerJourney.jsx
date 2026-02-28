import React, { useState } from "react";
import { Container, Col, ListGroup, Button, Collapse } from "react-bootstrap";
import { motion } from "framer-motion";

const timeline = [
  { title: "Quarter 1: Foundations", key: "q1" },
  { title: "Quarter 2: Intermediate + Capstone 1", key: "q2" },
  { title: "Quarter 3: Advanced + Capstone 2", key: "q3" },
];

const quarterDetails = {
  q1: [
    "Introduction to Cloud Foundations – compute, storage, IAM, networking, serverless basics",
    "Developer Fundamentals – Python, Git, DynamoDB, Lambda, Rekognition, Textract",
    "AWS Cloud Operations 1 – CLI, CloudWatch, EventBridge, Systems Manager, IaC basics",
  ],
  q2: [
    "AWS Cloud Fundamentals 1 – deeper dive into EC2, VPC, RDS, CloudFront, KMS encryption",
    "AI for Developers – generative AI, Bedrock, LangChain, prompt engineering",
    "Developer Intermediate 1 – microservices, Django web apps, AWS CDK, Step Functions",
    "Capstone 1: Customer Onboarding App – build document verification backend with Lambda, Textract, Rekognition",
  ],
  q3: [
    "AWS Cloud Fundamentals 2 – serverless architectures, CI/CD, DevSecOps, monitoring",
    "AWS Cloud Operations 2 – advanced DevOps, IaC with CDK, CodePipeline, scaling, logging",
    "Developer Intermediate 2 – React + AWS microservices, Cognito auth, Amplify hosting",
    "Capstone 2: Appointment Scheduler – containerized app with CI/CD, ECR, EKS, scaling",
  ],
};

const CareerJourney = () => {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section className="position-relative py-5" style={{ background: "#f2f8ff" }}>
      <Container>
        <Col md={8} className="mx-auto">
          <h3 className="fw-bold text-center mb-4">
            Your Career Journey with AWS Cloud Institute
          </h3>
          <div className="position-relative">
            {/* Vertical Line */}
            <div
              className="position-absolute"
              style={{
                left: 32,
                top: 0,
                width: 4,
                height: "100%",
                background: "linear-gradient(180deg, #007bff, #6a11cb)",
                borderRadius: 4,
                opacity: 0.15,
              }}
            />

            <ListGroup
              variant="flush"
              className="shadow-lg rounded-4 position-relative overflow-hidden ps-5"
            >
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="position-relative"
                >
                  <ListGroup.Item className="py-3 px-4 mb-3 rounded shadow-sm">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-medium text-muted">{item.title}</span>
                      <Button
                        size="sm"
                        variant="outline-primary"
                        className="rounded-pill px-3"
                        onClick={() =>
                          setOpenKey(openKey === item.key ? null : item.key)
                        }
                      >
                        {openKey === item.key ? "Hide" : "Details"}
                      </Button>
                    </div>

                    {/* Dropdown details */}
                    <Collapse in={openKey === item.key}>
                      <div className="mt-3 ps-3">
                        <ul className="mb-0">
                          {quarterDetails[item.key].map((point, i) => (
                            <li key={i} className="mb-2 text-secondary">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Collapse>
                  </ListGroup.Item>
                </motion.div>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default CareerJourney;
