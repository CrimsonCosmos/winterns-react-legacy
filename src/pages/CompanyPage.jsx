// src/pages/CompanyPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import dylanImage from "../images/dylan.jpg";

export default function CompanyPage() {
  return (
    <div className="page">
      <header className="hero">Winterns Company</header>

      <main className="container">
        <section className="card">
          <img
            src={dylanImage}
            alt="Dylan Gehl"
            className="company-photo"
          />

          <h2>About Winterns</h2>
          <p style={{ marginBottom: "1rem" }}>
            Hi, I’m Dylan Gehl, I started this company at the University of Illinois.
            The purpose of this company is to more efficiently reward talented individuals.
            If you were expecting a career page, we hire exclusively using our own technology.
            I am excited to hear about anything else involving Winterns.
          </p>

          <div className="button-row">
            <a
              href="mailto:dylan@winterns.com"
              className="btn btn-pro"
              aria-label="Contact me to talk more about Winterns"
            >
              Contact me to talk more about Winterns
            </a>

            <Link to="/" className="btn btn-student">
              ← Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Link to="/company" className="corner-link brand-lower">
        winterns company © 2025
      </Link>
    </div>
  );
}
