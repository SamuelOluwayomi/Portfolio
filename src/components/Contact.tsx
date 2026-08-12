import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Envelope,
  GithubLogo,
  XLogo,
  TelegramLogo,
  PaperPlaneTilt,
  CheckCircle,
} from '@phosphor-icons/react';
import { DossierLabel } from './DossierLabel';

const contactLinks = [
  {
    id: 'email',
    icon: <Envelope size={16} weight="duotone" />,
    label: 'samuelfaith500@gmail.com',
    href: 'mailto:samuelfaith500@gmail.com',
  },
  {
    id: 'github',
    icon: <GithubLogo size={16} weight="duotone" />,
    label: 'github.com/SamuelOluwayomi',
    href: 'https://github.com/SamuelOluwayomi',
  },
  {
    id: 'twitter',
    icon: <XLogo size={16} weight="duotone" />,
    label: '@The_devsam',
    href: 'https://x.com/The_devsam',
  },
  {
    id: 'telegram',
    icon: <TelegramLogo size={16} weight="duotone" />,
    label: '@DevSam01',
    href: 'https://t.me/DevSam01',
  },
];

export function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSending(true);

    // Formspree endpoint — replace YOUR_FORM_ID with actual Formspree ID
    try {
      const res = await fetch('https://formspree.io/f/xyzgkdqo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, message }),
      });
      if (res.ok) {
        setSent(true);
        setName('');
        setMessage('');
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:samuelfaith500@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <DossierLabel>// Open Channel //</DossierLabel>
        <h2 className="section__heading">
          Get in <em>touch.</em>
        </h2>
      </motion.div>

      <div className="contact__grid">
        {/* Left: Info */}
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="contact__availability">
            Available for paying work
          </div>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'var(--charcoal-light)',
            marginBottom: '1rem',
          }}>
            Open to paid gigs, contracts, and serious collaborations. If you have
            something real, say it plainly.
          </p>

          {contactLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.id !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact__link"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
            >
              <span className="contact__link-icon">{link.icon}</span>
              {link.label}
            </motion.a>
          ))}


        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {sent ? (
            <motion.div
              className="form-success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CheckCircle size={20} weight="fill" />
              Message received. Will respond soon.
            </motion.div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  // Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-input"
                  placeholder="What do I call you?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  // Message
                </label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Say what you need. Be direct."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={sending}
                id="contact-submit"
              >
                <PaperPlaneTilt size={14} />
                {sending ? 'Transmitting...' : 'Transmit Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
