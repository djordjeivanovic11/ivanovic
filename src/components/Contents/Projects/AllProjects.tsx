import React from "react";
import ProjectFolder from "./ProjectFolder";
import { inter } from "@/app/fonts/fonts";

const AllProjects: React.FC = () => {
  const projects = [
    {
      name: "Harvard Rover Team - Software Lead",
      link: "https://www.huroverteam.com/",
      description:
        "Leading a 8-member engineering squad building the full autonomy stack, SLAM, perception, control, and navigation for our competition rover at the University Rover Challenge.",
      tags: [
        "Leadership",
        "Robotics",
        "Autonomous Systems",
        "SLAM",
        "Computer Vision",
        "LiDAR",
        "Real-time Systems",
        "Control Systems",
      ],
      frontendLink: "https://www.huroverteam.com/",
      backendLink: "",
      detailedDescription:
        "As Software Lead of the Harvard Rover Team, I architect and lead development of real-time autonomous systems that fuse vision, LiDAR, and control intelligence to enable precise, adaptive, and autonomous operation in extreme environments. Leading an 8-member engineering squad, I oversee the complete autonomy stack including SLAM (Simultaneous Localization and Mapping), perception systems, control algorithms, and navigation for our competition rover participating in the University Rover Challenge. The team focuses on pushing the boundaries of exploration and technology through innovative robotics and research.",
    },
    {
      name: "Diabetes Prediction Using Machine Learning",
      link: "",
      description:
        "Built a machine learning pipeline using AdaBoost, decision trees, and random forests to predict diabetes risk, focusing on feature selection, model optimization, and real-world healthcare applications.",
      tags: [
        "Data Science",
        "Machine Learning",
        "Python",
        "AdaBoost",
        "Decision Trees",
        "Random Forest",
      ],
      frontendLink: "",
      backendLink: "https://github.com/djordjeivanovic11/109a_project",
      detailedDescription:
        "A comprehensive machine learning project focused on diabetes prediction using multiple algorithms including AdaBoost, decision trees, and random forests. The project emphasizes feature selection techniques, model optimization, and real-world healthcare applications. Includes extensive data preprocessing, model comparison, and performance evaluation to create an accurate diabetes risk prediction system.",
    },
    {
      name: "Aegis",
      link: "",
      description:
        "Developed AEGIS, an AI assistant that uses Whisper and LLMs to transcribe patient encounters in real time, generate intelligent prompts for doctors, and produce comprehensive summaries with lab result analysis and follow-up suggestions.",
      tags: [
        "AI",
        "Machine Learning",
        "Whisper",
        "LLM",
        "Healthcare",
        "Real-time Processing",
      ],
      frontendLink: "https://github.com/djordjeivanovic11/aegis",
      backendLink: "https://github.com/djordjeivanovic11/aegis_backend",
      detailedDescription:
        "AEGIS is an innovative AI assistant designed for healthcare professionals that leverages OpenAI's Whisper for real-time speech-to-text transcription and Large Language Models for intelligent analysis. The system transcribes patient encounters in real-time, generates intelligent prompts for doctors, and produces comprehensive summaries including lab result analysis and follow-up suggestions. Built with modern AI technologies to streamline clinical workflows and improve patient care documentation.",
    },
    {
      name: "Lantern",
      link: "",
      description:
        "Lantern is a vehicle tracking system that uses tire-embedded TPMS sensors connected through a distributed LoRa mesh network to anonymously detect, locate, and monitor cars across urban environments in real time.",
      tags: [
        "IoT",
        "LoRa",
        "TPMS",
        "Mesh Network",
        "Vehicle Tracking",
        "Real-time Monitoring",
      ],
      frontendLink: "",
      backendLink: "https://github.com/djordjeivanovic11/codemetal",
      detailedDescription:
        "Lantern is an innovative vehicle tracking system that leverages tire-embedded TPMS (Tire Pressure Monitoring System) sensors connected through a distributed LoRa mesh network. The system enables anonymous detection, location tracking, and real-time monitoring of vehicles across urban environments. This hackathon project demonstrates expertise in IoT technologies, mesh networking, and real-time data processing for smart city applications.",
    },
    {
      name: "E-commerce Store LADIMOOD",
      link: "",
      description:
        "An e-commerce website with product listings, cart, and checkout.",
      tags: ["React", "Redux", "Node.js"],
      frontendLink: "https://github.com/djordjeivanovic11/ladimood-front",
      backendLink: "https://github.com/djordjeivanovic11/ladimood-back",
      detailedDescription:
        "A full-stack e-commerce platform that supports product selection, shopping cart functionality, wishlists, user authentication, filtering, and sorting. Built with Next.js, FastAPI, and PostgreSQL.",
    },
    {
      name: "Sorriso Care",
      link: "https://sorriso.care/",
      description:
        "A dental tourism platform connecting European patients with high-quality dental care in Montenegro at 40% the cost.",
      tags: ["Next.js"],
      frontendLink: "https://sorriso.care/",
      detailedDescription:
        "A comprehensive dental tourism platform that helps patients save up to 60% on dental procedures while maintaining the highest quality standards. Features include clinic verification, transparent pricing, appointment scheduling, secure payments, and travel assistance. Built with Next.js, PostgreSQL, and AWS infrastructure.",
    },
    {
      name: "MiniML Interpreter",
      link: "",
      description: "A small interpreter for OCaml built in OCaml.",
      tags: ["OCaml", "Interpreters", "Functional Programming"],
      frontendLink: "https://github.com/cs51/project-2024-djordjeivanovic1",
      backendLink: "",
      detailedDescription:
        "An interpreter for a minimal ML-like language implemented in OCaml. Features include lexing, parsing, type checking, and evaluation of basic functional programming constructs like let-bindings, functions, and pattern matching. Built as an exploration of programming language implementation concepts.",
    },
    {
      name: "Bridge",
      link: "https://youtu.be/UGOgEIGYvSY",
      description:
        "A social platform connecting ex-Yugoslav diaspora in the United States.",
      tags: ["HTML", "CSS", "MySQL", "Flask"],
      frontendLink: "https://github.com/djordjeivanovic11/bridge",
      backendLink: "https://github.com/djordjeivanovic11/bridge",
      detailedDescription:
        "A social networking platform designed to help people from former Yugoslav countries connect and build community in the United States. Features include user profiles, event organization, business directory, job board, and real-time chat. Built with Next.js, MongoDB, and WebSocket for real-time features.",
    },
    {
      name: "Prime Dark Mode",
      link: "",
      description:
        "A browser extension that provides elegant dark mode styling with advanced customization options.",
      tags: ["JavaScript", "CSS", "Chrome Extension", "Dark Mode"],
      frontendLink: "https://github.com/djordjeivanovic1/prime-dark-mode",
      backendLink: "",
      detailedDescription:
        "A Chrome extension that transforms websites into beautiful dark themes while preserving readability and aesthetics. Features include custom color schemes, site-specific settings, and smooth transitions. Built with JavaScript and advanced CSS techniques.",
    },
    {
      name: "Boston Movie Analytics",
      link: "",
      description:
        "Data analysis of Boston movie screenings and historical cinema trends.",
      tags: [
        "Python",
        "Data Science",
        "Pandas",
        "Matplotlib",
        "Data Visualization",
      ],
      frontendLink: "",
      backendLink: "https://github.com/djordjeivanovic11/cs109_movies",
      detailedDescription:
        "A data science project analyzing historical movie screening data from Boston theaters to uncover trends in cinema popularity, genre preferences, and seasonal patterns. Used Python with Pandas for data cleaning and analysis, and Matplotlib/Seaborn for creating insightful visualizations. Key findings include correlations between weather patterns and attendance, genre popularity shifts over decades, and the impact of major historical events on movie-going habits. The project demonstrates skills in data wrangling, statistical analysis, and deriving meaningful insights from complex datasets.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-y-auto overflow-x-hidden">
      {/* Colorful Background Orbs - Animated Movement */}
      <div className="absolute top-20 -left-32 w-72 h-72 bg-gradient-to-br from-purple-500/25 to-pink-500/25 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-br from-blue-500/25 to-cyan-400/25 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-float-reverse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1
          className={`${inter.className} text-5xl sm:text-6xl md:text-7xl font-semibold mb-6 text-center tracking-tight`}
        >
          All Projects
        </h1>
        <p
          className={`${inter.className} text-lg sm:text-xl text-center text-[var(--secondary)] mb-16 max-w-2xl mx-auto`}
        >
          Explore my collection of projects spanning web development, data
          science, and more
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
