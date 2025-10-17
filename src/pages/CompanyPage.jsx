import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import founderImg from "../assets/founder.jpg"; // update if your filename differs

export default function CompanyPage() {
  useEffect(() => { document.title = "winterns company"; }, []);

  return (
    <div className="page student-bg">
      <div className="container">
        <h1 className="hero brand-lower">winterns company</h1>

        {/* single button row */}
        <div className="btn-row">
          <Link to="/" className="btn btn-home">home</Link>
        </div>

        {/* company section */}
        <section className="company-card">
          <div className="company-flex">
            <img
              src={founderImg}
              alt="founder of winterns"
              className="founder-img"
            />

            <div className="company-copy">
              {/* Replaced text (no 'careers' heading) */}
              <p className="subtitle">
                Hi, I’m Dylan Gehl, I started this company at the University of Illinois.
                The purpose of this company is to more efficiently reward talented individuals.
                If you were expecting a career page, we hire exclusively using our own technology.
                I am excited to hear about anything else involving <span className="brand-lower">winterns</span>.
              </p>

              {/* Email link */}
              <a
                className="contact-callout brand-lower"
                href="mailto:dylan@winterns.com"
              >
                contact me: dylan@winterns.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
