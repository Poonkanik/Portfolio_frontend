// src/components/Footer/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaBriefcase } from "react-icons/fa";
import "./Footer.css";

export default function Footer(){
  return (
    <motion.footer
      className="site-footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="container footer-grid">
        <div className="footer-section">
          <h3 className="footer-title">Kani K</h3>
          <p className="footer-text">Full Stack Developer specializing in React, Spring Boot, PostgreSQL.</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/projects" className="footer-link">Projects</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Find Me On</h4>

          <a href="https://www.linkedin.com/in/poonkani-k-541776252/" target="_blank" rel="noopener noreferrer" className="footer-social">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer" className="footer-social">
            <FaBriefcase /> Naukri
          </a>

          <a href="https://www.instagram.com/kani_3234/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-social">
            <FaInstagram /> Instagram
          </a>

          <a href="https://www.facebook.com/poonkani.poonkani.96" target="_blank" rel="noopener noreferrer" className="footer-social">
            <FaFacebook /> Facebook
          </a>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contact</h4>

          <p className="footer-contact"><FaEnvelope /> poonkanikannan@email.com</p>

          <p className="footer-contact"><FaPhone /> +91 90037 13234</p>

          <p className="footer-contact">Kovilpatti, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kani K • All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
