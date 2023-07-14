import React, { useState, useEffect } from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import About from './components/About';

function App() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (showNewsletter) {
      setAnimationClass('animate__slideInRight'); // or 'animate__slideInLeft' for left animation
    }
  }, [showNewsletter]);

  const handleContactClick = () => {
    setShowNewsletter(true);
  };

  return (
    <div>
      <Navbar handleContactClick={handleContactClick} />
      <Hero />
      <Analytics />
      <Cards />
      <div>
        <div className={`animate__animated ${animationClass}`}>
          <Newsletter />
        </div>
        <About />

      </div>
      <Footer />
    </div>
  );
}

export default App;
