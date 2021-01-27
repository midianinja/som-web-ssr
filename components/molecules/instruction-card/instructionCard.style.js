import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const Card = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 275px;
  vertical-align: top;
  text-align: center;

  & + & {
    margin-top: 45px;
  }

  @media (min-width: 1024px) {
    width: 50%;
    max-width: 50%;
    margin-top: 45px;
  }
`;

export const IconWrapper = styled.div`
  @media (min-width: 1024px) {
    display: inline-block;
    width: 120px;
    vertical-align: middle;
  }
`;

export const Icon = styled.img`
  width: 150px;
`;

export const Content = styled.div`
  margin-top: -23px;
  color: ${white};

  @media (min-width: 1024px) {
    display: inline-block;
    width: calc(100% - 180px);
    vertical-align: middle;
    text-align: left;
    margin-top: 0;
    padding-left: 15px;
    margin-left: 30px;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 1.2857142857em;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 0.875em;
  font-weight: 100;
  line-height: 1.5384615385em;
  white-space: normal;
`;
