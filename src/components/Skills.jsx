import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

const CATEGORY_LABELS = {
  languages: 'Languages',
  web: 'Web Development',
  iotHardware: 'IoT / Hardware',
  csFundamentals: 'CS Fundamentals',
  tools: 'Tools',
};

export default function Skills() {
  const { skills } = portfolioData;
  const groups = Object.entries(skills).filter(([, list]) => list && list.length > 0);

  if (groups.length === 0) return null;

  let runningIndex = 0;

  return (
    <section id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="Tools of the trade"
          subtitle="Grouped by where they show up most — from embedded C to full-stack web."
        />

        <div className="skills__groups">
          {groups.map(([key, list]) => (
            <div className="skills__group" key={key}>
              <h3 className="skills__group-title">{CATEGORY_LABELS[key] || key}</h3>
              <div className="skills__grid">
                {list.map((skill) => {
                  const idx = runningIndex++;
                  return <SkillCard key={skill} name={skill} index={idx} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
