import { useEffect, useRef } from 'react';

const education = [
  {
    icon: '🎓',
    badge: 'Since August 2023',
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    location: 'Punjab, India',
    highlight: 'CGPA: 7.57',
    ongoing: true,
  },
  {
    icon: '🏫',
    badge: 'April 2021 – March 2023',
    institution: 'Holy Ganges Public School',
    degree: 'Intermediate (Class XII)',
    location: 'Haridwar, Uttarakhand',
    highlight: 'Percentage: 88%',
  },
  {
    icon: '🏫',
    badge: 'April 2019 – March 2021',
    institution: 'Hari International Academy',
    degree: 'Matriculation (Class X)',
    location: 'Saharanpur, Uttar Pradesh',
    highlight: 'Percentage: 76%',
  },
];

export default function Education() {
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
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-tag">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-sub">
            Building a strong foundation in Computer Science with consistent academic performance
            across all levels of education.
          </p>
        </div>

        <div className="timeline">
          {education.map((edu, i) => (
            <div key={i} className="timeline-item fade-up" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="timeline-dot">{edu.icon}</div>
              <div className="glass-card timeline-content">
                <span className="timeline-badge">{edu.badge}</span>
                <div className="timeline-institution">{edu.institution}</div>
                <div className="timeline-degree">{edu.degree}</div>
                <div className="timeline-meta">
                  <span className="timeline-meta-item">📍 {edu.location}</span>
                  {edu.ongoing && (
                    <span style={{
                      fontSize: '0.72rem',
                      background: 'rgba(67,233,123,0.12)',
                      border: '1px solid rgba(67,233,123,0.25)',
                      color: 'var(--accent-3)',
                      padding: '2px 10px',
                      borderRadius: '100px',
                      fontWeight: 600,
                    }}>
                      ● Ongoing
                    </span>
                  )}
                </div>
                <span className="timeline-highlight">{edu.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
