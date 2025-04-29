import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    {name:'Education', href: '#education'},
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className=" text-xl font-bold tracking-tighter transition-all duration-300 bg-gradient-to-r from-primary to-accent dark:from-primary-light dark:to-accent-light bg-clip-text text-transparent"
          >
            Shivam.Dev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300 py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary dark:after:bg-primary-light after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;