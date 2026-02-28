import React, { useState } from "react";
import { motion } from "framer-motion";
import { EnquiryForm as EnquiryFormAPI } from "../../pages/Api/Api";
import './EnquiryForm.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const EnquiryForm = ({ onSuccess }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);

  const courses = [
    "AWS Cloud Graduate Programme",
    "Center for Artificial Intelligence",
    "AI Lab for Schools",
    "AI-Infinity (Technical / Fundamental)",
    "Others",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await EnquiryFormAPI(userData);

      // small delay = premium UX
      setTimeout(() => {
        onSuccess && onSuccess();
      }, 400);

   
      setUserData({
        name: "",
        email: "",
        phone: "",
        course: "",
      });

    } catch (error) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="enquiry-form"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {["name", "email", "phone", "course"].map((field, i) => (
        <motion.div className="mb-2" key={i} variants={fieldVariants}>
          {field === "course" ? (
            <select
              name="course"
              className="form-control"
              value={userData.course}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Course</option>
              {courses.map((course, idx) => (
                <option key={idx} value={course}>
                  {course}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={
                field === "email"
                  ? "email"
                  : field === "phone"
                  ? "tel"
                  : "text"
              }
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="form-control"
              value={userData[field]}
              onChange={handleInputChange}
              required
              {...(field === "phone"
                ? {
                    pattern: "[0-9]{10}",
                    maxLength: 10,
                    title: "Enter 10-digit phone number",
                  }
                : {})}
            />
          )}
        </motion.div>
      ))}

      <motion.button
        type="submit"
        className="btn enquiry-btn  w-100 mt-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </motion.button>
    </motion.form>
  );
};

export default EnquiryForm;