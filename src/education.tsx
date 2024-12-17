import React from 'react';
import './education.css'; // Import the CSS file for styling

// Define the type for the education items
type EducationItem = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  achievements?: string[];
  modules?: string[];
};

const educationItems: EducationItem[] = [
  {
    institution: 'University of Nottingham',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'BSc Computer Science',
    startDate: 'September 2022',
    endDate: 'June 2025',
    achievements: ['Computer Science Mentor', 'Subject Ambassador', 'Investment Fund Manager', 'Treasurer of Hacksoc'],
    modules: ['Software Engineering', 'Data Structures and Algorithms', 'Artificial Intelligence', 'Developing Maintainable Software'],
}
];

const Education: React.FC = () => {
  return (
    <div className="bentobox education-section">
      <h2>Education</h2>
      <ul className="education-list">
        {educationItems.map((item, index) => (
          <li key={index} className="education-item">
            <div className="education-details">
              <h3>{item.institution}</h3>
              <p><strong>Field of Study:</strong> {item.fieldOfStudy}</p>
              <p><strong>Duration:</strong> {item.startDate} - {item.endDate}</p>
            
            <p><strong>Roles of responsibility:</strong></p>
            {item.achievements && item.achievements.length > 0 && (
                <ul className="achievements-list">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}

            <p><strong>Modules:</strong></p>
            {item.modules && item.modules.length > 0 && (
                <ul className="achievements-list">
                  {item.modules.map((modules, idx) => (
                    <li key={idx}>{modules}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
