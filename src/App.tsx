import React from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import Features from './Components/Features';
import Team from './Components/Team';
import PlaygroundSection from './Components/PlaygroundSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Features />
      <PlaygroundSection />
      <Team />
      <Footer />
    </div>
  );
}

export default App;