import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './hooks/useTheme';
import './styles/animations.css';
import CustomCursor from './components/CustomCursor';
import EducationPage from './components/Education';

function App() {
  useEffect(() => {
    document.title = 'Shivam.dev | Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <div className="relative font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <CustomCursor />
        <Navbar />
        <main>
          <HeroSection />
          <EducationPage/>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;