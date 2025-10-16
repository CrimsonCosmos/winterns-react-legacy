import React from "react";
import { motion } from "framer-motion";
// If this CRA app uses React Router (most likely)
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F36B2A] via-[#8F1368] to-[#1D063B] p-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-10 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to the Internship Hub
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shadow-2xl rounded-2xl overflow-hidden bg-[#C81D25]/90 border border-[#F36B2A]/50 p-10 text-center"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">I'm a Student</h2>
          <p className="text-white/80 mb-8">
            Looking for internships and opportunities to grow your career.
          </p>
          <button className="bg-[#F36B2A] hover:bg-[#C81D25] text-white px-8 py-4 text-lg rounded-xl shadow-lg">
            Find Internships
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shadow-2xl rounded-2xl overflow-hidden bg-[#5A0B73]/90 border border-[#8F1368]/50 p-10 text-center"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">I'm a Professional</h2>
          <p className="text-white/80 mb-8">
            Looking for great interns to join your team or company.
          </p>
          <button className="bg-[#8F1368] hover:bg-[#5A0B73] text-white px-8 py-4 text-lg rounded-xl shadow-lg">
            View Candidates
          </button>
        </motion.div>
        <Link
        to="/company"
        className="corner-link brand-lower"
        aria-label="winterns company © 2025"
      >
        winterns company © 2025
      </Link>
      </div>
    </div>
  );
}