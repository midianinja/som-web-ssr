import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  top: 50px;
  padding: 15px;
  background-color: ${({ color }) => color};
  z-index: 10;
  max-height: 400px;
`;

export const Title = styled.h1`
  font-size: 1.25em;
  line-height: 1.1818181818em;
  margin-top: 40px;
  font-weight: 400;
  letter-spacing: 0.16px;

  @media (min-width: 768px) {
    margin-top: 35px;
  }

  ${(props) => props.customStyle}
`;

export const Body = styled.div`
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  color: ${white};
`;

export const Text = styled.h3`
  max-height: ${(props) => {
    const { small } = props;
    return !small ? '100px' : '0px';
  }};
  opacity: ${(props) => {
    const { small } = props;
    return !small ? '1' : '0';
  }};
  margin-top: ${(props) => {
    const { small } = props;
    return !small ? '12px' : '0px';
  }};
  margin-bottom: ${(props) => {
    const { small } = props;
    return !small ? '15px' : '0px';
  }};
  width: 100%;
  color: ${white};
  font-size: 0.8125em;
  letter-spacing: 0.16px;
  line-height: 1.5384615385em;
  font-weight: 300;
  transition-duration: 0.6s;
  will-change: transform;
`;
