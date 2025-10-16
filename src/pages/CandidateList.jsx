import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getCandidates } from "../store/candidates";

export default function CandidateList() {
  const [query, setQuery] = useState("");
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(getCandidates());
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return candidates;
    return candidates.filter(c =>
      [
        c.name,
        c.email,
        c.school,
        c.major,
        c.degreeLevel,
        c.skills,
        c.about,
      ]
        .filter(Boolean)
        .some(v => String(v).toLowerCase().includes(q))
    );
  }, [query, candidates]);

  return (
    <main className="page">
      <header className="company-header">
        <Link to="/" className="btn btn-home">← Home</Link>
        <h1 className="company-title">Find Interns</h1>
      </header>

      <section className="candidate-wrap">
        <div className="candidate-toolbar">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by name, school, major, skills…"
            className="candidate-search"
          />
          <div className="count">
            {filtered.length} candidate{filtered.length === 1 ? "" : "s"}
          </div>
        </div>

        <ul className="candidate-grid">
          {filtered.map(c => (
            <li key={c.id} className="candidate-card">
              <div className="card-row">
                <h3 className="name">{c.name || "Unnamed"}</h3>
                {c.gradYear && (
                  <span className="pill">Class of {c.gradYear}</span>
                )}
              </div>

              {/* META INFORMATION */}
              <div className="meta">
                {c.school && <div><strong>School:</strong> {c.school}</div>}
                {c.major && <div><strong>Major:</strong> {c.major}</div>}
                {c.degreeLevel && <div><strong>Degree:</strong> {c.degreeLevel}</div>}
                {c.gradYear && <div><strong>Grad Year:</strong> {c.gradYear}</div>}
                {c.gpa && <div><strong>GPA:</strong> {c.gpa}</div>}
                {c.workAuth && <div><strong>Work Auth:</strong> {c.workAuth}</div>}
                {c.noSponsorship && (
                  <div><strong>No Sponsorship:</strong> {c.noSponsorship === "yes" ? "Yes" : "No"}</div>
                )}
                {c.term && <div><strong>Term:</strong> {c.term}</div>}
                {c.dates && <div><strong>Dates:</strong> {c.dates}</div>}

                {/* Diversity & Compliance Fields */}
                {(c.gender || c.raceEthnicity || c.veteranStatus || c.disabilityStatus) && (
                  <>
                    {c.gender && <div><strong>Gender:</strong> {c.gender}</div>}
                    {c.raceEthnicity && <div><strong>Ethnicity/Race:</strong> {c.raceEthnicity}</div>}
                    {c.veteranStatus && <div><strong>Veteran Status:</strong> {c.veteranStatus}</div>}
                    {c.disabilityStatus && <div><strong>Disability Status:</strong> {c.disabilityStatus}</div>}
                  </>
                )}

                {c.email && (
                  <div>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${c.email}`}>{c.email}</a>
                  </div>
                )}
              </div>

              {/* LINKS */}
              <div className="links">
                {c.portfolioUrl && (
                  <a href={c.portfolioUrl} target="_blank" rel="noreferrer">Portfolio</a>
                )}
                {c.githubUrl && (
                  <a href={c.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {c.linkedinUrl && (
                  <a href={c.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
                )}
                {c.resumeDataUrl && (
                  <a href={c.resumeDataUrl} download={`resume-${c.name || c.id}.pdf`}>
                    Résumé (Download)
                  </a>
                )}
                {c.transcriptDataUrl && (
                  <a href={c.transcriptDataUrl} download={`transcript-${c.name || c.id}.pdf`}>
                    Transcript
                  </a>
                )}
              </div>

              {/* SKILLS */}
              {c.skills && (
                <div className="skills">
                  {(Array.isArray(c.skills)
                    ? c.skills
                    : String(c.skills).split(","))
                    .map(s => s.trim())
                    .filter(Boolean)
                    .slice(0, 12)
                    .map(s => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                </div>
              )}

              {/* ABOUT */}
              {c.about && <p className="about">{c.about}</p>}

              {/* SUBMITTED TIMESTAMP */}
              <div className="submitted">
                Submitted {new Date(c.createdAt).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
