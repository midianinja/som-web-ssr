import styled from 'styled-components';
import { white, purple } from '../../../settings/colors';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  background-color: ${purple};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: ${white};
  text-align: center;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const Name = styled.h2`
  font-size: 3em;
  font-weight: 400;
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    font-size: 3.2em;
  }
`;

export const Text = styled.p`
  font-size: 0.875em;
  font-weight: 300;
  line-height: 1.625em;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 30px;
  left: 0;
  text-align: center;
`;
