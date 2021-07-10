import styled from 'styled-components';
import { white, white30, purple, green } from '../../../../../settings/colors';

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

export const Title = styled.h1`
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 2.1428571429em;
  font-weight: 400;
  line-height: 1.1em;

  @media (min-width: 1024px) {
    padding-left: 10px;
    padding-right: 0px;
    margin-top: 0;
    max-width: 200px;
    padding-right: 40px;
  }
`;

export const TitleAndFollowWrapper = styled.div`
  @media (min-width: 1024px) {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
  }
`;

export const ConnectionsWrapper = styled.div``;

export const buttonCustomStyled = `
  width: 180px;
  margin-right: 15px;
  vertical-align: middle;
`;

export const EditIcon = styled.img`
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-right: 5px;
`;

export const followButtonCustomStyled = `
  width: 180px;
  border: solid 1px ${purple};
  color: ${white};
  background-color: transparent;
  vertical-align: middle;
  
  @media (min-width: 1024px) {
    margin-right: 15px;
  }
`;

export const avatarCustomStyled = `
  width: 140px;
  height: 140px;
  vertical-align: middle;
`;

export const FollowText = styled.label`
  color: ${white30};
  font-size: 0.8571428571em;
  font-weight: 300;
  padding: 10px;
`;

export const FollowNumber = styled.span`
  margin-right: 10px;
  font-size: 1.3333333333em;
  color: ${white};
  vertical-align: middle;
`;

export const About = styled.p`
  margin-bottom: 30px;
  margin-top: 30px;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 1.5em;
  font-weight: 300;
  padding-right: 40px;
  text-align: left;
  font-size: 0.8571428571em;
  transition-duration: 0.2s;
  word-break: break-all;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
`;

export const ActionWrapper = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    padding-right: 40px;
    text-align: left;
  }
`;

export const LerMoreBio = styled.span`
  color: ${green};
  cursor: pointer;
`;
