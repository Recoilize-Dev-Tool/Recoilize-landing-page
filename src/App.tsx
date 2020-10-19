import React from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import ProductDownload from './Components/ProductDownload'
import Footer from './Components/Footer';
import Features from './Components/Features';
import GettingStarted from './Components/GettingStarted';
import Team from './Components/Team';
import PlaygroundSection from './Components/PlaygroundSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <ProductDownload />
      <Features />
      <GettingStarted />
      <PlaygroundSection />
      <Team />
      <Footer />
    </div>
  );
}

export default App;