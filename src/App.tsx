import { AnimatePresence } from 'framer-motion';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

export default function App() {
  return (
    <div className="dark min-h-screen relative overflow-hidden">
      {/* <AnimatedBackground/> */}
      <AnimatePresence>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </AnimatePresence>
    </div>
  );
}