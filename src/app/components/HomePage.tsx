import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { CertificatesSection } from "./CertificatesSection";
import { ContactSection } from "./ContactSection";
import { useEffect } from "react";
import { useLocation } from "react-router";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;
    if (scrollTarget) {
      // Small delay to ensure DOM is rendered
      setTimeout(() => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Clear the state so it doesn't re-scroll on re-render
      window.history.replaceState({}, "");
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}