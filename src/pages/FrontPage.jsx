import React from "react";
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <main className="gradient-bg">
      <div className="container hero">
        <header className="brand">
          <h1 className="title">winterns</h1>
          <p className="tagline">Find great interns. Launch great careers.</p>
        </header>

        <nav className="cta-row">
          <Link className="btn btn-primary" to="/apply">For Students — Apply</Link>
          <Link className="btn btn-secondary" to="/company">For Companies — Learn More</Link>
          <Link className="btn btn-ghost" to="/candidates">View Candidates</Link>
        </nav>

        <footer className="footnote" style={{marginTop: 12}}>
          <span>Built at the University of Illinois</span>
        </footer>
      </div>
    </main>
  );
}
