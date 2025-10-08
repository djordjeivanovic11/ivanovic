import React from 'react';
import ProjectFolder from './ProjectFolder';
import { blackOpsOne } from '@/app/fonts/fonts';

const AllProjects: React.FC = () => {
  const projects = [
    {
      name: 'Personal Website',
      link: 'https://djordjeivanovic11-github-io-fl8v-djordje-ivanovics-projects.vercel.app/',
      description: 'A portfolio website built using Next.js and Tailwind CSS.',
      tags: ['Next.js', 'Tailwind CSS', 'React'],
      frontendLink: 'https://github.com/djordjeivanovic11/djordjeivanovic11.github.io',
      backendLink: '',
      detailedDescription:
        'This personal website showcases my portfolio, skills, and projects. It features a responsive design, interactive UI components, and a modern look using my own design.',
    },
    {
      name: 'E-commerce Platform LADIMOOD',
      link: 'https://ladimood.com/',
      description: 'An e-commerce website with product listings, cart, and checkout.',
      tags: ['React', 'Redux', 'Node.js'],
      frontendLink: 'https://github.com/djordjeivanovic11/ladimood-front',
      backendLink: 'https://github.com/djordjeivanovic11/ladimood-back',
      detailedDescription:
        'A full-stack e-commerce platform that supports product selection, shopping cart functionality, wishlists, user authentication, filtering, and sorting. Built with Next.js, FastAPI, and PostgreSQL.',
    },
    {
      name: 'Sorriso Care',
      link: 'https://sorriso.care/',
      description: 'A dental tourism platform connecting Western patients with high-quality dental care in Montenegro at 20s% the cost.',
      tags: ['Next.js'],
      frontendLink: 'https://sorriso.care/',
      detailedDescription:
        'A comprehensive dental tourism platform that helps patients save up to 70% on dental procedures while maintaining the highest quality standards. Features include clinic verification, transparent pricing, appointment scheduling, secure payments, and travel assistance. Built with Next.js, PostgreSQL, and AWS infrastructure.',
    },
    {
      name: 'MiniML Interpreter',
      link: '',
      description: 'A small interpreter for OCaml built in OCaml.',
      tags: ['OCaml', 'Interpreters', 'Functional Programming'],
      frontendLink: 'https://github.com/cs51/project-2024-djordjeivanovic1',
      backendLink: '',
      detailedDescription:
        'An interpreter for a minimal ML-like language implemented in OCaml. Features include lexing, parsing, type checking, and evaluation of basic functional programming constructs like let-bindings, functions, and pattern matching. Built as an exploration of programming language implementation concepts.',
    },
    {
      name: 'Bridge',
      link: 'https://youtu.be/UGOgEIGYvSY',
      description: 'A social platform connecting ex-Yugoslav diaspora in the United States.',
      tags: ['HTML', 'CSS', 'MySQL', 'Flask'],
      frontendLink: 'https://github.com/djordjeivanovic11/bridge',
      backendLink: 'https://github.com/djordjeivanovic11/bridge',
      detailedDescription:
        'A social networking platform designed to help people from former Yugoslav countries connect and build community in the United States. Features include user profiles, event organization, business directory, job board, and real-time chat. Built with Next.js, MongoDB, and WebSocket for real-time features.',
    },
    {
      name: 'Prime Dark Mode',
      link: '',
      description: 'A browser extension that provides elegant dark mode styling with advanced customization options.',
      tags: ['JavaScript', 'CSS', 'Chrome Extension', 'Dark Mode'],
      frontendLink: 'https://github.com/djordjeivanovic1/prime-dark-mode',
      backendLink: '',
      detailedDescription: 'A Chrome extension that transforms websites into beautiful dark themes while preserving readability and aesthetics. Features include custom color schemes, site-specific settings, and smooth transitions. Built with JavaScript and advanced CSS techniques.',
    },
    {
      name: 'Keyboard to 3D Motion Mapper',
      link: '',
      description: 'A tool that maps keyboard inputs to 3D coordinates for robotic arm movement simulation.',
      tags: ['Python', 'ROS2', 'Computer Vision', 'Robotics'],
      frontendLink: '',
      backendLink: 'https://github.com/djordjeivanovic11/urc_keyboard',
      detailedDescription: 'Developed a system that translates keyboard key presses into 3D coordinate points for the Harvard Rover Team. The tool enables the robotic arm to simulate typing motions by mapping each key to specific XYZ coordinates. Built with Python, it includes a visualization of how the model is finding letters in the pascode, enumerating them and translating them into coordinates that the robotic arm can move to with the rover\'s motion planning system.',
    },
    {
      name: 'Tweet Market Impact Analysis',
      link: '',
      description: 'Data science project analyzing correlation between Elon Musk\'s tweets and stock market movements.',
      tags: ['Python', 'Data Science', 'NLP', 'Pandas', 'Matplotlib'],
      frontendLink: '',
      backendLink: 'https://github.com/djordjeivanovic1/cs109_final',
      detailedDescription: 'A data science project that examines the relationship between Elon Musk\'s Twitter activity and stock market fluctuations. Used Python, Pandas, and Natural Language Processing to analyze tweet sentiment and correlate it with price movements of related stocks. Features include time series analysis, sentiment scoring, and statistical significance testing. Visualizations created with Matplotlib demonstrate clear patterns between social media influence and market behavior.',
    },
    {
      name: 'Boston Movie Analytics',
      link: '',
      description: 'Data analysis of Boston movie screenings and historical cinema trends.',
      tags: ['Python', 'Data Science', 'Pandas', 'Matplotlib', 'Data Visualization'],
      frontendLink: '',
      backendLink: 'https://github.com/djordjeivanovic11/cs109_movies',
      detailedDescription: 'A data science project analyzing historical movie screening data from Boston theaters to uncover trends in cinema popularity, genre preferences, and seasonal patterns. Used Python with Pandas for data cleaning and analysis, and Matplotlib/Seaborn for creating insightful visualizations. Key findings include correlations between weather patterns and attendance, genre popularity shifts over decades, and the impact of major historical events on movie-going habits. The project demonstrates skills in data wrangling, statistical analysis, and deriving meaningful insights from complex datasets.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1c0101] text-[#F5F5DC] mt-[80px] py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className={`${blackOpsOne.className} text-5xl sm:text-5xl mb-12 text-center`}>
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
              frontendLink={project.frontendLink}
              backendLink={project.backendLink}
              detailedDescription={project.detailedDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
