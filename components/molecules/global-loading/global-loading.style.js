import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 99;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;

  @media (min-width: 1024px) {
    gap: 60px;
  }

  ${({ exiting }) => {
    if (exiting) {
      return `
        animation-name: fadeout;
        animation-duration: 0.5s;
      `;
    }

    return ``;
  }}

  @keyframes fadeout {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

export const Brand = styled.svg`
  width: auto;
  height: 40px;

  @media (min-width: 1024px) {
    height: 80px;
  }
`;

export const Spinner = styled.svg`
  width: auto;
  height: 40px;
  animation-name: rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.69, 0.17, 0.36, 0.47);

  @media (min-width: 1024px) {
    height: 80px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
