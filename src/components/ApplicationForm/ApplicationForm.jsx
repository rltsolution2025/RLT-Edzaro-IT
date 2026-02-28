
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { submitApplicationForm } from "../../pages/Api/Api";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    highestQualification: "",
    specialization: "",
    institutionName: "",
    passingYear: "",
    courseApplied: "",
    branch: "",
    courseMode: "",
    preferredBatch: "",
    experienceLevel: "",
    currentStatus: "",
    agreeToTerms: false
  });
  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await submitApplicationForm(formData);
      setMessage("✅ Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        highestQualification: "",
        specialization: "",
        institutionName: "",
        passingYear: "",
        courseApplied: "",
        branch: "",
        courseMode: "",
        preferredBatch: "",
        experienceLevel: "",
        currentStatus: "",
        agreeToTerms: false
      });
 setTimeout(() => {
      navigate("/thank-you");
    }, 1000);

    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="d-flex justify-content-center py-5"
      style={{ minHeight: "100vh", backgroundColor: "#e6f0fa" }}
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.div
        className="card p-5 shadow-lg"
        style={{
          maxWidth: "800px",
          width: "100%",
          borderRadius: "12px",
          backgroundColor: "#ffffff"
        }}
      >
        <h2 className="text-center text-primary mb-4">Course Application Form</h2>

        {message && (
          <motion.div
            className={`alert ${message.includes("✅") ? "alert-success" : "alert-danger"} text-center`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {message}
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Personal Info */}
          <h5 className="text-primary mb-3">Personal Information</h5>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email *</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone *</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[6-9]{1}[0-9]{9}"
                maxLength="10"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Education */}
          <h5 className="text-primary mb-3">Education</h5>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label">Highest Qualification *</label>
              <input
                type="text"
                className="form-control"
                name="highestQualification"
                value={formData.highestQualification}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Specialization</label>
              <input
                type="text"
                className="form-control"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Institution Name</label>
              <input
                type="text"
                className="form-control"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Passing Year</label>
              <input
                type="number"
                className="form-control"
                name="passingYear"
                value={formData.passingYear}
                onChange={handleChange}
                min="1900"
                max={new Date().getFullYear()}
              />
            </div>
          </div>

          {/* Course Details */}
          <h5 className="text-primary mb-3">Course Details</h5>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label">Course *</label>
              <select
                className="form-select"
                name="courseApplied"
                value={formData.courseApplied}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                <option>AWS Cloud Developer Graduate</option>
                <option>AWS - AI Developer Graduate</option>
                <option>AWS - Cloud Operator Graduate</option>
                <option>Center for AI - Colleges</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Branch *</label>
              <select
                className="form-select"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
              >
                <option value="">Select Branch</option>
                <option>Kodambakkam</option>
                <option>Maraimalai Nagar</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Mode *</label>
              <select
                className="form-select"
                name="courseMode"
                value={formData.courseMode}
                onChange={handleChange}
                required
              >
                <option value="">Select Mode</option>
                <option>Offline</option>
                <option>Online</option>
                <option>Hybrid</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Batch *</label>
              <select
                className="form-select"
                name="preferredBatch"
                value={formData.preferredBatch}
                onChange={handleChange}
                required
              >
                <option value="">Select Batch</option>
                <option>Weekdays</option>
                <option>Weekend</option>
              </select>
            </div>
          </div>

          {/* Experience */}
          <h5 className="text-primary mb-3">Experience</h5>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label">Experience Level *</label>
              <select
                className="form-select"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option>Fresher</option>
                <option>0-2 Years</option>
                <option>2-5 Years</option>
                <option>5+ Years</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Current Status</label>
              <select
                className="form-select"
                name="currentStatus"
                value={formData.currentStatus}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Student</option>
                <option>Working Professional</option>
                <option>Career Break</option>
                <option>Job Seeker</option>
              </select>
            </div>
          </div>

          {/* Terms */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">
              I agree to the terms & conditions *
            </label>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading || !formData.agreeToTerms}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Submitting..." : "Apply Now"}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ApplicationForm;
