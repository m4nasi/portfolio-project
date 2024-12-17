import React from 'react';
import ProjectCard from './projectCards';
import './projectsGrid.css';
import itifyPhoto from './assets/itifyPhoto.jpg';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: itifyPhoto,
    projectLink: 'https://example.com/project-one'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: itifyPhoto,
    projectLink: 'https://example.com/project-two'
  },
  // Add more projects here
];

const ProjectsGrid: React.FC = () => {
    return (
      <div className="bentobox projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    );
  };

export default ProjectsGrid;
