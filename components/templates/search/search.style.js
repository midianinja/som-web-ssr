import styled from 'styled-components';
import { white10, black, white, tertiaryBlack } from '../../../settings/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 80px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 120px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  color: #ffffff;
  line-height: 40px;
  margin-right: 13px;
`;

export const buttonStyl = `
  background-color: rgba(0, 0, 0, 1);
  border: 2px solid white;
  font-weight: 200;
  font-size: 13px;
  line-height: 1em;
  height: 30px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #ffffff;
    color: #000;
  }
`;

export const ResultSection = styled.div`
  margin-top: 38px;
  padding-top: 30px;
  border-top: solid 1px rgba(255, 255, 255, 0.2);
`;

export const ResultScope = styled.header``;

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 1em;
  color: #ffffff;
  margin-bottom: 32px;
  padding-left: 20px;

  @media (min-width: 1024px) {
    padding-left: 0;
  }
`;

export const NotFoundResults = styled.output`
  display: block;
  padding: 20px;

  @media (min-width: 1024px) {
    padding: 0;
  }

  > button {
    border-color: rgba(255, 255, 255, 0.2);
    transition-duration: 0.2s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff;
    }
  }
`;

export const NotFoundText = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 1em;
  color: #ffffff;
  margin-bottom: 16px;
`;

export const ListResults = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
  row-gap: 48px;

  @media (min-width: 1024px) {
    padding: 14px 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
