// src/pages/CandidateList.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function CandidateList() {
  const raw = JSON.parse(localStorage.getItem("winterns:candidates") || "[]");

  // Helpers to avoid rendering objects
  const toStr = (v) => (typeof v === "string" ? v : "");
  const safeJoin = (arr) =>
    arr.filter((x) => typeof x === "string" && x.trim()).join(" • ");
  const isPdf = (c) => (c.resumeType || "").includes("pdf");
  const isImage = (c) => (c.resumeType || "").startsWith("image/");

  // Clean & sort
  const candidates = [...raw]
    .map((c, i) => {
      // strip any object-y fields that would crash render
      const cleaned = {
        _id: i,
        name: toStr(c.name),
        email: toStr(c.email),
        school: toStr(c.school),
        major: toStr(c.major),
        graduation: toStr(c.graduation),
        role: toStr(c.role),

        // resume display fields
        resumeName: toStr(c.resumeName),
        resumeType: toStr(c.resumeType),
        resumeDataUrl: toStr(c.resumeDataUrl),

        // legacy fallback (some entries saved resume: {} earlier)
        resume: toStr(c.resume),

        // meta
        submittedAt: typeof c.submittedAt === "number" ? c.submittedAt : 0,
      };
      return cleaned;
    })
    .sort((a, b) => (b.submittedAt || 0) - (a.submittedAt || 0));

  const fmt = (ts) => (ts ? new Date(ts).toLocaleString() : "—");

  return (
    <div className="page student-bg">
      <header className="hero">Recent Applications</header>

      <main className="container">
        <section className="form-card">
          {candidates.length === 0 ? (
            <p>No applications yet.</p>
          ) : (
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gap: "1rem",
              }}
            >
              {candidates.map((c) => (
                <li key={c._id} className="section" style={{ margin: 0 }}>
                  <div className="company-copy" style={{ gap: ".4rem" }}>
                    <div style={{ fontSize: "1.05rem", fontWeight: 800 }}>
                      {c.name || "Unnamed"}
                    </div>

                    {c.email && (
                      <div>
                        <strong>Email:</strong> {c.email}
                      </div>
                    )}

                    {(c.school || c.major) && (
                      <div>
                        <strong>Education:</strong>{" "}
                        {safeJoin([c.school, c.major])}
                      </div>
                    )}

                    {c.graduation && (
                      <div>
                        <strong>Expected Grad Year:</strong> {c.graduation}
                      </div>
                    )}

                    {c.role && (
                      <div>
                        <strong>Desired Role:</strong> {c.role}
                      </div>
                    )}

                    {/* Resume */}
                    {c.resumeDataUrl ? (
                      <div style={{ marginTop: ".5rem" }}>
                        <div
                          className="btn-row"
                          style={{ gap: ".5rem", margin: ".25rem 0 .75rem" }}
                        >
                          <a
                            className="btn btn-home"
                            href={c.resumeDataUrl}
                            download={c.resumeName || "resume"}
                          >
                            Download Resume
                          </a>
                        </div>

                        {isPdf(c) && (
                          <div className="resume-preview">
                            <iframe
                              title={`resume-${c._id}`}
                              src={c.resumeDataUrl}
                              className="resume-frame"
                            />
                          </div>
                        )}

                        {isImage(c) && (
                          <div className="resume-image-wrap">
                            <img
                              src={c.resumeDataUrl}
                              alt={c.resumeName || "resume image"}
                              className="resume-image"
                            />
                          </div>
                        )}
                      </div>
                    ) : c.resumeName || c.resume ? (
                      <div>
                        <strong>Resume:</strong>{" "}
                        {c.resumeName || c.resume /* both are strings now */}
                      </div>
                    ) : null}

                    <div style={{ fontSize: ".9rem", opacity: 0.85 }}>
                      Submitted: {fmt(c.submittedAt)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="btn-row" style={{ justifyContent: "space-between" }}>
            <Link to="/" className="btn btn-home">
              ← Back to Home
            </Link>
            <Link to="/student" className="btn btn-pro">
              Submit Another
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
