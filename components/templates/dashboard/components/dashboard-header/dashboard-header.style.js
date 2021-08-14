import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 16px;

  background: linear-gradient(180deg, #000000 55%, rgba(0, 0, 0, 0) 100%);
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

  padding-top: 64px;

  @media (min-width: 1024px) {
    padding-top: 88px;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 1.2em;

  color: #ffffff;

  margin-bottom: 16px;

  @media (min-width: 1024px) {
    margin-bottom: 25px;

    font-size: 47px;
  }
`;

export const Tabs = styled.ul`
  display: inline-flex;
  gap: 22px;
  margin-right: 22px;
`;

export const Tab = styled.li`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;

  color: rgba(255, 255, 255, ${({ selected }) => (!selected ? 0.5 : 1)});

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
