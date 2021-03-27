import styled from 'styled-components';
import {
  purple, secondaryBlack, darkGray, white,
} from '../../../settings/colors';

export const Page = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding-left: 56px;
  }
`;

export const LoginButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1024px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  z-index: 11;

  @media (min-width: 1024px) {
    padding-top: 30px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const loginButtonStyle = `
  font-size: 0.75em;
  height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  float: right;
`;

export const PurpleWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${purple};
  display: flex;
  justify-content: center;
`;

export const FiguresContainer = styled.div`
  width: 100%;
  position: relative;
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
`;

export const FiguresContent = styled.div`
  width: 100%;
  position: relative;
  z-index: 12;
`;

export const RedEllipse = styled.img`
  position: absolute;
  width: 144px;
  height: 144px;
  left: -30px;
  z-index: 11;

  @media (min-width: 768px) {
    left: 0px;
  }
`;

export const TermsWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${secondaryBlack};
  text-align: center;
`;

export const Terms = styled.a`
  width: 100%;
  font-size: 1em;
  line-height: 1em;
  font-weight: 300;
  text-decoration: underline;
  display: block;
  color: ${darkGray};
  cursor: pointer;

  &:hover {
    color: ${purple};
  }
`;

export const YellowPolygon = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 12%;
  top: -30px;
  z-index: 11;
`;

export const GreenRectangle = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 10%;
  top: 24.5%;
  z-index: 11;

  @media (min-width: 768px) {
    right: 34.5%;
  }
`;

export const BlueRectangle = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 10%;
  top: 29.5%;
  z-index: 11;

  @media (min-width: 768px) {
    top: 47.5%;
  }
`;

export const RedPolygon = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  right: -3%;
  top: 67.5%;
  z-index: 11;
`;
