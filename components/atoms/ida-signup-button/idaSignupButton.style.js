import styled from 'styled-components';

export const IDASignupButtonWrapper = styled.button`
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  width: auto;
  height: 38px;
  color: #ffffff;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 400;
  border-style: solid;
  border-color: #1d1d1d;
  border-width: 2px;
  border-radius: 44px;
  background-color: #1d1d1d;
  padding: 8px 12px;
  cursor: pointer;

  @media (min-width: 1024px) {
    padding: 4px 20px;
    font-size: 14px;
  }
`;

export const IDALogo = styled.img`
  width: 18px;
  margin-right: 4px;

  @media (min-width: 1024px) {
    width: 20px;
    margin-right: 8px;
  }
`;
