import React, { useState } from "react";

export default function StudentPage() {
  const [resumeName, setResumeName] = useState("");
  const [coverName, setCoverName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send form data to your backend or service (e.g., Formspree/Supabase/Firebase)
    alert("Thanks! Your application has been recorded (demo).");
  };

  return (
    <div className="page student-bg">
      <header className="container">
        <h1 className="hero">Internship Application</h1>
        <p className="subtitle">
          Fill out the fields below. Items marked <span aria-hidden>★</span> are required.
        </p>
      </header>

      <main className="container">
        <form className="form-card" onSubmit={onSubmit}>
          {/* ───────────────────────── Personal Info ───────────────────────── */}
          <fieldset className="section">
            <legend>Personal information</legend>

            <div className="grid-2">
              <div className="field">
                <label htmlFor="firstName">First name ★</label>
                <input id="firstName" name="firstName" required autoComplete="given-name" />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last name ★</label>
                <input id="lastName" name="lastName" required autoComplete="family-name" />
              </div>
            </div>

            <div className="grid-2">
              <div className="field">
                <label htmlFor="email">Email ★</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone ★</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="e.g., +1 555-123-4567"
                />
              </div>
            </div>

            <div className="grid-2">
              <div className="field">
                <label htmlFor="city">Current city ★</label>
                <input id="city" name="city" required />
              </div>
              <div className="field">
                <label htmlFor="country">Country/Region ★</label>
                <input id="country" name="country" required />
              </div>
            </div>

            <div className="grid-2">
              <div className="field">
                <label htmlFor="workAuth">Work authorization ★</label>
                <select id="workAuth" name="workAuth" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="citizen">Citizen / Permanent Resident</option>
                  <option value="visa">Student Visa (F-1/J-1)</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="sponsorship">Sponsorship needed now or in future? ★</label>
                <select id="sponsorship" name="sponsorship" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                  <option value="unsure">Unsure</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* ───────────────────────── Education ───────────────────────── */}
          <fieldset className="section">
            <legend>Education</legend>

            <div className="field">
              <label htmlFor="school">University / School ★</label>
              <input id="school" name="school" required />
            </div>

            <div className="grid-3">
              <div className="field">
                <label htmlFor="degree">Degree ★</label>
                <select id="degree" name="degree" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Bachelor’s</option>
                  <option>Master’s</option>
                  <option>PhD</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="major">Major ★</label>
                <input id="major" name="major" required />
              </div>
              <div className="field">
                <label htmlFor="grad">Graduation (MM/YYYY) ★</label>
                <input id="grad" name="grad" placeholder="05/2026" required />
              </div>
            </div>

            <div className="grid-2">
              <div className="field">
                <label htmlFor="gpa">GPA (optional)</label>
                <input id="gpa" name="gpa" placeholder="e.g., 3.7 / 4.0" />
              </div>
              <div className="field">
                <label htmlFor="coursework">Relevant coursework (optional)</label>
                <input id="coursework" name="coursework" placeholder="e.g., Data Structures, Finance 101" />
              </div>
            </div>
          </fieldset>

          {/* ───────────────────────── Preferences ───────────────────────── */}
          <fieldset className="section">
            <legend>Role & preferences</legend>

            <div className="grid-3">
              <div className="field">
                <label htmlFor="startDate">Earliest start date ★</label>
                <input id="startDate" name="startDate" type="date" required />
              </div>
              <div className="field">
                <label htmlFor="duration">Internship length ★</label>
                <select id="duration" name="duration" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>8–10 weeks</option>
                  <option>10–12 weeks</option>
                  <option>Semester / 4–6 months</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="hours">Hours per week ★</label>
                <select id="hours" name="hours" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Part-time (≤ 20)</option>
                  <option>Full-time (30–40)</option>
                </select>
              </div>
            </div>

            <div className="grid-3">
              <div className="field">
                <label htmlFor="workMode">Work mode ★</label>
                <select id="workMode" name="workMode" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                  <option>On-site</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="locations">Preferred location(s)</label>
                <input id="locations" name="locations" placeholder="City, State or Country" />
              </div>
              <div className="field">
                <label htmlFor="relocate">Open to relocation?</label>
                <select id="relocate" name="relocate" defaultValue="No">
                  <option>No</option>
                  <option>Yes</option>
                  <option>Maybe</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="skills">Key skills ★</label>
              <input id="skills" name="skills" required placeholder="e.g., Python, Figma, Excel, Customer Support" />
            </div>
          </fieldset>

          {/* ───────────────────────── Links ───────────────────────── */}
          <fieldset className="section">
            <legend>Links</legend>
            <div className="grid-3">
              <div className="field">
                <label htmlFor="linkedin">LinkedIn</label>
                <input id="linkedin" name="linkedin" type="url" placeholder="https://…" />
              </div>
              <div className="field">
                <label htmlFor="github">GitHub / Portfolio</label>
                <input id="github" name="github" type="url" placeholder="https://…" />
              </div>
              <div className="field">
                <label htmlFor="website">Personal website</label>
                <input id="website" name="website" type="url" placeholder="https://…" />
              </div>
            </div>
          </fieldset>

          {/* ───────────────────────── Documents ───────────────────────── */}
          <fieldset className="section">
            <legend>Documents</legend>
            <div className="grid-2">
              <div className="field file">
                <label htmlFor="resume">Resume (PDF) ★</label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf"
                  required
                  onChange={(e) => setResumeName(e.target.files?.[0]?.name || "")}
                />
                {resumeName && <span className="file-name">{resumeName}</span>}
              </div>
              <div className="field file">
                <label htmlFor="cover">Cover letter (PDF)</label>
                <input
                  id="cover"
                  name="cover"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setCoverName(e.target.files?.[0]?.name || "")}
                />
                {coverName && <span className="file-name">{coverName}</span>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="summary">Experience summary (2–3 sentences)</label>
              <textarea id="summary" name="summary" rows="4" placeholder="Tell us briefly about your most relevant experience…" />
            </div>
          </fieldset>

          {/* ───────────────────────── Other ───────────────────────── */}
          <fieldset className="section">
            <legend>Other</legend>
            <div className="grid-2">
              <div className="field">
                <label htmlFor="referral">How did you hear about us?</label>
                <select id="referral" name="referral" defaultValue="">
                  <option value="">Select one</option>
                  <option>University career portal</option>
                  <option>Referral</option>
                  <option>Social media</option>
                  <option>Job board</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="accommodations">Do you need any accommodations?</label>
                <input id="accommodations" name="accommodations" placeholder="Optional" />
              </div>
            </div>

            <label className="consent">
              <input type="checkbox" required /> I consent to the processing of my data for recruiting.
            </label>
          </fieldset>

          <div className="actions">
            <button type="submit" className="btn btn-pro">Submit application</button>
          </div>
        </form>
      </main>
    </div>
  );
}
