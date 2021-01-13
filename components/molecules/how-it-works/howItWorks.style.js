import styled from 'styled-components';
import { black15, white } from '../../../settings/colors';

export const Card = styled.div`
  display: inline-block;
  width: 250px;
  border-radius: 20px;
  overflow: hidden;
  vertical-align: top;
  
  & + & {
    margin-left: 15px;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(79, 79, 79, 0.7);
    filter: blur(65px);
  }
`;

export const Icon = styled.img`
  width: 75px;
  z-index: 11;
`;

export const Content = styled.div`
  position: relative;
  background-color: ${white};
  height: 150px;
  padding: 20px;
  padding-top: 30px;

  @media (min-width: 1024px) {
    height: 165px;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 1.2857142857em;
  margin-bottom: 15px;
`;

export const Number = styled.span`
  position: absolute;
  font-size: 1.875em;
  font-weight: 700;
  color: ${black15};
  top: 15px;
  right: 15px;
`;

export const Description = styled.p`
  font-size: 0.875em;
  font-weight: 300;
  line-height: 1.5384615385em;
  white-space: normal;
`;
