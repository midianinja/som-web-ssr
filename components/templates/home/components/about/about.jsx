import React from 'react';
import {
  AboutSection, Title, Subtitle, VideoWrapper,
  Iframe, MIcon,
} from './about.style';

const About = () => (
  <AboutSection id="about">
    <div>
      <Title>Conheça o SOM</Title>
      <Subtitle>Sistema Operacional da Música</Subtitle>
    </div>
    <VideoWrapper>
      <Iframe
        title="Midia"
        src="https://www.youtube.com/embed/bTUoq_zt2uM"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoWrapper>
    <MIcon src="/icons/m-illustration.svg" alt="" />
  </AboutSection>    
);

export default About;
