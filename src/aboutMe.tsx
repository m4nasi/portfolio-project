import React from 'react';
// import ScrapbookPhoto from './ScrapbookPhoto'; // Import the ScrapbookPhoto component
import './aboutMe.css'; // Import your CSS file for styling
// import headshot from './assets/headshot.jpg';

const AboutMe = () => {
  return (
    <div className="bentobox about-me-container">
      <div className="about-me-left">
        <h1>Hello World</h1>
        <p>Hi, my name is Manasi, an aspiring software engineer with a passion for crafting innovative solutions and pushing the boundaries of technology. I enjoy photography, F1 and chess.</p>
      </div>
      <div className="about-me-right">
      {/* <ScrapbookPhoto
          src={headshot}
          alt="Scrapbook photo"
          caption="A glimpse into my world"
        /> */}
      </div>
    </div>
  );
};

export default AboutMe;
