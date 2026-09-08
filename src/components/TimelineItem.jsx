import { motion } from 'framer-motion';

export default function TimelineItem({ title, org, meta, duration, details = [], index = 0 }) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="timeline-item__marker" aria-hidden="true">
        <span className="timeline-item__dot" />
        <span className="timeline-item__line" />
      </div>
      <div className="timeline-item__body glass-card">
        <div className="timeline-item__top">
          <h3 className="timeline-item__title">{title}</h3>
          {duration && <span className="timeline-item__duration">{duration}</span>}
        </div>
        {org && <p className="timeline-item__org">{org}</p>}
        {meta && <p className="timeline-item__meta">{meta}</p>}
        {details.length > 0 && (
          <ul className="timeline-item__details">
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
