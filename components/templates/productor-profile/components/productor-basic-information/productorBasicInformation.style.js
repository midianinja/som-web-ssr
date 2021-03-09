import styled from 'styled-components';
import { green } from '../../../../../settings/colors';

export const Wrapper = styled.section`
  display: inline-block;
  width: 100%;
  padding-bottom: 40px;

  @media (min-width: 1024px) {
    position: sticky;
    top: 150px;
    align-self: flex-start;
    text-align: left;
  }
`;

export const ProductorReference = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  margin-top: 8px;
  padding-left: 40px;
  padding-right: 40px;
  font-weight: 200;
  font-size: 10px;
  line-height: 18px;
  text-transform: uppercase;
  letter-spacing: 3px;

  @media (min-width: 1024px) {
    padding-left: 10px;
    padding-right: 0px;
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 2.1428571429em;
  font-weight: 400;
  line-height: 1.1em;

  @media (min-width: 1024px) {
    padding-left: 10px;
    padding-right: 0px;
    margin-top: 0;
  }
`;

export const TitleAndFollowWrapper = styled.div`
  @media (min-width: 1024px) {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
  }
`;
export const avatarCustomStyled = `
  width: 140px;
  height: 140px;
  vertical-align: middle;
`;

export const About = styled.p`
  margin-bottom: 30px;
  margin-top: 30px;
  line-height: 1.5em;
  font-weight: 300;
  padding-right: 30px;
  padding-left: 30px;
  text-align: left;
  font-size: 0.8571428571em;
  transition-duration: 0.2s;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;

  @media (min-width: 1024px) {
    padding-left: 0px;
    padding-right: 10px;
  }
`;

export const LocationWrapper = styled.div`
  margin-top: 10px;
`;

export const LocationText = styled.h4`
  font-size: 0.875rem;
  font-weight: 400;

  @media (min-width: 1024px) {
    padding-left: 10px;
  }
`;

export const LocationCountryText = styled.h4`
  font-size: 0.75rem;
  font-size: 0.875rem;
  font-weight: 200;
  margin-top: 2px;

  @media (min-width: 1024px) {
    padding-left: 10px;
  }
`;

export const LerMoreBio = styled.span`
  color: ${green};
  cursor: pointer;
`;
