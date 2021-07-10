import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Link = styled.a`
  & + & {
    margin-left: 15px;
  }
`;

export const Social = styled.img`
  width: 30px;
  height: 30px;
`;
