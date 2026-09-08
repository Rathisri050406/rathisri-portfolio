import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';
import TimelineItem from './TimelineItem';

export default function Experience() {
  const { experience } = portfolioData;

  // No internship/employment history is present in the resume, so this
  // section — and its nav entry — is omitted entirely rather than showing
  // placeholder or fabricated experience.
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience">
      <div className="container">
        <SectionTitle eyebrow="Experience" title="Where I've worked" />
        <div className="timeline">
          {experience.map((exp, i) => (
            <TimelineItem
              key={exp.company + exp.duration}
              title={exp.position}
              org={exp.company}
              duration={exp.duration}
              details={exp.responsibilities}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
