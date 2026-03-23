import { useEffect, useRef } from 'react';

const achievements = [
  {
    medal: '🥈',
    title: 'Runner-up · National Fest',
    desc: 'Silver medal in the Universum Cricket Tournament 2025 in Ambala, Haryana, representing Team LPU.',
    date: 'October 2025',
    tag: 'Sports',
    tagColor: 'rgba(255, 101, 132, 0.12)',
    tagBorder: 'rgba(255, 101, 132, 0.25)',
    tagText: '#ff6584',
  },
  {
    medal: '🏆',
    title: 'Leadership Award',
    desc: 'Demonstrated exceptional leadership and project management skills through multiple team initiatives at LPU.',
    date: '2024',
    tag: 'Leadership',
    tagColor: 'rgba(108, 99, 255, 0.12)',
    tagBorder: 'rgba(108, 99, 255, 0.25)',
    tagText: 'var(--accent)',
  },
  {
    medal: '⭐',
    title: 'Academic Excellence',
    desc: 'Maintained a consistent CGPA of 7.57 at LPU while actively participating in extracurriculars and projects.',
    date: 'Ongoing',
    tag: 'Academic',
    tagColor: 'rgba(67, 233, 123, 0.12)',
    tagBorder: 'rgba(67, 233, 123, 0.25)',
    tagText: 'var(--accent-3)',
  },
];

export default function Achievements() {
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
    <section id="achievements" className="section" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">
            Milestones &amp; <span className="gradient-text">Accomplishments</span>
          </h2>
          <p className="section-sub">
            Beyond the classroom — recognition earned through dedication, teamwork, and
            consistent high performance inside and outside academics.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="glass-card achievement-card fade-up"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="achievement-medal" style={{ animationDelay: `${i * 0.3}s` }}>
                {a.medal}
              </span>

              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '3px 12px',
                  borderRadius: 100,
                  background: a.tagColor,
                  border: `1px solid ${a.tagBorder}`,
                  color: a.tagText,
                  marginBottom: 10,
                  display: 'inline-block',
                }}
              >
                {a.tag}
              </span>

              <div className="achievement-title">{a.title}</div>
              <p className="achievement-desc">{a.desc}</p>
              <div className="achievement-date">📅 {a.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
