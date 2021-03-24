import React from 'react';
import {
  AboutSection, Title, Subtitle, VideoWrapper,
  PlayIcon, MIcon,
} from './about.style';

const About = () => (
  <AboutSection>
    <Title>Conheça o SOM</Title>
    <Subtitle>Sistema Operacional da Música</Subtitle>
    <VideoWrapper>
      <PlayIcon src="/icons/play.svg" alt="" />
    </VideoWrapper>
    <MIcon src="/icons/m-illustration.svg" alt="" />
  </AboutSection>    
);

export default About;
