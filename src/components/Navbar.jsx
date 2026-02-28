import React from "react";
import { Navbar as BSNavbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CallbackForm from "./CallbackForm";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCallbackForm, setShowCallbackForm] = React.useState(false);

  // ⭐ Auto-close mobile menu
  const [expanded, setExpanded] = React.useState(false);

  const handleExploreUs = () => {
    setExpanded(false); // close mobile menu

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "Courses" } });
    } else {
      const section = document.getElementById("Courses");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { to: "/career", label: "Career" },
    { to: "/learning-platform", label: "Platform" },
    { to: "/hire-it-talent", label: "Hire from Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <BSNavbar
      expand="lg"
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
      className="theme-navbar shadow-sm fixed-top d-flex flex-column navbar-wrapper "
    >
      {/* Top Blue Bar */}
      <Container fluid className="py-1 justify-content-center" style={{ backgroundColor: "#80e4f1ff" }}>
        <div style={{ fontSize: "16px", color: "#050363ff", textAlign: "center", width: "100%" }}>
          <strong>Need Help!</strong> Talk to our Career Advisors:{" "}
          <a href="tel:+2349012345678" style={{ color: "#050363ff", textDecoration: "none" }}>
            +91 89255 00513
          </a>{" "}
          |{" "}
          <a href="mailto:contact@rltedzaro.com" style={{ color: "#050363ff", textDecoration: "none" }}>
            contact@rltedzaro.com
          </a>{" "}
          |{" "}
          <a
            onClick={() => setShowCallbackForm(true)}
            style={{ color: "#050363ff", cursor: "pointer", textDecoration: "dotted underline" }}
          >
            Request a callback
          </a>{" "}
          |{" "}
          <a
            onClick={() => {
              setExpanded(false); // close mobile menu
              navigate("/registration"); // navigate to registration page
            }}
            style={{ color: "#050363ff", cursor: "pointer", textDecoration: "dotted underline" }}
          >
            Apply Now <i className="bi bi-arrow-right-short"></i>
          </a>
        </div>
      </Container>

      {/* Callback Modal */}
      <CallbackForm show={showCallbackForm} handleClose={() => setShowCallbackForm(false)} />

      {/* Main Navbar */}
      <Container>
        <BSNavbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} style={{ paddingTop: "1rem" }}>
          <div style={{ textAlign: "center" }}>
            <img src="/assets/Logo.png" alt="RLT Edzaro" height="50" style={{ display: "block", margin: "0 auto" }} />
          </div>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <BSNavbar.Brand
              style={{
                background: "#174981ff",
                borderRadius: "25px",
                padding: "8px",
                color: "white",
                fontWeight: "Bold",
                cursor: "pointer",
              }}
              onClick={handleExploreUs}
            >
              Explore Us
            </BSNavbar.Brand>

            {/* Program Dropdown */}
            <NavDropdown
              title="Program"
              id="program-dropdown"
              className={`fw-bold text-dark ${location.pathname.startsWith("/") ? "active-link" : ""}`}
            >
              <NavDropdown.Item as={Link} to="/aws-cloud-developer-program" onClick={() => setExpanded(false)}>
                AWS Cloud Developer Graduate
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/aws-ai-developer-program" onClick={() => setExpanded(false)}>
                AWS - AI Developer Graduate
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/aws-cloud-operations-devops-program" onClick={() => setExpanded(false)}>
                AWS - Cloud Operator Graduate
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/center-for-ai-proficiency-program" onClick={() => setExpanded(false)}>
                Center for AI - Colleges
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ai-infinity-corporate-upskilling-program" onClick={() => setExpanded(false)}>
                AI-Infinity
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ai-lab-school-generative-ai-training" onClick={() => setExpanded(false)}>
                AI Lab for Schools 
              </NavDropdown.Item>
            </NavDropdown>

            {/* Other Links */}
            {links.map((link, i) => (
              <Nav.Link
                as={Link}
                to={link.to}
                key={i}
                onClick={() => setExpanded(false)}
                className={`mx-2 fw-bold text-dark nav-item-link ${location.pathname === link.to ? "active-link" : ""}`}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  {link.label}
                </motion.div>
              </Nav.Link>
            ))}

            {/* More Dropdown */}
            <NavDropdown
              title={<span className="rounded-pill fw-semibold text-dark">More</span>}
              id="more-dropdown"
              className="fw-bold text-dark"
            >
              <NavDropdown.Item as={Link} to="/about-us" onClick={() => setExpanded(false)}>
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/refer-and-earn" onClick={() => setExpanded(false)}>
                Refer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="https://talentsprint.com/blog" target="_blank" onClick={() => setExpanded(false)}>
                Blogs
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BSNavbar.Collapse>
      </Container>

      {/* Styles */}
      <style>{`
        .theme-navbar {
          background-color: #fff;
        }
        .nav-item-link.active-link {
          position: relative;
          color: #2e596d !important;
          font-weight: 600;
        }
        .nav-item-link.active-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #2e596d;
          border-radius: 2px;
        }
      `}</style>
    </BSNavbar>
  );
};

export default Navbar;
