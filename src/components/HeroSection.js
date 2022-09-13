import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>SEMENTES PEDAGÓGICAS</h1>
      <p>Semeamos ideias e te ajudamos a desabrochar novas possibilidades</p>
      <div className='hero-btns'>
      <Link
        class='social-icon-link instagram'
        to='https://www.instagram.com/sementespedagogicas/'
        target='_blank'
        aria-label='Instagram'
      >
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          COMPRE AGORA
        </Button>
      </Link>
      </div>
    </div>
  );
}

export default HeroSection;
