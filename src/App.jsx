import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import IntegratedServices from './components/IntegratedServices';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Hero />
      <Features />
      <IntegratedServices />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
