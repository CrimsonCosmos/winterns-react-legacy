import React from "react";
// If you have a founder image, place it at src/images/dylan.jpg and uncomment:
// import dylan from "../images/dylan.jpg";

export default function CompanyPage() {
  return (
    <main className="gradient-bg">
      <div className="container section">
        <div className="card" style={{textAlign:"center"}}>
          {/* {dylan && <img src={dylan} alt="Dylan Gehl" style={{width:120, height:120, borderRadius:"50%", objectFit:"cover", marginBottom:16}}/>} */}
          <h2 style={{marginTop:0}}>About winterns</h2>
          <p>
            Hi, I’m <strong>Dylan Gehl</strong>. I started this company at the University of Illinois.
            The purpose of this company is to more efficiently reward talented individuals.
            If you were expecting a career page, we hire exclusively using our own technology.
            I am excited to hear about anything else involving winterns.
          </p>
          <p>
            Contact me:{" "}
            <a href="mailto:dylan@winterns.com" className="btn btn-primary">dylan@winterns.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
