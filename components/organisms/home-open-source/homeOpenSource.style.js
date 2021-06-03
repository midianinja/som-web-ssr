import styled from 'styled-components';
import { white, white50, secondaryBlack } from '../../../settings/colors';

export const Container = styled.section`
  display: flex;
  background-color: ${secondaryBlack};
  padding: 50px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 10px 21px -3px rgba(0,0,0,0.45); 
  box-shadow: 0px 10px 21px -3px rgba(0,0,0,0.45);
`;

export const Header = styled.header`
  width: 30%;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderText = styled.header`
  width: 70%;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export const Figure = styled.img`
  width: 140px;
  margin-right: 25px;
`;

export const TextWrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h3`
  font-size: 26px;
  line-height: 1.2em;
  color: ${white};
  font-weight: 400;
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
  width: 100%;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  height: 38px;
  font-weight: 400;
  font-size: 1em;
  margin-top: 30px;
`;
