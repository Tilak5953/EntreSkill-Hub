// HomePage.jsx
// This is the main landing page of EntreSkill Hub
// Composed of multiple sections arranged in logical order
// -- Tilak Kumar

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AboutSection from '../components/home/AboutSection';
import CTASection from '../components/home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Top navigation bar */}
      <Navbar />

      <main>
        {/* Hero - first thing user sees */}
        <HeroSection />

        {/* Features - what the platform offers */}
        <FeaturesSection />

        {/* How it works - simple 4-step process */}
        <HowItWorksSection />

        {/* Stats - numbers to build trust */}
        <StatsSection />

        {/* Testimonials - real success stories */}
        <TestimonialsSection />

        {/* About - platform background */}
        <AboutSection />

        {/* Final CTA - push user to register */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
