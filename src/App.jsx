import React from 'react';
import './styles/App.css';
import './styles/globals.css';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Awards />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
