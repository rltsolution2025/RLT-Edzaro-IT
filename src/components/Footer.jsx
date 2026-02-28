import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer text-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>RLT Edzaro</h5>
            <p className="mb-0">Empowering future software developers with hands-on training.</p>
           <p className="mt-3">
  <strong>Address:</strong><br />
  2, 1st St, Corporation Colony, Rangarajapuram, Kodambakkam, Chennai, Tamil Nadu 600024<br />
  Phone: +91 89255 00513 | Email: contact@rltedzaro.com
</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">            
              {/* <li><Link to="/courses" className="text-light text-decoration-none">Courses</Link></li>
              <li><Link to="/inside-program/AI-Developer" className="text-light text-decoration-none">Program</Link></li> */}
              <li><Link to="/career" className="text-light text-decoration-none">Career</Link></li>
              <li><Link to="/about-us" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/inside-program/ai-developer" className="text-light text-decoration-none">AI for Developer</Link></li>
              <li><Link to="/inside-program/cloud-developer" className="text-light text-decoration-none">Cloud Developer Program</Link></li>
              <li><Link to="/refer-friend" className="text-light text-decoration-none">Refer & Earn</Link></li>
              <li><Link to="/hire-edzaro" className="text-light text-decoration-none">Hire from Edzaro</Link></li>
              <li><Link to="/contact-us" className="text-light text-decoration-none">Contact Us</Link></li>
              {/* <li><Link to="/industrial-services" className="text-light text-decoration-none">Industrial Services</Link></li> */}
              <li><Link to="/platform" className="text-light text-decoration-none">Platform</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com/rltedzaro/" className="text-light me-3"><i className="bi bi-facebook fs-4"></i></a>
              <a href="https://www.youtube.com/@RLTEdzaro" className="text-light me-3"><i className="bi bi-youtube fs-4"></i></a>
              <a href="https://www.linkedin.com/company/rlt-edzaro/" className="text-light me-3"><i className="bi bi-linkedin fs-4"></i></a>
              <a href="https://www.instagram.com/rlt_edzaro" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
            </div>
            
          </Col>
          <p className="mt-3 mb-0 text-center">&copy; 2023 RLT Edzaro. All rights reserved.</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;