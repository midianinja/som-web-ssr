import styled from 'styled-components';
import { white, white50, secondaryBlack } from '../../../settings/colors';

export const Container = styled.section`
  background-color: ${secondaryBlack};
  padding-top: 30px;
  padding-bottom: 45px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
`;

export const Figure = styled.img`
  width: 140px;
  margin-right: 15px;
`;

export const TextWrapper = styled.div``;

export const Title = styled.h3`
  font-size: 1.875em;
  line-height: 1.2em;
  color: ${white};
  font-weight: 400;
  text-align: left;
`;

export const Span = styled.span`
  font-size: 0.75em;
  font-weight: 300;
  letter-spacing: 0.16px;
  line-height: 1.5384615385em;
  text-align: left;
  color: ${white50};
  margin-bottom: 5px;
`;

export const GitHubIcon = styled.img`
  width: 20px;
  margin-left: 30px;
  vertical-align: middle;
`;

export const buttonStyle = `
  display: block;
  width: 100%;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  height: 38px;
  font-weight: 400;
  font-size: 1em;
  margin-top: 30px;
`;
