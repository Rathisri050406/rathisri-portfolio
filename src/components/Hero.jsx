import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SocialLink from './SocialLink';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const badges = ['Python', 'React', 'Django', 'ESP32', 'AI/ML'];

export default function Hero() {
  const { personal } = portfolioData;
  const socials = [
    personal.github && { href: personal.github, label: 'GitHub', icon: Github },
    personal.linkedin && { href: personal.linkedin, label: 'LinkedIn', icon: Linkedin },
    personal.email && { href: `mailto:${personal.email}`, label: 'Email', icon: Mail },
  ].filter(Boolean);

  return (
    <section id="hero" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.span className="eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            Available for internships &amp; SWE roles
          </motion.span>

          <motion.h1 className="hero__title" variants={fadeUp} initial="hidden" animate="show" custom={1}>
            Hi, I'm {personal.name.split(' ')[0]}
          </motion.h1>

          <motion.p className="hero__headline" variants={fadeUp} initial="hidden" animate="show" custom={2}>
            {personal.headline}
          </motion.p>

          <motion.p className="hero__summary" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            {personal.summary}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp} initial="hidden" animate="show" custom={4}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore my work <ArrowRight size={16} />
            </a>
            <a href="/download-resume" className="btn btn-secondary" download>
              <Download size={16} /> Download resume
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={fadeUp} initial="hidden" animate="show" custom={5}>
            {socials.map((s) => (
              <SocialLink key={s.label} {...s} />
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__panel"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__orb hero__orb--blue" aria-hidden="true" />
          <div className="hero__orb hero__orb--violet" aria-hidden="true" />

          <div className="terminal glass-card">
            <div className="terminal__bar">
              <span className="terminal__dot" style={{ background: '#f87171' }} />
              <span className="terminal__dot" style={{ background: '#fbbf24' }} />
              <span className="terminal__dot" style={{ background: '#34d399' }} />
              <span className="terminal__title">whoami.py</span>
            </div>
            <pre className="terminal__body">
<code>{`> engineer.load("${personal.name}")

role      = "AI & ML Engineer"
gpa       = 9.52
stack     = ["Python", "React", "Django"]
hardware  = ["ESP32", "Arduino", "LiDAR"]
status    = "building"`}</code>
            </pre>
          </div>

          <div className="hero__badges" aria-hidden="true">
            {badges.map((b, i) => (
              <motion.span
                key={b}
                className="hero__badge"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                style={{ '--float-delay': `${i * 0.6}s` }}
              >
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
