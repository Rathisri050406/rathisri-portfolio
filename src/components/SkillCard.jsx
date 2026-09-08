import { motion } from 'framer-motion';

export default function SkillCard({ name, index = 0 }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4), ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
    >
      {name}
    </motion.div>
  );
}
