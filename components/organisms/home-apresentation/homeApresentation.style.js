import styled from 'styled-components';

export const zIndex = 10;

export const HomeWrapper = styled.section`
  position: relative;
  width: 100%;
  align-items: center;
`;

export const BurgerIcon = styled.svg`
  position: relative;
  cursor: pointer;
`;

export const Header = styled.header`
  display: none;

  @media (min-width: 1024px) {
    position: fixed;
    display: block;

    width: 100%;
    height: 50px;

    top: 0;
    left: 0;
    z-index: ${zIndex};
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: ${zIndex + 2};

  background: linear-gradient(
    90.13deg,
    rgba(188, 169, 220, 0.5) -0.69%,
    rgba(169, 200, 241, 0.5) 54.37%,
    rgba(148, 203, 220, 0.5) 100%
  );
  backdrop-filter: blur(20px);

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 30px;
`;

export const SmallLogo = styled.img`
  height: 24px;
  opacity: 0.3;

  cursor: pointer;
`;
