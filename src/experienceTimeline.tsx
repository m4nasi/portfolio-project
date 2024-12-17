import React from 'react';
import './experienceTimeline.css'; // Import your CSS file for styling
import itifiyPhoto from './assets/itifyPhoto.jpg';
import blackrockUnsplash from './assets/blackrockUnsplash.jpg';

interface ExperienceItem {
    id: number;
    companyName: string;
    date: string;
    title: string;
    photo: string;
    technologies: string[];
    description: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    companyName: 'Standard Chartered x Itify',
    date: 'August 2023 - Present',
    title: 'Futuremaker and Founder | Standard Chartered x Itify',
    photo: itifiyPhoto,
    technologies: ['Flutter', 'React', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    description: 'Pitched and secured £2000 funding for an AI-focused entrepreneurial venture, overseeing business development and operations. Spearheaded the creation of innovative software solutions. Engineered an AI app using Flutter and website with React, JavaScript, and PHP with a 92% accuracy.',
  },
  {
    id: 2,
    companyName: 'BlackRock',
    date: 'June 2024 - August 2024',
    title: 'Software Engineer Intern | BlackRock',
    photo: blackrockUnsplash, 
    technologies: ['Java', 'Spring', 'Mockito', 'Angular', 'Perl', 'APIs'],
    description: 'Enhanced BlackRock’s flagship Aladdin OS with AI-driven features for an application serving 500,000 global users, working as a Full Stack Developer with Java, Angular, and concurrent API endpoints. Employed a Perl script for effective server management, maintaining a stable development environment. Improved UX/UI design to boost 25% user engagement, for an intuitive and efficient user experience. Designed user interfaces using Java Swing and had 80% coverage unit testing with Mockito. ',
  },
  {
    id: 3,
    companyName: 'J.P Morgan',
    date: 'October 2023',
    title: 'Code For Good Software Engineer Hackathon Intern | J.P Morgan',
    photo: itifiyPhoto, // Update with your image paths
    technologies: ['React', 'Python', 'Bootstrap', 'JavaScript', 'NLTK', 'TensorFlow'],
    description: 'Lead front-end developer and Git admin for a team of 6 working with the Creativators charity to develop an online booking system utilising Bootstrap, React and JavaScript in a 24-hour hackathon. Developed a Python AI chatbot using NLTK and TensorFlow achieving 90% accuracy rate in responses. ',
  },
  {
    id: 4,
    companyName: 'Amazon',
    date: 'June 2023',
    title: 'Software Development Engineer Spring Intern | Amazon',
    photo: itifiyPhoto, // Update with your image paths
    technologies: ['Java', 'JUnit'],
    description: 'Championed agile methodologies to facilitate code reviews and paired programming sessions, driving the development of a Java-based role-playing game, that achieved a 4.5 out 5-star rating. Employed continuous integration to enhance UI designs, boosting user engagement by 12% and adapting to evolving needs through daily stand-up meetings. ',
  },
];

const ExperienceTimeline: React.FC = () => {
    return (
      <div className="bentobox timeline">
        <h2>Experiences</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <img src={experience.photo} alt={experience.companyName} className="photo" />
            <div className="content">
              <h2 className="company">{experience.companyName}</h2>
              <p className="date">{experience.date}</p>
              <p className="description">{experience.description}</p>
              <ul className="technologies">
                {experience.technologies.map((tech, idx) => (
                  <li key={idx} className="tech">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ExperienceTimeline;
