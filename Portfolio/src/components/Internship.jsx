import { useEffect, useRef } from 'react';

export default function Internship() {
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
    <section id="internship" className="section" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-tag">Internship</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-sub">
            Hands-on experience that bridged theory with practice — sharpening my
            algorithmic thinking and practical C++ programming skills.
          </p>
        </div>

        <div className="glass-card internship-card fade-up" style={{ transitionDelay: '0.1s' }}>
          <div className="internship-header">
            <div className="internship-logo">🎓</div>
            <div>
              <div className="internship-org">Lovely Professional University</div>
              <div className="internship-role">Summer Training Intern — Data Structures & Algorithms (C++)</div>
              <div className="internship-date">📅 March 2023</div>
            </div>
          </div>

          <ul className="internship-bullets">
            <li>
              Learned fundamental data structures and algorithms including arrays, linked lists, stacks,
              queues, trees, and sorting/searching techniques.
            </li>
            <li>
              Gained hands-on experience implementing DSA concepts in C++ using object-oriented programming
              and analyzing time/space complexity.
            </li>
            <li>
              Strengthened problem-solving, logical thinking, and code optimization skills through practical
              exercises and algorithmic challenges.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
