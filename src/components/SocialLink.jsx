export default function SocialLink({ href, label, icon: Icon, mono = false }) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="social-link"
      aria-label={label}
    >
      <Icon size={18} strokeWidth={1.8} />
      <span className={mono ? 'social-link__label--mono' : ''}>{label}</span>
    </a>
  );
}
