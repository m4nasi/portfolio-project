import React, { useState } from 'react';
import './contactPage.css'; // Import your CSS for styling

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Send the email (you'll need to implement this part in the backend)
    try {
      const response = await fetch('/api/send-email', { // Adjust URL to your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      
      if (response.ok) {
        setStatus('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('There was an error sending your message.');
      }
    } catch (error) {
      setStatus('There was an error sending your message.');
    }
  };

  return (
    <div className="bentobox contact-page">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p>
      <a href="https://www.linkedin.com/in/manasi-mehta11" target="_blank" rel="noopener noreferrer">
        Connect with me on LinkedIn
      </a>
    </div>
  );
};

export default ContactPage;
