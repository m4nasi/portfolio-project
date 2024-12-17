// src/AboutMe.js
import React from 'react';
import styled from 'styled-components';
import { FaCameraRetro } from 'react-icons/fa';
import Collage from './collage'; 
import * as polaroid from './deck';

// Styled components for layout and styling
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #f9f9f9;
  min-height: 100vh;
`;

const IntroSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #444;
  max-width: 800px;
  margin: 0 auto;
`;

const GallerySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const GalleryImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Example images for gallery
const images = [
  'https://plus.unsplash.com/premium_photo-1724668132059-480d6a34bbf4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1724668132059-480d6a34bbf4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1724668132059-480d6a34bbf4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1724668132059-480d6a34bbf4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const AboutMe = () => {
  return (
    <polaroid />
    // <AboutContainer>
    //   <IntroSection>
    //     <FaCameraRetro size={50} color="#FF6347" />
    //     <Title>About Me</Title>
    //     <Subtitle>Passionate Photographer & Visual Storyteller</Subtitle>
    //     <Paragraph>
    //       Hello! I'm a passionate photographer who loves capturing the beauty in everyday moments. With a keen eye for detail and a deep appreciation for visual storytelling, I strive to create stunning images that evoke emotion and inspire others.
    //     </Paragraph>
    //   </IntroSection>
    //   <GallerySection>
    //     {images.map((src, index) => (
    //       <GalleryImage key={index} src={src} alt={`Photography ${index + 1}`} />
    //     ))}
    //   </GallerySection>
    // </AboutContainer>
  );
};

export default AboutMe;
