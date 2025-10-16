import React from "react";
import { getCandidates } from "../store/candidates";

export default function CandidateList() {
  const data = getCandidates();
  return (
    <main className="gradient-bg">
      <div className="container section">
        <div className="card">
          <h2 style={{marginTop:0}}>Candidates</h2>
          {data.length === 0 ? (
            <p>No candidates yet.</p>
          ) : (
            <div style={{overflowX:"auto"}}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th><th>Email</th><th>School</th><th>Major</th><th>Grad</th><th>Summary</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((c, i) => (
                    <tr key={i}>
                      <td>{c.name}</td>
                      <td><a href={`mailto:${c.email}`}>{c.email}</a></td>
                      <td>{c.school}</td>
                      <td>{c.major}</td>
                      <td>{c.gradYear}</td>
                      <td style={{maxWidth:380}}>{c.summary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
