import { useState, useRef, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────
//  IMPORTANT: Replace the URL below with YOUR Formspree endpoint
//  Steps:
//   1. Go to https://formspree.io and sign up (free)
//   2. Create a New Form → set your email (harryyaau@gmail.com)
//   3. Copy the endpoint, e.g. https://formspree.io/f/xabcdefg
//   4. Paste it in FORMSPREE_URL below
// ─────────────────────────────────────────────────────────────
const FORMSPREE_URL = 'https://formspree.io/f/xvzwegno';

const contactItems = [
  { icon: '✉️', label: 'Email',    value: 'harryadav0055@gmail.com',          href: 'mailto:harryadav0055@gmail.com' },
  { icon: '📱', label: 'Phone',    value: '+91-7819026341',                href: 'tel:+917819026341' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/harry-y23/',    href: 'https://linkedin.com/in/harry-y23/' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/HarryYadav-oo',     href: 'https://github.com/HarryYadav-oo' },
];

const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(STATUS.IDLE);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(STATUS.SENDING);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus(STATUS.SUCCESS);
        setForm({ name: '', email: '', subject: '', message: '' });
        // Auto-reset after 6 s so they can send again
        setTimeout(() => setStatus(STATUS.IDLE), 6000);
      } else {
        const data = await res.json();
        console.error('Formspree error:', data);
        setStatus(STATUS.ERROR);
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus(STATUS.ERROR);
    }
  };

  const isSending = status === STATUS.SENDING;

  return (
    <section id="contact" className="section" ref={ref} style={{ background: 'rgba(108,99,255,0.02)' }}>
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Have a project in mind, a job opportunity, or just want to say hello?
            I'd love to hear from you — I'll get back within 24 hours!
          </p>
        </div>

        <div className="contact-wrapper">
          {/* ─── Left: contact info ─── */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.2rem',
              fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)', marginTop: 32,
            }}>
              Get in touch
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 4 }}>
              I'm currently open to new opportunities and collaborations.
              Whether remote or on-site in India, let's build something great together.
            </p>

            <div className="contact-info-items">
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact-info-item fade-up"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ─── Right: Formspree form ─── */}
          <div className="glass-card contact-form fade-up" style={{ transitionDelay: '0.15s' }}>

            {/* SUCCESS STATE */}
            {status === STATUS.SUCCESS && (
              <div className="form-success">
                <div style={{ fontSize: '3.5rem', marginBottom: 14 }}>🎉</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                  Message Delivered!
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  Thanks for reaching out! I'll reply to{' '}
                  <strong style={{ color: 'var(--accent)' }}>{form.email || 'your email'}</strong>{' '}
                  within 24 hours.
                </p>
                <button
                  className="btn-secondary"
                  style={{ marginTop: 20, fontSize: '0.82rem' }}
                  onClick={() => setStatus(STATUS.IDLE)}
                >
                  Send another message
                </button>
              </div>
            )}

            {/* ERROR STATE */}
            {status === STATUS.ERROR && (
              <div style={{ padding: '12px 16px', marginBottom: 16, borderRadius: 10, background: 'rgba(255,101,132,0.1)', border: '1px solid rgba(255,101,132,0.3)', color: '#ff8fa3', fontSize: '0.875rem' }}>
                ⚠️ Something went wrong. Please try again or email me directly at{' '}
                <a href="mailto:harryadav0055@gmail.com" style={{ color: 'var(--accent-2)' }}>harryyaau@gmail.com</a>.
              </div>
            )}

            {/* FORM (hide only on success) */}
            {status !== STATUS.SUCCESS && (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-name">Your Name</label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      placeholder="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-email">Email Address</label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c-subject">Subject</label>
                  <input
                    id="c-subject"
                    name="subject"
                    type="text"
                    placeholder="Job Opportunity / Collaboration / Hello!"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="btn-primary"
                  disabled={isSending}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    borderRadius: 12,
                    opacity: isSending ? 0.75 : 1,
                    cursor: isSending ? 'not-allowed' : 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {isSending ? (
                    <>
                      <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⏳</span>
                      Sending…
                    </>
                  ) : (
                    <> 🚀 Send Message</>
                  )}
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 14 }}>
                  🔒 Powered by Formspree · Your data is kept private
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
