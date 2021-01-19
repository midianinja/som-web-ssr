import React from 'react';
import InstructionCard from '../../molecules/instruction-card/instructionCard';
import {
  Container,
} from './homeInstructions.style';

/**
 * function that render Instructions React Component
 * @param {object} props component props
 * @returns contains Instructions Component
 */
const Instructions = () => (
  <Container>
    <InstructionCard
      icon="/icons/why-to-use.svg"
      title="Pra que posso usá-lo?"
      description="No SOM o produtor encontra artistas, os artistas encontram oportunidades e o público fica por dentro de tudo que está acontencendo"
    />
    <InstructionCard
      icon="/icons/to-artists.svg"
      title="Para artistas"
      description="Plataformas digitais integradas. Todo o trabalho do artista disponivel para produtores e público em um só lugar!"
    />
    <InstructionCard
      icon="/icons/music-brazil-map.svg"
      title="Mapa da Música"
      description="Coloque seu nome no mapa! Faça seu perfil e participa da construção de um novo mapa da música brasileira"
    />
    <InstructionCard
      icon="/icons/productors.svg"
      title="Para Produtores e Fãs"
      description="Em Breve!"
    />
  </Container>
);

export default Instructions;
