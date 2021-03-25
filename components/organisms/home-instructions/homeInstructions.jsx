import React from 'react';
import InstructionCard from '../../molecules/instruction-card/instructionCard';
import { Container, Section } from './homeInstructions.style';

/**
 * function that render Instructions React Component
 * @param {object} props component props
 * @returns contains Instructions Component
 */
const Instructions = () => (
  <Section>
    <Container>
      <InstructionCard
        icon="/icons/why-to-use.svg"
        title="Infinitas possibilidades"
        description="O S.O.M conecta artistas e produtores a oportunidades de agenda, negócios, aprendizado, colaborações, trabalhos, eventos e muito mais. "
      />
      <InstructionCard
        icon="/icons/to-artists.svg"
        title="Para artistas"
        description="Plataformas digitais integradas. Todo o trabalho do artista disponivel para produtores e público em um só lugar!"
      />
      <InstructionCard
        icon="/icons/music-brazil-map.svg"
        title="Amplifique seu som"
        description="Coloque seu nome no Mapa da Música e crie rotas para formar a sua base pelo Brasil. Com o S.O.M surgem novas cenas de diferentes culturas."
      />
      <InstructionCard
        icon="/icons/productors.svg"
        title="Ofereça e acesse oportunidades"
        description="No S.O.M você conversa com uma comunidade focada em música, produção cultural e audiovisual. O lugar certo para anunciar."
      />
    </Container>
  </Section>
);

export default Instructions;
