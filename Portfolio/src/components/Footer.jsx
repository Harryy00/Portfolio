export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          Designed &amp; Built with <span>❤️</span> by <strong style={{ color: '#fff' }}>Harry Yadav</strong> © {year}
        </p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/harry-y23/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/HarryYadav-oo" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:harryyaau@gmail.com">Email</a>
          <a href="#home" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
