import styled, { keyframes } from 'styled-components';
import {
    black50, black, white, purple,
    magenta, orange,
  } from '../../../settings/colors';

export const openModalKeyframes = keyframes`
    from {
        opacity: 0;
        -webkit-transform: translateX(320px);
        -o-transform: translateX(320px);
        transform: translateX(320px);
    } to {
      opacity: 1;
      -webkit-transform: translateX(0px);
      -o-transform: translateX(0px);
      transform: translateX(0px);
    }
`;

export const openMObileModalKeyframes = keyframes`
    from {
        opacity: 0;
    } to {
      opacity: 1;
    }
`;

export const Wrapper = styled.div`
  position: fixed;
  display: ${(props) => {
    const { isOpen } = props;
    return isOpen ? 'flex' : 'none';
  }};
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: ${black50};
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  height: 100%;
  padding: 30px;
  background-color: ${white};
  animation: ${openMObileModalKeyframes} 0.2s linear;
  -webkit-animation: ${openMObileModalKeyframes} 0.2s linear;

  @media (min-width: 1024px) {
    animation: ${openModalKeyframes} 0.1s linear;
    -webkit-animation: ${openModalKeyframes} 0.1s linear;
  }
`;

export const Link = styled.a`
  width: 100%;
  font-size: 1.5em;
  line-height: 1em;
  font-weight: 300;
  text-decoration: none;
  display: block;
  margin-bottom: 20px;
  color: ${black};

  ${(props) => {
    if (props.type === 'artist') {
      return `
        &:hover {
          color: ${magenta}; 
        }
      `;
    }

    if (props.type === 'productor') {
      return `
        &:hover {
          color: ${purple}; 
        }
      `;
    }

    return `
      &:hover {
        color: ${orange}; 
      }
    `;
  }}

  ${(props) => {
    if (props.hide) return 'display: none;';
    return '';
  }}
  
`;

export const Logout = styled.a`
  width: 100%;
  font-size: 1em;
  line-height: 1em;
  font-weight: 300;
  text-decoration: none;
  display: block;
  margin-top: 20px;
  color: ${black};
  cursor: pointer;

  ${(props) => {
    if (props.type === 'artist') {
      return `
        &:hover {
          color: ${magenta}; 
        }
      `;
    }

    if (props.type === 'productor') {
      return `
        &:hover {
          color: ${purple}; 
        }
      `;
    }

    return `
      &:hover {
        color: ${orange}; 
      }
    `;
  }}
`;

export const Terms = styled.a`
  width: 100%;
  font-size: 1em;
  line-height: 1em;
  font-weight: 300;
  text-decoration: none;
  display: block;
  margin-top: 40px;
  color: ${black};
  cursor: pointer;

  ${(props) => {
    if (props.type === 'artist') {
      return `
        &:hover {
          color: ${magenta}; 
        }
      `;
    }

    if (props.type === 'productor') {
      return `
        &:hover {
          color: ${purple}; 
        }
      `;
    }

    return `
      &:hover {
        color: ${orange}; 
      }
    `;
  }}
`;

export const ExitButton = styled.img`
  position: absolute;
  width: 18px;
  top: 15px;
  left: 15px;

  @media (min-width: 1024px) {
    left: initial;
    right: 15px;
  }
`;
