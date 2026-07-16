import React from 'react';
import Typewriter from 'components/Typewriter';

const Hero = () => {
  const handleScroll = e => {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Sailesh Maharjan" />
      <div className="hero-description">
        I am an aspiring Backend Developer with hands-on experience in Spring
        Boot and PostgreSQL.<br />My passion is building solid, well-tested
        server-side applications.<br />Check out
        my{' '}
        <a href="#projects" onClick={handleScroll}>
          side-projects
        </a>{' '}
        below.
      </div>
    </div>
  );
};

export default Hero;
