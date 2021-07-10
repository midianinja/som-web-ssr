import styled from 'styled-components';
import { white, white50, secondaryBlack } from '../../../settings/colors';

export const Container = styled.section`
  display: flex;
  background-color: ${secondaryBlack};
  -webkit-box-shadow: 0px 10px 21px -3px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 10px 21px -3px rgba(0, 0, 0, 0.45);
  width: 100%;
  max-width: 960px;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 15px;
  padding: 16px;
  padding-bottom: 32px;
  border-radius: 8px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    justify-content: center;
    padding: 60px;
    height: 346px;
  }
`;

export const Header = styled.header`
  max-width: 768px;

  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 16px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 40px;
    margin-bottom: 0px;
  }
`;

export const CTA = styled.div`
  display: none;
  max-width: 768px;
  margin-top: 11px;

  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 3;
    display: block;
    font-size: 1em; // base 16px
  }
`;

export const CTAMobile = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Figure = styled.img`
  width: 140px;
  height: 180px;
  margin-right: 25px;
`;

export const TextWrapper = styled.div``;

export const Title = styled.h3`
  font-size: 30px;
  line-height: 1.2em;
  color: ${white};
  font-weight: 700;
  margin-top: 11px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const Span = styled.span`
  font-weight: 300;
  font-size: 0.857rem; // base 14px
  letter-spacing: 0.16px;
  line-height: 1.2em;
  text-align: left;
  color: ${white50};
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 1em; // base 16px
  }
`;

export const GitHubIcon = styled.img`
  width: 20px;
  margin-left: 30px;
  vertical-align: middle;
`;

export const buttonStyle = `
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 38px;
  font-family: CircularStd;
  font-weight: 400;
  font-size: 1em;

  @media (min-width: 768px) {
    width: 311px;
  }
`;
