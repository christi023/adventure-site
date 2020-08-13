import React from 'react';
// component
import HeroSection from '../HeroSection/HeroSection';
import Cards from '../Card/Card';
// style
import '../../App.css';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}
