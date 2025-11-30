// src/pages/home/Home.jsx
import React from "react";
import "./Home.css";
import profile from "../../image/image2.png";
import { motion } from "framer-motion";

export default function Home(){
  return (
    <section className="home container">
      <div className="home-grid">
        <motion.div
          className="home-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="home-title">Hi, I'm <span className="home-name">Kani</span></h1>
          <p className="muted">
           I'm a passionate Full Stack Developer who loves building fast, clean and
           scalable applications using React, Spring Boot and PostgreSQL.
          I focus on writing clean code, solving real-world problems, and constantly improving my skills.
          
          </p>


          <div style={{ marginTop: 20 }}>
            <a className="btn btn-primary" href="/resume.pdf" download>Download Resume</a>
            <a className="btn btn-outline" href="/contact" style={{ marginLeft: 12 }}>Contact</a>
          </div>
        </motion.div>

        <motion.div
          className="home-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="profile-wrap">
            <img src={profile} alt="profile" className="profile-img" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
