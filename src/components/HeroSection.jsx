import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 opacity-0 transition-opacity duration-1000 ease-in-out">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <h2
              className="text-lg sm:text-xl text-primary dark:text-primary-light font-medium animate-slide-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Hello, I'm
            </h2>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white animate-slide-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <span className="block">Shivam Bansal</span>
              <span className="block mt-2 text-primary dark:text-primary-light">
                Front-end Developer
              </span>
            </h1>
            <p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-lg animate-slide-up opacity-0"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              I create elegant and high-performance web applications with modern technologies. Focused on crafting exceptional user experiences.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-slide-up opacity-0"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary text-white dark:text-gray-900 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-light rounded-lg transition-all duration-300"
              >
                View Projects
              </a>
            </div>

            <div
              className="flex items-center space-x-4 animate-slide-up opacity-0"
              style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div
            className="md:w-1/2 animate-slide-up opacity-0"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            <div className="aspect-square relative overflow-hidden rounded-full border-8 border-white dark:border-gray-800 shadow-2xl transform hover:rotate-3 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown size={24} className="text-primary dark:text-primary-light" />
        </a>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 dark:bg-primary-light/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 dark:bg-accent-light/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
