import React from 'react';
// component
import Button from '../Button/Button';

// style
import './HeroSection.css';
import '../App.css';

export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/public/videos/video-2.mp4" autoPlay loop muted />
      <h1> ADVENTURE AWAITS </h1>
      <p>What are you waiting for ?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i class="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}
