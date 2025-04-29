import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter size={20} />,
      href: 'https://twitter.com',
      label: 'Twitter',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:contact@example.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter text-primary-light dark:text-primary">
              Portfolio
            </h3>
            <p className="text-gray-400 max-w-sm">
              Creating elegant and high-performance web applications with modern technologies.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-light dark:hover:text-primary transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-light dark:hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <p className="text-gray-400">
             N.I.T FARIDABAD (121005) , HR<br /><br />
              sb5757369@gmail.com<br /> <br />
              +91 (9971298761)
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Shivam. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-primary-light dark:hover:text-primary transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <span className="mx-2 text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-light dark:hover:text-primary transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
