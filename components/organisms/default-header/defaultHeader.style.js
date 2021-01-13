import styled from 'styled-components';
import { getGradient } from '../../../settings/gradients';
import {
  white, black, magenta, purple,
} from '../../../settings/colors';

export const HeaderComponent = styled.header`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  ${props => {
    if (props.type === "artist") {
      return `
      background-color: ${magenta};
    `;
    }

    if (props.type === "productor") {
      return `
      background-color: ${purple};
    `;
    }

    return `
    background-color: ${white};
  `;
  }}

  ${props => props.customStyle}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
`;

export const BurgerButton = styled.div`
  width: 20px;
  cursor: pointer;

  ${props => {
    const { hide } = props;
    return hide ? "display: none;" : "";
  }}
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: ${white};

  & + & {
    margin-top: 4px;
  }

  ${props => {
    if (props.dark) {
      return `
        background-color: ${black};
      `;
    }

    return "";
  }}
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const RightGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-self: end;

  ${props => {
    if (props.hide) {
      return `
        display: none;
      `;
    }

    return "";
  }}
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: ${getGradient()};
  cursor: pointer;
  user-select: none;
  object-fit: cover;  

  &[src=""] {
    content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
  }
`;

export const Name = styled.h4`
  display: none;
  font-size: 1rem;
  font-weight: 200;
  color: ${white};
  margin-right: 10px;
  cursor: pointer;
  user-select: none;
  line-height: 1em;

  ${props => {
    if (props.dark) {
      return `
        color: ${black};
      `;
    }

    return '';
  }}

  @media (min-width: 1024px) {
    display: inline-block;
  }
`;

export const Type = styled.h4`
  display: none;
  font-size: 9px;
  letter-spacing: 3px;
  vertical-align: bottom;
  opacity: 0.5;
  font-weight: 200;
  color: ${white};
  margin-right: 10px;
  cursor: pointer;
  user-select: none;
  top: 3px;
  position: relative;

  ${props => {
    if (props.dark) {
      return `
        color: ${black};
      `;
    }

    return '';
  }}

  @media (min-width: 1024px) {
    display: inline-block;
  }
`;

export const SignWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LoginText = styled.h4`
  font-size: 1rem;
  font-weight: 200;
  color: ${black};
  margin-right: 12px;
  user-select: none;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 18px;
  justify-self: center;

  @media (min-width: 1024px) {
    height: 24px;
  }
`;

export const LoginIcon = styled.img`
  width: 30px;
  height: 30px;
`;
