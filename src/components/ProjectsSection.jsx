import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Redux, and Node.js...',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Tailwind CSS...',
      image: 'https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg',
      tags: ['React', 'Tailwind CSS', 'Animation'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks and projects...',
      image: 'https://images.pexels.com/photos/8549542/pexels-photo-8549542.jpeg',
      tags: ['React', 'TypeScript', 'Redux'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data...',
      image: 'https://images.pexels.com/photos/3888585/pexels-photo-3888585.jpeg',
      tags: ['JavaScript', 'API Integration', 'CSS'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media platforms...',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      tags: ['React', 'Chart.js', 'API Integration'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A content management system for blogs...',
      image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg',
      tags: ['Next.js', 'MongoDB', 'Node.js'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project =>
          project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
        )
      );
    }
  }, [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-800">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary dark:text-primary-light">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary-light mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {allTags.map((tag, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === tag.toLowerCase()
                    ? 'bg-primary dark:bg-primary-light text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setFilter(tag.toLowerCase())}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transition-all duration-1000 ease-in-out"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-4">
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary dark:bg-primary-light text-white dark:text-gray-900 p-2 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
                      aria-label="View Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 p-2 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100"
                      aria-label="View Source Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
