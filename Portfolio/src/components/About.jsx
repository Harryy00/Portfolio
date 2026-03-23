import { useEffect, useRef } from 'react';

export default function About() {
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
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <div>
            <span className="section-tag fade-up">About Me</span>
            <h2 className="section-title fade-up" style={{ transitionDelay: '0.1s' }}>
              Passionate about <span className="gradient-text">Technology</span> &amp; Innovation
            </h2>
            <p className="section-sub fade-up" style={{ transitionDelay: '0.15s' }}>
              I'm a Computer Science &amp; Engineering undergraduate at Lovely Professional
              University, Punjab. I love writing clean, efficient code and building solutions
              that make a real difference. From data structures in C++ to building web
              applications with HTML/CSS/JS, I'm always eager to learn and grow.
            </p>

            <div className="about-info-items">
              {[
                { label: 'Name', value: 'Harry Yadav' },
                { label: 'Email', value: <a href="mailto:harryadav0055@gmail.com">harryadav0055@gmail.com</a> },
                { label: 'Phone', value: '+91-7819026341' },
                { label: 'Location', value: 'Punjab, India' },
                { label: 'LinkedIn', value: <a href="https://linkedin.com/in/harry-y23/" target="_blank" rel="noreferrer">harry-y23</a> },
                { label: 'GitHub', value: <a href="https://github.com/HarryYadav-oo" target="_blank" rel="noreferrer">HarryYadav-oo</a> },
                { label: 'CGPA', value: '7.57 / 10' },
                { label: 'Degree', value: 'B.Tech CSE' },
              ].map((item, i) => (
                <div key={i} className="about-info-item fade-up" style={{ transitionDelay: `${0.2 + i * 0.05}s` }}>
                  <div className="about-info-label">{item.label}</div>
                  <div className="about-info-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="about-right">
            {[
              {
                title: '🎯 My Goal',
                text: 'To leverage my programming skills and passion for technology to build innovative, user-centric solutions that drive efficiency and deliver real-world impact.',
              },
              {
                title: '💡 What I Do',
                text: 'I develop software ranging from data-structure-powered C++ systems to responsive web applications. I enjoy working on both the logic and the interface layers of a product.',
              },
              {
                title: '📚 Currently Learning',
                text: 'Deep diving into Data Science with Python, exploring machine learning models with Scikit-Learn, and strengthening my system design and algorithmic thinking.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="glass-card about-card fade-up"
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="about-card-title">{card.title}</div>
                <p className="about-card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
