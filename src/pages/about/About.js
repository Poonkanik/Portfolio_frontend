import React from "react";
import "./About.css";
import { motion } from "framer-motion";

export default function About(){
  return (
    <section className="about container">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>

      <div className="about-grid">
        
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3>Who I am</h3>
          I am Kani, a dedicated Full Stack Developer who enjoys building modern,
responsive, and user-friendly applications. I specialize in React on the
frontend and Spring Boot + PostgreSQL in the backend.  
I’m passionate about clean architecture, API development, and building
practical solutions that help users. I believe in continuous improvement and love learning new tools and technologies.

        </motion.div>

        <motion.div 
          className="about-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3>Details</h3>
          <ul className="muted">
  <li><b>Degree:</b> B.E Computer Science Engineering</li>
  <li><b>Skills:</b> React, Spring Boot, PostgreSQL, REST APIs</li>
  <li><b>Focus:</b> Full Stack Development</li>
</ul>
        </motion.div>

      </div>
    </section>
  );
}
