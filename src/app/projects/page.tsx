import React from 'react';
import AllProjects from '@/components/Contents/Projects/AllProjects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--background)]">
      <AllProjects />
    </div>
  );
};

export default ProjectsPage;
