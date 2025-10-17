import { FloatingShapes } from './components/FloatingShapes';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden">
        <FloatingShapes />
        
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          
          <footer className="py-8 text-center text-gray-400 border-t border-violet-500/20">
            <p>© 2025 Rajeev Dixit. Built with Love.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
