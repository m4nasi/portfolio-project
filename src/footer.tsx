import React from 'react';
import './footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Manasi Mehta. All rights reserved.</p>
      <p>Connect with my on <a href="https://www.linkedin.com/in/manasi-mehta11" target="_blank" rel="noopener noreferrer">Linkedin</a> and <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </footer>
  );
};

export default Footer;