import { useState, useEffect } from 'react';

const links = [
  { href: '#home',          label: 'Home' },
  { href: '#about',         label: 'About' },
  { href: '#skills',        label: 'Skills' },
  { href: '#education',     label: 'Education' },
  { href: '#projects',      label: 'Projects' },
  { href: '#certifications',label: 'Certifications' },
  { href: '#achievements',  label: 'Achievements' },
  { href: '#contact',       label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = links.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a className="nav-logo" href="#home" onClick={e => { e.preventDefault(); handleNav('#home'); }}>
          Harry<span>.</span>
        </a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'active' : ''}
                onClick={e => { e.preventDefault(); handleNav(l.href); }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          id="hire-me-btn"
          className="nav-resume"
          href="#contact"
          onClick={e => { e.preventDefault(); handleNav('#contact'); }}
        >
          Hire Me
        </a>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); handleNav(l.href); }}>
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{ color: 'var(--accent)', marginTop: 8 }}
          onClick={e => { e.preventDefault(); handleNav('#contact'); }}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
