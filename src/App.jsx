import React from 'react';
import Hero from './components/Hero';
import ProblemOpportunity from './components/ProblemOpportunity';
import Simulator from './components/Simulator';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import TimelineSteps from './components/TimelineSteps';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <ProblemOpportunity />
      <Simulator />
      <Benefits />
      <SocialProof />
      <TimelineSteps />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default App;
