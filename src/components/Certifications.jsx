import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';
import CertificationCard from './CertificationCard';

export default function Certifications() {
  const { certifications } = portfolioData;
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications">
      <div className="container">
        <SectionTitle eyebrow="Certifications" title="Courses & credentials" />
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.name} name={cert.name} issuer={cert.issuer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
