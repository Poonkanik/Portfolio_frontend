import React from "react";
import "./Projects.css";
import project1 from "../../image/p1.png";
import project2 from "../../image/p2.png";
import { motion } from "framer-motion";

const projects = [
 
  {
    id: 1,
    title: "Employee Management",
    description: "CRUD app for managing employees, roles & departments.",
    image: project1,
    live: "https://employee-management-system-vkke.vercel.app/",
    code: "https://github.com/Poonkanik/Employee_Management_Frontend"
  },
  {
    id: 2,
    title: "Cloud Image Manager",
    description: "A cloud-based image storage and management platform.",
    image:  project2,
    live: "https://cloud-image-manager-frontend.vercel.app/",
    code: "https://github.com/Poonkanik/Cloud-Image-Manager-Frontend" 
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
