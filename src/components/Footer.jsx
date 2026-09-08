import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  const links = [
    personal.github && { icon: Github, href: personal.github, label: 'GitHub' },
    personal.linkedin && { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
    personal.email && { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
  ].filter(Boolean);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{personal.name}</p>
          <p className="footer__tagline">{personal.headline}</p>
        </div>

        {links.length > 0 && (
          <div className="footer__links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={l.label}
                className="footer__icon-link"
              >
                <l.icon size={18} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="container">
        <p className="footer__copyright">© {year} {personal.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
