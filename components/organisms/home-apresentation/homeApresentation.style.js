import styled from 'styled-components';
import { white } from '../../../settings/colors';
const zindex = 10;

export const HomeWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  padding: 30px;
  background-image: url('/images/lp-background.jpg');
  background-size: 220%;
  background-position: top;

  @media (min-width: 1024px) {
    background-size: cover;
  }

  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 101%;
    background: linear-gradient(179.99deg, #000000 1.58%, rgba(0, 0, 0, 0.63) 37.1%, #000000 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    top: 0;
    left: 0;
    z-index: ${zindex};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  z-index: ${zindex + 1};
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 45px;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 320px;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: 2.475em;
  font-weight: 400;
  width: 100%;
  max-width: 520px;
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

export const IDARegisterButton = styled.button`
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  width: auto;
  height: 48px;
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 400;
  border-style: solid;
  border-color: #1d1d1d;
  border-width: 2px;
  border-radius: 48px;
  background-color: #1d1d1d;
  padding: 8px 24px;
  cursor: pointer;
`;

export const IDALogo = styled.img`
  width: 24px;
  margin-right: 8px;
`;
