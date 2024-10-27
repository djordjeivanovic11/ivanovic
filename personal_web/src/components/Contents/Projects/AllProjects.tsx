import React from 'react';
import ProjectFolder from './ProjectFolder';
import { blackOpsOne } from '@/app/fonts/fonts';


const AllProjects: React.FC = () => {
  const projects = [
    {
      name: 'Personal Website',
      link: '/projects/personal-website',
      description: 'A portfolio website built using Next.js and Tailwind CSS.',
      tags: ['Next.js', 'Tailwind CSS', 'React'],
      githubLink: 'https://github.com/yourusername/personal-website',
      detailedDescription:
        'This personal website showcases my portfolio, skills, and projects. It features a responsive design, interactive UI components, and optimized performance for faster loading times.',
    },
    {
      name: 'E-commerce Platform',
      link: '/projects/e-commerce',
      description: 'An e-commerce website with product listings, cart, and checkout.',
      tags: ['React', 'Redux', 'Node.js'],
      githubLink: 'https://github.com/yourusername/e-commerce',
      detailedDescription:
        'A full-stack e-commerce platform that supports product management, shopping cart functionality, user authentication, and secure payments. Built with MERN stack (MongoDB, Express, React, Node.js).',
    },
    {
      name: 'Machine Learning Model',
      link: '/projects/ml-model',
      description: 'A predictive model built with Python and TensorFlow.',
      tags: ['Python', 'TensorFlow', 'AI'],
      githubLink: 'https://github.com/yourusername/ml-model',
      detailedDescription:
        'A machine learning model that predicts customer churn based on historical data. The model uses deep learning algorithms and is trained on a large dataset with accuracy of over 90%.',
    },
    {
      name: 'Mobile App',
      link: '/projects/mobile-app',
      description: 'A cross-platform mobile app built with React Native.',
      tags: ['React Native', 'Expo', 'Mobile Development'],
      githubLink: 'https://github.com/yourusername/mobile-app',
      detailedDescription:
        'A mobile application that offers users real-time notifications, a personalized dashboard, and seamless user experience across Android and iOS devices. Built with React Native and Expo.',
    },
    {
      name: 'Data Visualization Tool',
      link: '/projects/data-viz',
      description: 'An interactive tool for visualizing complex datasets.',
      tags: ['D3.js', 'JavaScript', 'Data Analysis'],
      githubLink: 'https://github.com/yourusername/data-viz',
      detailedDescription:
        'This data visualization tool provides interactive charts, graphs, and maps for exploring complex datasets. Built with D3.js and optimized for large-scale data rendering.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1c0101] text-[#F5F5DC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className={`${blackOpsOne.className} text-5xl mb-12 text-center`}>
          All Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectFolder
              key={index}
              name={project.name}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
              detailedDescription={project.detailedDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
