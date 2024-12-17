import React from 'react';
import { FaJava, FaPhp, FaGit } from 'react-icons/fa';
import { SiC, SiJupyter, SiAngular, SiReact, SiJavascript, SiTypescript, SiSupabase, SiFlutter, SiBootstrap, SiNumpy, SiHaskell, SiCss3, SiHtml5 } from 'react-icons/si';
import './TechnologyList.css';

type Technology =
  | 'Java'
  | 'C'
  | 'Python'
  | 'Mockito'
  | 'JUnit'
  | 'JavaSwing'
  | 'Angular'
  | 'React'
  | 'JavaScript'
  | 'TypeScript'
  | 'Supabase'
  | 'PHP'
  | 'Flutter'
  | 'Bootstrap'
  | 'Numpy'
  | 'Git'
  | 'Jupyter'
  | 'Haskell'
  | 'CSS'
  | 'HTML';

const techIcons: Record<Technology, JSX.Element> = {
  Java: <FaJava />,
  C: <SiC />,
  Python: <SiC />, // There is no direct Python icon; you might need a custom icon
  Mockito: <SiC />, // Mockito doesn't have a standard icon; use a placeholder or custom icon
  JUnit: <SiC />, // JUnit doesn't have a standard icon; use a placeholder or custom icon
  JavaSwing: <SiC />, // Java Swing is part of Java; use Java icon
  Angular: <SiAngular />,
  React: <SiReact />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Supabase: <SiSupabase />,
  PHP: <FaPhp />,
  Flutter: <SiFlutter />,
  Bootstrap: <SiBootstrap />,
  Numpy: <SiNumpy />,
  Git: <FaGit />, // NLTK doesn't have a standard icon; use a placeholder or custom icon
  Jupyter: <SiJupyter />,
  Haskell: <SiHaskell />,
  CSS: <SiCss3 />,
  HTML: <SiHtml5 />
};

const technologies: Technology[] = [
  'Java', 'C', 'Python', 'Mockito', 'JUnit', 'JavaSwing', 'Angular', 'React', 'JavaScript', 'TypeScript', 'Supabase', 'PHP', 'Flutter', 'Bootstrap', 'Git', 'Numpy', 'Jupyter', 'Haskell', 'CSS', 'HTML'
];


const TechnologyList: React.FC = () => {
    return (
    <div className="bentobox technology-list">
      <h2>Technologies</h2>
      <ul>
        {technologies.map((tech) => (
          <li>
            {techIcons[tech]} {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologyList;
