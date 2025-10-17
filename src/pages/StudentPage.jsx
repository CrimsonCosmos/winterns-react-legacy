import React, { useState } from "react";
import "../App.css";

const StudentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    major: "",
    graduation: "",
    role: "",
    // resume file metadata + data URL for rendering later
    resumeName: "",
    resumeType: "",
    resumeDataUrl: "", // data:... base64 string
    // optional diversity
    gender: "",
    ethnicity: "",
    veteran: "",
    disability: "",
  });

  // Handle text/select changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (!files) {
      setFormData((p) => ({ ...p, [name]: value }));
      return;
    }

    // File selected
    const file = files[0];
    if (!file) return;

    // Read as Data URL so we can store it in localStorage
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((p) => ({
        ...p,
        resumeName: file.name,
        resumeType: file.type || "application/octet-stream",
        resumeDataUrl: reader.result, // e.g. data:application/pdf;base64,....
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WARNING: localStorage has size limits; keep files small if using this approach.
    const existing = JSON.parse(localStorage.getItem("winterns:candidates") || "[]");
    const updated = [
      ...existing,
      { ...formData, submittedAt: Date.now() },
    ];
    localStorage.setItem("winterns:candidates", JSON.stringify(updated));

    alert("Application submitted successfully!");

    // Reset (keep diversity fields optional)
    setFormData({
      name: "",
      email: "",
      school: "",
      major: "",
      graduation: "",
      role: "",
      resumeName: "",
      resumeType: "",
      resumeDataUrl: "",
      gender: "",
      ethnicity: "",
      veteran: "",
      disability: "",
    });
  };

  return (
    <div className="page student-bg">
      <div className="content">
        <h1>Student Application</h1>

        <form onSubmit={handleSubmit} className="application-form">
          <label>
            Full Name
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            School / University
            <input name="school" value={formData.school} onChange={handleChange} />
          </label>

          <label>
            Major / Field of Study
            <input name="major" value={formData.major} onChange={handleChange} />
          </label>

          <label>
            Expected Graduation Year
            <input name="graduation" value={formData.graduation} onChange={handleChange} />
          </label>

          <label>
            Desired Role / Internship Type
            <select name="role" value={formData.role} onChange={handleChange} required>
              <option value="">Select a role...</option>
              <option>Software Engineering</option>
              <option>Data Science</option>
              <option>Product Management</option>
              <option>Design / UI/UX</option>
              <option>Marketing / Business</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Upload Resume
            <input type="file" name="resume" accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg" onChange={handleChange} />
            {formData.resumeName && (
              <small style={{ color: "#fff", opacity: 0.85 }}>Selected: {formData.resumeName}</small>
            )}
          </label>

          <h2>Diversity & Compliance (optional)</h2>

          <label>
            Gender
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select...</option>
              <option>Female</option>
              <option>Male</option>
              <option>Non-binary</option>
              <option>Other</option>
              <option>I prefer not to answer</option>
            </select>
          </label>

          <label>
            Ethnicity / Race
            <select name="ethnicity" value={formData.ethnicity} onChange={handleChange}>
              <option value="">Select...</option>
              <option>Asian</option>
              <option>Black or African American</option>
              <option>Hispanic or Latino</option>
              <option>Native American or Alaska Native</option>
              <option>Native Hawaiian or Pacific Islander</option>
              <option>White</option>
              <option>Two or more races</option>
              <option>I prefer not to answer</option>
            </select>
          </label>

          <label>
            Veteran Status
            <select name="veteran" value={formData.veteran} onChange={handleChange}>
              <option value="">Select...</option>
              <option>Yes</option>
              <option>No</option>
              <option>I prefer not to answer</option>
            </select>
          </label>

          <label>
            Disability Status
            <select name="disability" value={formData.disability} onChange={handleChange}>
              <option value="">Select...</option>
              <option>Yes</option>
              <option>No</option>
              <option>I prefer not to answer</option>
            </select>
          </label>

          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default StudentPage;
