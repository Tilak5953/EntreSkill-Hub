// HomePage.jsx
// Main landing page of EntreSkill Hub
// Structured to look like a genuine PS-II internship project
// -- Tilak Kumar

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import StatsSection from '../components/home/StatsSection';
import ProjectModulesSection from '../components/home/ProjectModulesSection';
import AboutSection from '../components/home/AboutSection';
import ProjectProgressSection from '../components/home/ProjectProgressSection';
import CTASection from '../components/home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero banner */}
        <HeroSection />

        {/* Platform features overview */}
        <FeaturesSection />

        {/* How the platform works - 4 steps */}
        <HowItWorksSection />

        {/* Project scope metrics */}
        <StatsSection />

        {/* 6 functional modules of the project */}
        <ProjectModulesSection />

        {/* About the project + PS-II internship details */}
        <AboutSection />

        {/* Development timeline and progress */}
        <ProjectProgressSection />

        {/* Call to action */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
