import React, { useEffect, useRef } from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Corrected function to receive element
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Dreamer Infotech',
      period: '2020 - Present',
      description:
        'Lead frontend development for multiple projects, implemented responsive design systems, and improved performance by 40%.',
      icon: <Briefcase className="w-10 h-10 text-primary dark:text-primary-light" />,
    },
    {
      title: 'Frontend Developer',
      company: 'HARSCWITEC COMPUTER EDUCATION',
      period: '2023 - 2024',
      description:
        'Developed modern web applications using React, implemented UI/UX designs, and collaborated with cross-functional teams.',
      icon: <Code className="w-10 h-10 text-primary dark:text-primary-light" />,
    },
    {
      title: 'Bachelor of Computer Application',
      university: 'M.D.U Univercity',
      period: '2020 - 2023',
      description:
        'Bachelor of Computer Application in Computer Application with focus on web technologies and software engineering principles.',
      icon: <GraduationCap className="w-10 h-10 text-primary dark:text-primary-light" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary dark:text-primary-light">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={addToRefs}
            className="opacity-0 transition-all duration-1000 ease-in-out transform translate-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate frontend developer with over 5 years of experience creating
              beautiful, responsive, and user-friendly web applications. I specialize in
              React and modern JavaScript, with a strong focus on creating exceptional user
              experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My approach combines technical expertise with creative problem-solving. I believe
              in clean, maintainable code and staying current with the latest web technologies
              and best practices.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Outside of coding, I enjoy photography, hiking, and contributing to open-source
              projects. I'm always looking for new challenges and opportunities to grow as a
              developer.
            </p>
          </div>

          <div
            ref={addToRefs}
            className="space-y-8 opacity-0 transition-all duration-1000 ease-in-out transform translate-y-8"
            style={{ transitionDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Experience & Education
            </h3>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mt-1">{exp.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-primary dark:text-primary-light font-medium mb-2">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
