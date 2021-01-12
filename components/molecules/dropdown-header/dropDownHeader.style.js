import styled from 'styled-components';
import {
  white, black, magenta, purple,
  theBestColor,
} from '../../../settings/colors';
import { getGradient } from '../../../settings/gradients';

export const Dropdown = styled.div`
  position: absolute;
  position: fixed;
  overflow: hidden;
  background-color: ${white};
  width: 100%;
  top: 0;
  right: 0;
  min-width: 310px;
  min-height: 100vh;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    top: calc(100% + 30px);
    position: absolute;
    min-height: 200px;
    border-radius: 20px;
  }

  ${(props) => {
    if (props.hide) {
      return `
        display: none;
      `;
    }

    return '';
  }}
`;

export const Avatar = styled.img`
  display: inline-block;
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: ${getGradient()};
  cursor: pointer;
  margin-top: 24px;
  object-fit: cover;

  @media (min-width: 1024px) {
    margin-top: 34px;
  }

  &[src=""] {
    content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Name = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${black};
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const LoginStatus = styled.h4`
  font-size: 0.875rem;
  font-weight: 200;
  cursor: pointer;
  margin-bottom: 30px;

  ${(props) => {
    if (props.type === 'artist') {
      return `
        color: ${magenta};
      `;
    }

    if (props.type === 'productor') {
      return `
        color: ${purple};
      `;
    }

    return `
      color: ${black};
    `;
  }}
`;

export const ChagingAccount = styled.h4`
  width: 100%;
  font-size: 0.875rem;
  font-weight: 200;
  cursor: pointer;
  background-color: ${theBestColor};
  padding: 15px;
  color: ${black};

  & > span {
    font-weight: 500;

    ${(props) => {
    if (props.type === 'artist') {
      return `
        color: ${magenta};    
      `;
    }

    if (props.type === 'productor') {
      return `
        color: ${purple};
      `;
    }

    return `
      color: ${black};
    `;
  }}
  }

  ${(props) => {
    if (props.hide) {
      return `
        display: none;
      `;
    }

    return '';
  }}
`;

// const Navigation = styled.div`
//   border-top: 1px solid ${theBestColor};
//   border-bottom: 1px solid ${theBestColor};
//   padding: 10px;
// `;

// const Link = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-decoration: none;
//   color: ${black};
//   font-size: 0.875rem;
//   font-weight: 200;
//   cursor: pointer;
//   padding: 10px;
// `;

export const ExitLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${black};
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  padding: 20px;
`;

// const Alert = styled.span`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   margin-right: 10px;
//   background-color: ${alertColor};
//   border-radius: 50%;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// `;

export const ExitWrapper = styled.div`
  width: 100%;
  text-align: right;
  padding-top: 15px;
  padding-right: 15px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ExitButton = styled.img`
  width: 18px;
  top: 15px;
`;