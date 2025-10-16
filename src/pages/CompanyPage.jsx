// CompanyPage.jsx
import { Link } from "react-router-dom";

export default function CompanyPage() {
  return (
    <main className="page student-bg company-page">
      <Link to="/" className="btn btn-home">Home</Link>

      <section className="company-card">
        <div className="company-flex">
          {/* ...your existing content... */}
        </div>
      </section>
    </main>
  );
}
