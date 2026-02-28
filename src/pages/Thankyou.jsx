import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div style={{ backgroundColor: "#e8f0ef", minHeight: "100vh", paddingTop: "8rem" }}>
      
      {/* Top Section */}
      <div className="container py-5 text-center">
        <h1 className="fw-bold" style={{ fontSize: "2.3rem", color: "#0d2b3e" }}>
          Thank you, your request has been received!
        </h1>

        <p className="mt-3" style={{ fontSize: "1.1rem", color: "#0d2b3e" }}>
          Our team will get back to you shortly.
        </p>

        {/* Styled Link as a Button */}
        <Link to="/" className="btn btn-dark mt-4 px-4 py-2">
          Go to Home
        </Link>
      </div>

      {/* Middle Section - Resources */}
      <div className="container py-5">
        <h3 className="fw-bold text-center mb-4" style={{ color: "#0d2b3e" }}>
          Further resources from RLT Edzaro
        </h3>

        <div className="row g-4 justify-content-center">
          
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="p-4 rounded shadow-sm bg-white" style={{ minHeight: "170px" }}>
              <h6 className="text-uppercase text-muted mb-2">Career Guide</h6>
              <h5 className="fw-bold">Roadmap to Cloud & AI Careers</h5>

              <Link 
                to="/career" 
                className="text-decoration-none fw-bold mt-3 d-block"
              >
                Learn more →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="p-4 rounded shadow-sm bg-white" style={{ minHeight: "170px" }}>
              <h6 className="text-uppercase text-muted mb-2">Blog Post</h6>
              <h5 className="fw-bold">Skills Needed for the Future Workforce</h5>
              <a href="#" className="text-decoration-none fw-bold mt-3 d-block">
                Learn more →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="p-4 rounded shadow-sm bg-white" style={{ minHeight: "170px" }}>
              <h6 className="text-uppercase text-muted mb-2">Webinar</h6>
              <h5 className="fw-bold">AI & Cloud Leadership Programs</h5>
              <a href="#" className="text-decoration-none fw-bold mt-3 d-block">
                Learn more →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
