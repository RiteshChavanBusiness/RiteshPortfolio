import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Clients from './components/Clients';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Clients />
        <Testimonials />
        <Contact />
        <Marquee />
      </main>
      <Footer />
    </div>
  );
}