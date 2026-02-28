import React from "react";
import { Container } from "react-bootstrap";
import "./HiringCompanies.css";

const logos = [
  "/assets/Hiring/aws.png",
  "/assets/Hiring/google.png",
  "/assets/Hiring/microsoft.png",
  "/assets/Hiring/ibm.png",
  "/assets/Hiring/accenture.png",
  "/assets/Hiring/tcs.png",
  "/assets/Hiring/infosys.png",
  "/assets/Hiring/wipro.png",
  "/assets/Hiring/cognizant.png",
  "/assets/Hiring/hcl.png",
  "/assets/Hiring/dell.png",
  // "/assets/Hiring/deloitte.png",
 "/assets/Hiring/flipkart.png",
  "/assets/Hiring/techmahindra.png",
  "/assets/Hiring/jpmorgan.png",
  "/assets/Hiring/samsung.png",
  "/assets/Hiring/capgemini.png", 
  "/assets/Hiring/zoho.png",
  "/assets/Hiring/azure.png",
  "/assets/Hiring/meta.png",
  "/assets/Hiring/oracle.png",
  "/assets/Hiring/sap.png",
  "/assets/Hiring/adobe.png",
  "/assets/Hiring/salesforce.png",
  "/assets/Hiring/siemens.png",
  "/assets/Hiring/intel.png",
  "/assets/Hiring/cisco.png",
];

const HiringCompanies = ({
  title = "Companies Hiring Cloud & AI Professionals",
  subtitle = "Our learners are placed across leading technology-driven organizations",
}) => {
  return (
    <section className="hiring-marquee-section py-5 bg-white">
      <Container  fluid className="px-0">
        <h2 className="text-center fw-bold mb-2">{title}</h2>
        <p className="text-center text-muted mb-4">{subtitle}</p>

        <div className="logo-marquee">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-item" key={index}>
                <img src={logo} alt="Hiring Company Logo" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HiringCompanies;
