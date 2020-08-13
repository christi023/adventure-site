import React from 'react';
// component
import HeroSection from '../HeroSection/HeroSection';
import Cards from '../Card/Card';
import Footer from '../Footer/Footer';

// style
import '../../App.css';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
