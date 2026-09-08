import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';
import TimelineItem from './TimelineItem';

export default function Education() {
  const { education } = portfolioData;
  if (!education || education.length === 0) return null;

  return (
    <section id="education">
      <div className="container">
        <SectionTitle eyebrow="Education" title="Academic background" />
        <div className="timeline">
          {education.map((edu, i) => (
            <TimelineItem
              key={edu.degree}
              title={edu.degree}
              org={`${edu.institution}${edu.location ? ` · ${edu.location}` : ''}`}
              meta={[
                edu.specialization && `Specialization: ${edu.specialization}`,
                edu.gpa && `GPA: ${edu.gpa}`,
              ]
                .filter(Boolean)
                .join('  ·  ')}
              duration={edu.duration}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
