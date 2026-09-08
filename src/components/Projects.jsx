import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { projects } = portfolioData;
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [projects]);
  const [active, setActive] = useState('All');

  if (!projects || projects.length === 0) return null;

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects">
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          subtitle="A mix of applied AI, embedded systems, and full-stack builds."
        />

        {categories.length > 2 && (
          <div className="projects__filters" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`filter-pill ${active === cat ? 'filter-pill--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
