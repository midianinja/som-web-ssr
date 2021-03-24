import styled from 'styled-components';
import { white, green, magenta } from '../../../../../settings/colors';

export const Section = styled.section`
  background-color: ${magenta};
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Title = styled.h3`
  font-family: CircularStd;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.1em;
  color: ${white};
`;

export const OportunityList = styled.ul`
  list-style: none;
  width: auto;
  min-width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  text-align: center;
  ms-overflow-style: none;
  scrollbar-width: none;
  padding: 30px 15px;

  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`;

export const Card = styled.li`
  display: inline-block;
  width: 38vw;
  height: 38vw;
  max-width: 229px;
  max-height: 229px;
  border-radius: 10px;
  margin-left: 16px;

  &:nth-child(1) {
    margin-right: 0;
    background-color: #D62C14;
  }

  &:nth-child(2) {
    background-color: #0E346D;
  }

  &:nth-child(3) {
    background-color: #FFED49;
  }

  &:nth-child(4) {
    background-color: #1C1C1C;
  }
`;


