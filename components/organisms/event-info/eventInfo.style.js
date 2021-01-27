import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  max-width: 440px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  color: ${white};

  @media (min-width: 1024px) {
    position: fixed;
    padding-left: 0px;
  }
`;

export const ClockIcon = styled.img`
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-right: 5px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 400;
  line-height: 1.1em;
  text-align: left;
`;

export const ClosingDateTimer = styled.div`
  display: block;
  margin-bottom: 20px;
  font-size: 0.8125em;
  font-weight: 300;
  line-height: 1em;
  text-align: left;
`;

export const Space = styled.div`
  height: 10px;
  width: 100%;
`;

export const SubSpace = styled.div`
  height: 10px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;
