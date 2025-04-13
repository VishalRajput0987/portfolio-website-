
import React, { useEffect } from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

  
function App() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.body.style.backgroundColor = '#e6f7ff';
      } else {
        document.body.style.backgroundColor = '#f8f8f8';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;