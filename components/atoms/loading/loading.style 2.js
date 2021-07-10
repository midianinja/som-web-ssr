import styled, { keyframes } from 'styled-components';

export const rotateKeyframes = keyframes`
  from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
  } to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  padding: 5px;
  animation: ${rotateKeyframes} 1s linear infinite;
  -webkit-animation: ${rotateKeyframes} 1s linear infinite;
`;
