import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import CardsProduct from '../CardsProduct';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <CardsProduct />
      <Footer />
    </>
  );
}

export default Home;
