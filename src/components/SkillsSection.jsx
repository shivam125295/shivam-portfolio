import React, { useEffect, useRef } from 'react';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    { name: 'Redux', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 55, category: 'backend' },
    { name: 'Express', level: 70, category: 'backend' },
    { name: 'MongoDB', level: 65, category: 'backend' },
    { name: 'UI/UX Design', level: 80, category: 'design' },
    { name: 'Figma', level: 75, category: 'design' },
    { name: 'Git', level: 85, category: 'other' },
    { name: 'Firebase', level: 70, category: 'other' },
    { name: 'Webpack', level: 65, category: 'other' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            if (entry.target === skillsRef.current) {
              const bars = entry.target.querySelectorAll('.skill-bar');
              bars.forEach((bar, index) => {
                setTimeout(() => {
                  bar.style.width = `${bar.dataset.level}%`;
                }, 100 * index);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Group skills by category
  const groupedSkills = skills.reduce((groups, skill) => {
    if (!groups[skill.category]) {
      groups[skill.category] = [];
    }
    groups[skill.category].push(skill);
    return groups;
  }, {});

  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Backend',
    design: 'Design',
    other: 'Other',
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary dark:text-primary-light">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto"></div>
        </div>

        <div 
          ref={skillsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 opacity-0 transition-all duration-1000 ease-in-out"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {categoryTitles[category]}
              </h3>
              <div className="space-y-6">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-primary dark:text-primary-light">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="skill-bar h-full bg-primary dark:bg-primary-light rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: '0%' }} 
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
