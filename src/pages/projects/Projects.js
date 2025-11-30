// src/pages/projects/Projects.jsx
import React from "react";
import "./Projects.css";
import project1 from "../../image/p1.png";
import project2 from "../../image/p2.png";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and resume.",
    image: project1,
    live: "/", // replace with your portfolio live link
    code: "https://github.com/Poonkanik/Portfolio" // replace if exists
  },
  {
    id: 2,
    title: "Employee Management",
    description: "CRUD app for managing employees, roles & departments.",
    image: project2,
    live: "https://employee-management-system-7pkz.vercel.app",
    code: "https://github.com/Poonkanik/Employee_Management_Frontend"
  },
  {
    id: 3,
    title: "CouponCart",
    description: "E-commerce coupon manager and storefront.",
    image: "/images/p3.jpg",
    live: "#",
    code: "https://github.com/Poonkanik/CouponCart" // replace if exists
  }
];

export default function Projects(){
  return (
    <section className="projects container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <motion.article
            key={p.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <div className="project-media">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <div style={{ marginTop: 10 }}>
                <a className="btn btn-primary" href={p.live} target="_blank" rel="noopener noreferrer">Live</a>
                <a className="btn btn-outline" href={p.code} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 10 }}>Code</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
