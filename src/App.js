// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage.jsx";
import CompanyPage from "./pages/CompanyPage.jsx";
import StudentPage from "./pages/StudentPage.jsx";
import "./App.css";
import CandidateList from "./pages/CandidateList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/candidates" element={<CandidateList />} />
        {/* Optional: add a basic 404 that falls back to Home */}
        <Route path="*" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
}
