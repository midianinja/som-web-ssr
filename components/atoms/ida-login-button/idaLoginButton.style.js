import styled from 'styled-components';

export const IDALoginButtonWrapper = styled.button`
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  width: auto;
  height: 38px;
  color: ${({ dark }) => dark ? '#1D1D1D' : '#FFFFFF'};  
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 400;
  border-style: solid;
  border-color: ${({ dark }) => dark ? '#1D1D1D' : '#FFFFFF'};
  border-width: 2px;
  border-radius: 44px;
  background-color: transparent;
  padding: 8px 12px;
  cursor: pointer;

  @media (min-width: 1024px) {
    padding: 8px 24px;
    font-size: 14px;
    height: 44px;
  } 
`;

export const IDALogo = styled.img`
  width: 18px;
  margin-right: 4px;

  @media (min-width: 1024px) {
    width: 24px;
    margin-right: 8px;  
  } 
`;