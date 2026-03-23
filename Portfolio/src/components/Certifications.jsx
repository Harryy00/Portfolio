import { useEffect, useRef } from 'react';

const certifications = [
  {
    icon: '🌐',
    name: 'The Bits and Bytes of Computer Networking',
    issuer: 'Coursera',
    date: 'September 2024',
    color: '#667eea',
  },
  {
    icon: '💻',
    name: 'Introduction to Hardware and Operating System by Programming',
    issuer: 'Coursera',
    date: 'September 2024',
    color: '#764ba2',
  },
];

export default function Certifications() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="section" ref={ref} style={{ background: 'rgba(108,99,255,0.02)' }}>
      <div className="container">
        <div className="fade-up">
          <span className="section-tag">Certifications</span>
          <h2 className="section-title">
            Credentials &amp; <span className="gradient-text">Courses</span>
          </h2>
          <p className="section-sub">
            Verified certifications from globally recognized platforms that validate
            my skills and commitment to continuous learning.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="glass-card cert-card fade-up"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div
                className="cert-badge"
                style={{ background: `linear-gradient(135deg, ${cert.color}, ${cert.color}99)` }}
              >
                {cert.icon}
              </div>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">🏅 {cert.issuer}</div>
                <div className="cert-date">📅 {cert.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder card for future certifications */}
        <div
          className="glass-card fade-up"
          style={{
            marginTop: 20,
            padding: '24px',
            textAlign: 'center',
            border: '1px dashed rgba(108,99,255,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            transitionDelay: '0.25s',
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>🔜</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            More certifications coming soon — continuously upskilling!
          </span>
        </div>
      </div>
    </section>
  );
}
