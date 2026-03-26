import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}

export default App;
