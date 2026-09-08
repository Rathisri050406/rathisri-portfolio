import { motion } from 'framer-motion';
import { GraduationCap, Target, Sparkles, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

export default function About() {
  const { personal, education, softSkills } = portfolioData;
  const primaryEdu = education[0];

  const cards = [
    primaryEdu && {
      icon: GraduationCap,
      label: 'Education',
      value: `${primaryEdu.institution} · GPA ${primaryEdu.gpa}`,
    },
    {
      icon: Target,
      label: 'Focus',
      value: 'AI & ML, Full-Stack Web, IoT/Embedded Systems',
    },
    softSkills?.length && {
      icon: Sparkles,
      label: 'Interests',
      value: softSkills.slice(0, 3).join(', '),
    },
    personal.location && {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
    },
  ].filter(Boolean);

  return (
    <section id="about">
      <div className="container about__grid">
        <div>
          <SectionTitle eyebrow="About" title="Building at the edge of software and hardware" />
          <p className="about__paragraph">{personal.summary}</p>
          <p className="about__paragraph">
            Currently pursuing a B.Tech in Computer Science Engineering with an AI &amp; ML specialization at{' '}
            {primaryEdu?.institution}, {personal.name.split(' ')[0]} works across the stack — from Django REST
            APIs and React interfaces to ESP32-based vision systems and sensor networks — with a research paper
            published under an ISBN certification.
          </p>
        </div>

        <motion.div
          className="about__cards"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {cards.map((c) => (
            <div className="about-card glass-card" key={c.label}>
              <c.icon size={20} strokeWidth={1.7} className="about-card__icon" aria-hidden="true" />
              <div>
                <p className="about-card__label">{c.label}</p>
                <p className="about-card__value">{c.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
