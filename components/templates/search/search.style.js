import styled from 'styled-components';
import { white10, black, white, tertiaryBlack } from '../../../settings/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 50px;
  // justify-content: center;
  // align-items: center;
  flex-direction: row;
 
`;

export const EventsContainer = styled.section`
  background-color: ${black};
  width: 50%;
  text-align: center;
  margin-top: 50px;
  padding: 10px 0;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Title = styled.h3`
  /* Busca */

  position: relative;
  width: 165px;
  height: 22px;
  left: 122px;
  top: 129px;

  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 22px;

  color: #FFFFFF;
`;

export const TextResult = styled.h3`
  /* 0 Artistas */

  position: absolute;
  width: 189px;
  height: 22px;
  left: 120px;
  top: 230px;

  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 22px;
  color: #FFFFFF;
`;

export const buttonStyl = `
  background-color: rgba(0, 0, 0, 1);
  border: 2px solid white;
  margin: 0px 10px;
  left: 310px;
  top: 230px;
`;

export const Linha = styled.div`
  position: absolute;
  width: 1200px;
  height: 0px;
  top: 200px;

  border: 2px solid rgba(255, 255, 255, 0.3);
`;

export const ResultSection = styled.div`
  width: 50%;
  flex-direction: row;
  position: absolute;
  padding: 20px;
  left: 0px;
  top: 64px;
`;
