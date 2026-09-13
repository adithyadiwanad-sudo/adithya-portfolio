import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Background from './components/Background';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>
    </>
  );
}
