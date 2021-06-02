import styled from 'styled-components';

export const resets = `
  body {
    font-size: 14px;
  }

  
  @media (min-width: 769px) {
    body {
      font-size: 16px;
    }
  }
`;

export const MainWrapper = styled.main`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(119, 53, 229),
    rgba(31, 24, 41, 0.5) 

  );
`;
