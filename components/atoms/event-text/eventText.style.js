import styled from 'styled-components';
import { white50, white, black } from '../../../settings/colors';

export const Container = styled.section`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  color: ${white};
  text-align: left;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${white};
  text-align: left;
  line-height: 1.6em;
  font-weight: 300;
  padding-bottom: 40px;
  border-bottom: solid 1px ${white50};
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
`;
