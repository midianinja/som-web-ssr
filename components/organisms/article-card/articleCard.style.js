import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const Card = styled.div`
  display: grid;
  gap: 18px;

  &:nth-child(even) {
    text-align: right;
    justify-items: right;
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 64vw;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const ActionWrapepr = styled.div``;

export  const Title = styled.h3`
  font-family: CircularStd;
  font-weight: 400;
  font-size: 26px;
  line-height: 1em;
  color: ${white};
`;

export const Text = styled.p`
  font-family: CircularStd;
  font-weight: 200;
  font-size: 16px;
  line-height: 1em;
  color: ${white};
`;
