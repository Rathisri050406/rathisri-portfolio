import { motion } from 'framer-motion';
import { Trophy, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

export default function Achievements() {
  const { achievements, publications } = portfolioData;
  const hasAchievements = achievements && achievements.length > 0;
  const hasPublications = publications && publications.length > 0;

  if (!hasAchievements && !hasPublications) return null;

  return (
    <section id="achievements">
      <div className="container">
        <SectionTitle eyebrow="Achievements" title="Recognition & research" />

        <div className="achievements__grid">
          {hasAchievements &&
            achievements.map((a, i) => (
              <motion.div
                className="achievement-card glass-card"
                key={a.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Trophy size={22} strokeWidth={1.7} className="achievement-card__icon" aria-hidden="true" />
                <div>
                  <h3 className="achievement-card__title">{a.title}</h3>
                  <p className="achievement-card__detail">{a.detail}</p>
                </div>
              </motion.div>
            ))}

          {hasPublications &&
            publications.map((p, i) => (
              <motion.div
                className="achievement-card glass-card"
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (achievements?.length || 0) * 0.08 + i * 0.08 }}
              >
                <BookOpen size={22} strokeWidth={1.7} className="achievement-card__icon" aria-hidden="true" />
                <div>
                  <h3 className="achievement-card__title">{p.title}</h3>
                  <p className="achievement-card__detail">{p.detail}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
