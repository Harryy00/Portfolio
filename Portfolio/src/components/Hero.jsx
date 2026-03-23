import { useState, useEffect } from 'react';

const titles = [
  'Full-Stack Developer',
  'C++ Programmer',
  'Data Science Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = titles[titleIdx];
    let timeout;

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setTitleIdx(i => (i + 1) % titles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIdx]);

  return (
    <section id="home" className="hero-section">
      {/* Background blobs */}
      <div className="blob hero-blob-1" />
      <div className="blob hero-blob-2" />

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-content">
          {/* Left – text */}
          <div>
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">Harry</span>
            </h1>

            <div className="hero-title">
              <span className="hero-title-typing">{displayed}</span>
            </div>

            <p className="hero-desc">
              Computer Science &amp; Engineering student at Lovely Professional
              University with a CGPA of <strong style={{ color: '#fff' }}>7.57</strong>.
              Passionate about building impactful software and solving
              real-world problems through code.
            </p>

            <div className="hero-actions">
              <a
                id="hero-contact-btn"
                className="btn-primary"
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                💬 Get in Touch
              </a>
              <a
                id="hero-projects-btn"
                className="btn-secondary"
                href="#projects"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                🚀 View Projects
              </a>
            </div>

            <div className="hero-socials">
              <a
                id="hero-linkedin"
                className="hero-social-link"
                href="https://linkedin.com/in/harry-y23/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                in
              </a>
              <a
                id="hero-github"
                className="hero-social-link"
                href="https://github.com/HarryYadav-oo"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                ⌥
              </a>
              <a
                id="hero-email"
                className="hero-social-link"
                href="mailto:harryadav0055@gmail.com"
                title="Email"
              >
                ✉
              </a>
            </div>
          </div>

          {/* Right – visual */}
          <div className="hero-visual">
            <div>
              <div className="hero-avatar-wrap">
                <div className="hero-avatar-ring" />
                <div className="hero-avatar-ring-2" />
                <img
                  src="/harry.jpeg"
                  alt="Harry Yadav"
                  className="hero-avatar-img"
                  style={{ objectPosition: 'top center' }}
                />
              </div>

              {/* Stat badges */}
              <div className="hero-stat-badges">
                <div className="stat-badge">
                  <div className="stat-badge-num">7.57</div>
                  <div className="stat-badge-label">CGPA</div>
                </div>
                <div className="stat-badge">
                  <div className="stat-badge-num">2+</div>
                  <div className="stat-badge-label">Projects</div>
                </div>
                <div className="stat-badge">
                  <div className="stat-badge-num">2</div>
                  <div className="stat-badge-label">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-dot" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
