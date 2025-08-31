import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
