// src/pages/FrontPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div className="page">
      <header className="hero">Welcome to the Internship Hub</header>

      <main className="container grid">
        <section className="card student">
          <h2>I’m a Student</h2>
          <p>Looking for internships and opportunities to grow your career.</p>
          <Link to="/student" className="btn btn-student">Find Internships</Link>
        </section>

        <section className="card pro">
          <h2>I’m a Professional</h2>
          <p>Looking for great interns to join your team or company.</p>
          <Link to="/company" className="btn btn-pro">View Company Info</Link>
        </section>
      </main>

      <Link
        to="/company"
        className="corner-link brand-lower"
        aria-label="winterns company © 2025"
      >
        winterns company © 2025
      </Link>
    </div>
  );
}
