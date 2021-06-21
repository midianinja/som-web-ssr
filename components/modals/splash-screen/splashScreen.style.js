import styled from 'styled-components';
import { black, white } from '../../../settings/colors';

export const OverlayContainer = styled.div`
  display: ${({ opened }) => (opened ? 'block' : 'none')};

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: ${white};

  z-index: 999;
`;

export const StepContainer = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 16px;

  background-color: ${({ light }) => (light ? white : black)};
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 85px;

  background-image: url('${({ mobBackground }) => mobBackground}');
  background-position: center;
  background-size: 100%;
  transition-duration: 2s;
  animation-name: fadein;
  animation-duration: 1s;

  color: ${white};

  @keyframes fadein {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }

  &:nth-child(3) > p,
  &:nth-child(4) > p {
    color: ${black};
  }

  &:not(:last-child) {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    background-image: url('${({ background }) => background}');
  }

  ${({ animation3 }) => {
    if (animation3) {
      return `
        background-size: 800%;
      `;
    }

    return ``;
  }}
`;

export const Text = styled.p`
  position: relative;
  top: -10px;

  font-weight: 700;
  font-size: 30px;
  line-height: 1.2em;
  text-align: center;
`;
