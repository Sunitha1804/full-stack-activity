import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h2>Hello, I'm Sunitha</h2>
          <p>
            I'm a <span className="profession">Front-end Web Developer</span>.
            I love creating beautiful and functional websites.
          </p>
          <a href="https://drive.google.com/file/d/1CsCPd-F9jE2yJVwDd-5NExElL7tT7SQM/view?usp=drive_link" className="btn" target="_blank" rel="noopener noreferrer">
            View My Work
          </a>
        </div>
        <div className="hero-image">
          <img src="C:\web-activity\src\WhatsApp_Image_2024-11-07_at_10.47.04_PM-removebg-preview.png" alt="Your Photo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
