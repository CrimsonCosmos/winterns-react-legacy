import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import CompanyPage from "./pages/CompanyPage";
import StudentPage from "./pages/StudentPage";
import CandidateList from "./pages/CandidateList";
import "./App.css"; // ensure styles load

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="/admin/candidates" element={<CandidateList />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/applications" element={<CandidateList />} />
    </Routes>
  );
}
