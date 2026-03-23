import { useEffect, useRef } from 'react';

const categories = [
  {
    icon: '⌨️',
    title: 'Languages',
    skills: ['C++', 'JavaScript', 'C', 'Python'],
  },
  {
    icon: '🧰',
    title: 'Frameworks & Libraries',
    skills: ['NumPy', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Bootstrap'],
  },
  {
    icon: '🗄️',
    title: 'Tools & Platforms',
    skills: ['MySQL', 'Jupyter Notebook', 'Power BI', 'Git', 'VS Code'],
  },
  {
    icon: '🌐',
    title: 'Web Technologies',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'SQL'],
  },
  {
    icon: '🧠',
    title: 'Soft Skills',
    skills: ['Critical Thinking', 'Leadership', 'Project Management', 'Adaptability', 'Problem Solving'],
  },
  {
    icon: '📊',
    title: 'Data Science',
    skills: ['Data Analysis', 'Machine Learning', 'Data Visualization', 'Statistical Modeling'],
  },
];

export default function Skills() {
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
    <section id="skills" className="section" ref={ref} style={{ background: 'rgba(108,99,255,0.02)' }}>
      <div className="container">
        <div className="fade-up">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Technical</span> Expertise
          </h2>
          <p className="section-sub">
            A diverse skill set built through coursework, personal projects, and hands-on
            experience — spanning languages, frameworks, and tools.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="glass-card skill-category-card fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="skill-category-icon">{cat.icon}</span>
              <div className="skill-category-title">{cat.title}</div>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
