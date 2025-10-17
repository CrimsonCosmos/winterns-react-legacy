import React, { useState } from "react";
import { saveCandidate } from "../store/candidates";

export default function StudentPage() {
  const [form, setForm] = useState({
    name: "", email: "", school: "", major: "", gradYear: "",
    summary: "",
    gender: "", ethnicity: "", veteran: "", disability: ""
  });

  function update(k, v){ setForm(s => ({...s, [k]: v})); }
  function submit(e){
    e.preventDefault();
    saveCandidate(form);
    alert("Application submitted! Thank you.");
    setForm({ name:"", email:"", school:"", major:"", gradYear:"", summary:"", gender:"", ethnicity:"", veteran:"", disability:"" });
  }

  return (
    <main className="gradient-bg">
      <div className="container section">
        <form className="card" onSubmit={submit}>
          <h2 style={{marginTop:0}}>Student Application</h2>

          <div className="row row-2">
            <div>
              <label className="label">Full Name</label>
              <input className="input" value={form.name} onChange={e=>update("name", e.target.value)} placeholder="Jane Doe"/>
            </div>
            <div>
              <label className="label">Email</label>
              <input className="input" type="email" value={form.email} onChange={e=>update("email", e.target.value)} placeholder="jane@example.com"/>
            </div>
          </div>

          <div className="row row-2">
            <div>
              <label className="label">School</label>
              <input className="input" value={form.school} onChange={e=>update("school", e.target.value)} placeholder="University of Illinois"/>
            </div>
            <div>
              <label className="label">Major</label>
              <input className="input" value={form.major} onChange={e=>update("major", e.target.value)} placeholder="Computer Science"/>
            </div>
          </div>

          <div className="row row-2">
            <div>
              <label className="label">Graduation Year</label>
              <input className="input" value={form.gradYear} onChange={e=>update("gradYear", e.target.value)} placeholder="2027"/>
            </div>
          </div>

          <div>
            <label className="label">Summary (optional)</label>
            <textarea className="textarea" rows={4} value={form.summary} onChange={e=>update("summary", e.target.value)} placeholder="Briefly describe your experience and interests."/>
          </div>

          <h3 style={{marginTop:24}}>Diversity & Compliance (optional)</h3>
          <div className="row row-2">
            <div>
              <label className="label">Gender (optional)</label>
              <select className="select" value={form.gender} onChange={e=>update("gender", e.target.value)}>
                <option value="">I prefer not to answer</option>
                <option>Woman</option><option>Man</option><option>Non-binary</option><option>Self-describe</option>
              </select>
            </div>
            <div>
              <label className="label">Ethnicity / Race (optional)</label>
              <select className="select" value={form.ethnicity} onChange={e=>update("ethnicity", e.target.value)}>
                <option value="">I prefer not to answer</option>
                <option>Asian</option><option>Black or African American</option><option>Hispanic or Latino</option>
                <option>Middle Eastern or North African</option><option>Native American or Alaska Native</option>
                <option>Native Hawaiian or Other Pacific Islander</option><option>White</option><option>Two or more</option>
              </select>
            </div>
          </div>

          <div className="row row-2">
            <div>
              <label className="label">Veteran Status (optional)</label>
              <select className="select" value={form.veteran} onChange={e=>update("veteran", e.target.value)}>
                <option value="">I prefer not to answer</option>
                <option>Not a veteran</option><option>Veteran</option>
              </select>
            </div>
            <div>
              <label className="label">Disability Status (optional)</label>
              <select className="select" value={form.disability} onChange={e=>update("disability", e.target.value)}>
                <option value="">I prefer not to answer</option>
                <option>No disability</option><option>Has a disability</option>
              </select>
            </div>
          </div>

          <div style={{marginTop:20, display:"flex", gap:12}}>
            <button className="btn btn-primary" type="submit">Submit Application</button>
          </div>
        </form>
      </div>
    </main>
  );
}
