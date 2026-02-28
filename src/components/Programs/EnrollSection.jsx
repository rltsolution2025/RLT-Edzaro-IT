import { Container, Row, Col } from "react-bootstrap";
import EnrollForm from "../EnrollForm";
import "./EnrollSection.css";

const EnrollSection = ({ courseName }) => {
  return (
    <section className="enroll-section"
     style = {{
              backgroundImage: "url('/assets/Enroll-LandingPage.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "80px 0",
          }} 
    >
      <Container>
        <Row className="align-items-center">

          {/* LEFT: FORM */}
          <Col lg={6}>
            <div className="enroll-form-wrapper">
              <EnrollForm courseName={courseName} />
            </div>
          </Col>

          {/* RIGHT: IMAGE */}
          {/* <Col lg={6} className="d-none d-lg-flex justify-content-center">
            
          </Col> */}

        </Row>
      </Container>
    </section>
  );
};

export default EnrollSection;
