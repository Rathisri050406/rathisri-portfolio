import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function CertificationCard({ name, issuer, index = 0 }) {
  return (
    <motion.div
      className="cert-card glass-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.4), ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="cert-card__icon" aria-hidden="true">
        <Award size={20} strokeWidth={1.7} />
      </div>
      <h3 className="cert-card__name">{name}</h3>
      {issuer && <p className="cert-card__issuer">{issuer}</p>}
    </motion.div>
  );
}
