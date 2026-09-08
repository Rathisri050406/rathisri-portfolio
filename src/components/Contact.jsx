import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Copy, Check, Send, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Could not send your message. Please try again later.');
    }
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently, the email is still visible.
    }
  }

  const contactLinks = [
    personal.email && { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
    personal.github && { icon: Github, label: 'GitHub', href: personal.github },
    personal.linkedin && { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin },
    personal.location && { icon: MapPin, label: personal.location, href: null },
  ].filter(Boolean);

  return (
    <section id="contact">
      <div className="container contact__grid">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Let's build something"
            subtitle="Open to internships, SWE roles, and collaborations across AI, web, and embedded systems."
          />

          <ul className="contact__list">
            {contactLinks.map((c) => (
              <li key={c.label} className="contact__list-item">
                <c.icon size={18} strokeWidth={1.7} className="contact__list-icon" aria-hidden="true" />
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {c.label}
                  </a>
                ) : (
                  <span>{c.label}</span>
                )}
                {c.label === personal.email && (
                  <button className="copy-email-btn" onClick={handleCopyEmail} aria-label="Copy email address">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <motion.form
          className="contact-form glass-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-form__row">
            <label className="contact-form__field">
              <span>Name</span>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
            </label>
            <label className="contact-form__field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="contact-form__field">
            <span>Subject</span>
            <input name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?" />
          </label>

          <label className="contact-form__field">
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me a bit about the opportunity or project..."
            />
          </label>

          <button type="submit" className="btn btn-primary contact-form__submit" disabled={status === 'sending'}>
            {status === 'sending' ? (
              <>
                <Loader2 size={16} className="spin" /> Sending...
              </>
            ) : (
              <>
                <Send size={16} /> Send message
              </>
            )}
          </button>

          <div aria-live="polite">
            {status === 'success' && <p className="contact-form__status contact-form__status--success">Message sent — thanks for reaching out, I'll reply soon.</p>}
            {status === 'error' && <p className="contact-form__status contact-form__status--error">{errorMsg}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
