import styled from 'styled-components';
import { white } from '../../../settings/colors';
const zindex = 10;

export const HomeWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-image: url('/images/lp-background.png');
  background-color: #7735E5;
  background-size: cover;
  background-position: center -17px;

  @media (min-width: 1024px) {
    background-size: cover;
  }

  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 101%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #7735E5 83.62%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    top: 0;
    left: 0;
    z-index: ${zindex};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  padding-bottom: 45px;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  z-index: ${zindex + 1};
`;

export const Content = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 140px;
  width: 100%;
`;

export const Logo = styled.img`
  height: 36px;
  margin-bottom: 16px;
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 2.475em;
  font-weight: 900;
  width: 100%;
  max-width: 200px;
  line-height: 1.1em;
  color: ${white};
  margin-bottom: 16px;
`;

export const Description = styled.h2`
  font-size: 1em;
  max-width: 520px;
  font-weight: 300;
  line-height: 1.4em;
  color: ${white};
  margin-bottom: 24px;
`;

export const HomeBurgerWrapper = styled.div``;

export const CTAWrapper = styled.div`
  align-self: end;
`;

export const TextWrapper = styled.div`
  align-self: center;
`;
