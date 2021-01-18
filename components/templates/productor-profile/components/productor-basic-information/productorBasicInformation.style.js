import styled from 'styled-components';
import { green } from '../../../../../settings/colors';

export const Wrapper = styled.section`
  display: inline-block;
  width: 100%;
  max-width: 420px;
  padding-bottom: 40px;

  @media (min-width: 1024px) {
    position: sticky;
    top: 150px;
    align-self: flex-start;
    text-align: left;
  }
`;

export const ProductorReference = styled.span`
  margin-bottom: 15px;
  margin-top: 20px;
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
    max-width: 200px;
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
  margin-bottom: 45px;
  margin-top: 45px;
  line-height: 2em;
  font-weight: 300;
  padding-right: 40px;
  padding-left: 40px;
  text-align: left;
  font-size: 0.8571428571em;
  transition-duration: 0.2s;

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