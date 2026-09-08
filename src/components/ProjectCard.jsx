import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, technologies, category, github, demo } = project;

  return (
    <motion.article
      className="project-card glass-card"
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="project-card__top">
        <span className="project-card__category">{category}</span>
        <ArrowUpRight className="project-card__arrow" size={20} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>

      <div className="project-card__tags">
        {technologies.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      {(github || demo) && (
        <div className="project-card__links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-ghost btn" aria-label={`${title} on GitHub`}>
              <Github size={16} /> Code
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="btn-ghost btn">
              Live demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
