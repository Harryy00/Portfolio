import { useEffect, useRef } from 'react';

const projects = [
  {
    icon: '📚',
    name: 'LMS – Library Management System',
    date: 'July 2025',
    desc: 'Built a Library Management System to automate book, member, and transaction handling, aiming to eliminate manual record-keeping and improve accuracy in day-to-day library operations.',
    tech: ['C++', 'Data Structures', 'OOP', 'File Handling', 'SQL'],
    outcome: '⚡ Achieved faster search, update, and issue/return workflows — improving data access speed and reducing manual tracking errors.',
    github: 'https://github.com/HarryYadav-oo',
  },
  {
    icon: '🍽️',
    name: 'Restaurant Seat Reservation System',
    date: 'March 2024',
    desc: 'Built a system to automate table bookings and prevent double reservations for smoother restaurant operations. Developed a responsive interface and applied OOP with a SQL database.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'OOP', 'SQL'],
    outcome: '✅ Enabled real-time seat tracking, reduced booking conflicts, and improved overall customer experience.',
    github: 'https://github.com/HarryYadav-oo',
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section" ref={ref} style={{ background: 'rgba(108,99,255,0.02)' }}>
      <div className="container">
        <div className="fade-up">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-sub">
            A selection of projects where I've applied my engineering knowledge
            to solve practical problems — from systems programming to web applications.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className="glass-card project-card fade-up"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="project-header">
                <div className="project-icon">{p.icon}</div>
                <span className="project-date">{p.date}</span>
              </div>

              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>

              <div className="project-outcome">{p.outcome}</div>

              <div className="project-tech-stack">
                {p.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 20,
                  fontSize: '0.82rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '14px'}
                onMouseLeave={e => e.currentTarget.style.gap = '8px'}
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
