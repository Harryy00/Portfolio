import './index.css';
import './App.css';

import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Skills        from './components/Skills';
import Education     from './components/Education';
import Projects      from './components/Projects';
import Internship    from './components/Internship';
import Certifications from './components/Certifications';
import Achievements  from './components/Achievements';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Internship />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
