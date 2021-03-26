import styled from 'styled-components';
import { black } from '../../../../../settings/colors';

export const MovimentOnCommunitySection = styled.section`
  position: relative;
  z-index: 10;
  background-color: ${black};

  @media (min-width: 1024px) {
    margin-left: -20px;
  }
`;

export const ArticleList = styled.ul`
  position: relative;
  z-index: 10;
  display: grid;
  gap: 88px;
  margin-top: 60px;
  padding: 30px;

  @media (min-width: 1024px) {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;  
    padding-bottom: 180px;
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

