import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCandidate } from "../store/candidates";

async function fileToDataURL(file) {
  if (!file) return "";
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function StudentPage() {
  const nav = useNavigate();

  // Core profile
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [gpa, setGpa] = useState("");
  const [skills, setSkills] = useState("");
  const [about, setAbout] = useState("");

  // Work eligibility & logistics
  const [workAuth, setWorkAuth] = useState("");
  const [noSponsorship, setNoSponsorship] = useState("");
  const [term, setTerm] = useState("");
  const [dates, setDates] = useState("");

  // Links (optional)
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");

  // Uploads
  const [resumeFile, setResumeFile] = useState(null);
  const [transcriptFile, setTranscriptFile] = useState(null);

  // Diversity & Compliance
  const [gender, setGender] = useState("");
  const [raceEthnicity, setRaceEthnicity] = useState("");
  const [veteranStatus, setVeteranStatus] = useState("");
  const [disabilityStatus, setDisabilityStatus] = useState("");

  // Consent
  const [certify, setCertify] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!certify) {
      alert("Please certify that your information is accurate.");
      return;
    }
    if (!resumeFile) {
      alert("Please upload your résumé.");
      return;
    }

    const resumeDataUrl = await fileToDataURL(resumeFile);
    const transcriptDataUrl = await fileToDataURL(transcriptFile);

    addCandidate({
      name,
      email,
      school,
      major,
      degreeLevel,
      gradYear,
      gpa,
      skills,
      about,
      workAuth,
      noSponsorship,
      term,
      dates,
      portfolioUrl,
      githubUrl,
      linkedinUrl,
      resumeDataUrl,
      transcriptDataUrl,
      gender,
      raceEthnicity,
      veteranStatus,
      disabilityStatus,
    });

    nav("/candidates");
  }

  return (
    <main className="page student-bg">
      <div className="container">
        <h1 className="hero">Student Profile</h1>

        <form className="form-card" onSubmit={handleSubmit}>
          {/* Identity & Academics */}
          <div className="grid-2">
            <label className="field">
              <span>Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
          </div>

          <div className="grid-3">
            <label className="field">
              <span>School</span>
              <input value={school} onChange={(e) => setSchool(e.target.value)} />
            </label>
            <label className="field">
              <span>Major</span>
              <input value={major} onChange={(e) => setMajor(e.target.value)} />
            </label>
            <label className="field">
              <span>Degree Level</span>
              <select value={degreeLevel} onChange={(e) => setDegreeLevel(e.target.value)}>
                <option value="">Select…</option>
                <option>Bachelor’s</option>
                <option>Master’s</option>
                <option>PhD</option>
                <option>Associate</option>
                <option>Certificate/Bootcamp</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <div className="grid-3">
            <label className="field">
              <span>Grad Year</span>
              <input value={gradYear} onChange={(e) => setGradYear(e.target.value)} placeholder="2026" />
            </label>
            <label className="field">
              <span>GPA (optional)</span>
              <input value={gpa} onChange={(e) => setGpa(e.target.value)} placeholder="3.7" />
            </label>
            <label className="field">
              <span>Skills (comma-separated)</span>
              <input value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Python, React, SQL" />
            </label>
          </div>

          {/* Work Authorization & Term */}
          <div className="grid-3">
            <label className="field">
              <span>Work Authorization Status</span>
              <select value={workAuth} onChange={(e) => setWorkAuth(e.target.value)} required>
                <option value="">Select…</option>
                <option>U.S. Citizen or Permanent Resident</option>
                <option>F-1 Student (CPT/OPT Eligible)</option>
                <option>Other (specify in About)</option>
              </select>
            </label>

            <label className="field">
              <span>Authorization to Work in the U.S. Without Sponsorship</span>
              <select value={noSponsorship} onChange={(e) => setNoSponsorship(e.target.value)} required>
                <option value="">Select…</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <label className="field">
              <span>Preferred Internship Term</span>
              <input value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Summer 2026" />
            </label>
          </div>

          <label className="field">
            <span>Preferred Dates / Timing (optional)</span>
            <input value={dates} onChange={(e) => setDates(e.target.value)} placeholder="May 20 – Aug 15, 2026" />
          </label>

          {/* Links */}
          <div className="grid-3">
            <label className="field">
              <span>Portfolio URL (optional)</span>
              <input value={portfolioUrl} onChange={(e) => setPortfolioUrl(e.target.value)} placeholder="https://…" />
            </label>
            <label className="field">
              <span>GitHub URL (optional)</span>
              <input value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} placeholder="https://github.com/…" />
            </label>
            <label className="field">
              <span>LinkedIn URL (optional)</span>
              <input value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} placeholder="https://www.linkedin.com/in/…" />
            </label>
          </div>

          {/* Uploads */}
          <div className="grid-2">
            <label className="field">
              <span>Upload Résumé (PDF/DOC)</span>
              <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFile(e.target.files?.[0] || null)} required />
            </label>
            <label className="field">
              <span>Upload Transcript (optional)</span>
              <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => setTranscriptFile(e.target.files?.[0] || null)} />
            </label>
          </div>

          {/* Diversity & Compliance */}
          <fieldset className="field" style={{ border: "1px solid rgba(255,255,255,0.25)", borderRadius: "12px", padding: "1rem" }}>
            <legend style={{ color: "#fff", fontWeight: "700" }}>Diversity & Compliance</legend>

            <div className="grid-2">
              <label className="field">
                <span>Gender</span>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select…</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Non-binary</option>
                  <option>Other</option>
                  <option>Prefer not to answer</option>
                </select>
              </label>

              <label className="field">
                <span>Ethnicity / Race</span>
                <select value={raceEthnicity} onChange={(e) => setRaceEthnicity(e.target.value)}>
                  <option value="">Select…</option>
                  <option>Hispanic or Latino</option>
                  <option>White</option>
                  <option>Black or African American</option>
                  <option>Asian</option>
                  <option>American Indian or Alaska Native</option>
                  <option>Native Hawaiian or Other Pacific Islander</option>
                  <option>Two or More Races</option>
                  <option>Prefer not to answer</option>
                </select>
              </label>
            </div>

            <div className="grid-2">
              <label className="field">
                <span>Veteran Status</span>
                <select value={veteranStatus} onChange={(e) => setVeteranStatus(e.target.value)}>
                  <option value="">Select…</option>
                  <option>Not a veteran</option>
                  <option>Protected veteran</option>
                  <option>Not a protected veteran</option>
                  <option>Prefer not to answer</option>
                </select>
              </label>

              <label className="field">
                <span>Disability Status</span>
                <select value={disabilityStatus} onChange={(e) => setDisabilityStatus(e.target.value)}>
                  <option value="">Select…</option>
                  <option>Yes, I have a disability</option>
                  <option>No, I do not have a disability</option>
                  <option>Prefer not to answer</option>
                </select>
              </label>
            </div>
          </fieldset>

          {/* About + Consent */}
          <label className="field">
            <span>About You</span>
            <textarea rows="4" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Short bio, highlights, work eligibility notes if needed…" />
          </label>

          <label className="field checkbox">
            <input type="checkbox" checked={certify} onChange={(e) => setCertify(e.target.checked)} required />
            <span>I certify that the information provided is true and accurate to the best of my knowledge.</span>
          </label>

          <div className="actions">
            <button className="btn btn-student" type="submit">Submit Profile</button>
          </div>
        </form>
      </div>
    </main>
  );
}
