import styled from 'styled-components';
import { black } from '../../../../../settings/colors';

export const MovimentOnCommunitySection = styled.section`
  position: relative;
  z-index: 10;
  background-color: ${black};

  @media (min-width: 1024px) {
    background-color: transparent;
    top: -400px;
    left: -10vw;
    padding-top: 503px;
    padding-left: calc(10vw + 56px);
    padding-right: 63px;
    margin-bottom: -400px;
    z-index: inherit;

    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${black};
      z-index: 9;
    }
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
  }
`;

