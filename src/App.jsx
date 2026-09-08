import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SignalTrace from './components/SignalTrace';

export default function App() {
  const hasSkills = Object.values(portfolioData.skills).some((list) => list?.length);
  const hasExperience = portfolioData.experience?.length > 0;
  const hasCertifications = portfolioData.certifications?.length > 0;
  const hasAchievements = portfolioData.achievements?.length > 0 || portfolioData.publications?.length > 0;

  // Nav links only include sections that actually contain resume data.
  const sections = [
    { id: 'about', label: 'About' },
    hasSkills && { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    hasExperience && { id: 'experience', label: 'Experience' },
    hasCertifications && { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ].filter(Boolean);

  return (
    <div className="app-shell">
      <Navbar sections={sections} />

      <main>
        <Hero />
        <SignalTrace />
        <About />
        {hasSkills && <Skills />}
        <SignalTrace flip />
        <Education />
        <Projects />
        {hasExperience && <Experience />}
        {hasCertifications && <Certifications />}
        {hasAchievements && <Achievements />}
        <SignalTrace />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
