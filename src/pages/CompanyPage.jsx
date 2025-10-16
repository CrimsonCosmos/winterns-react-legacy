import { Link } from "react-router-dom";
import profileImg from "../images/dylan.jpg";

export default function CompanyPage() {
  return (
    <main className="page company-page">
      <header className="company-header">
        <Link to="/" className="btn btn-home">← Home</Link>
        <h1 className="company-title">Winterns</h1>
      </header>

      <section className="company-card">
        <div className="company-flex">
          <img src={profileImg} alt="Founder" className="company-photo" />
          <div className="company-text">
            <p>Hi, I’m Dylan Gehl, I started this company at the University of Illinois.</p>
            <p>The purpose of this company is to more efficiently reward talented individuals.</p>
            <p>If you were expecting a career page, we hire exclusively using our own technology.</p>
            <p>
              I am excited to hear about anything else involving winterns.<br />
              <a href="mailto:dylan@winterns.com" className="email-link">
                dylan@winterns.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
