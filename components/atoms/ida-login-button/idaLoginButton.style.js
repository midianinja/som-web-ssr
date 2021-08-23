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
  color: ${({ dark }) => (dark ? '#1D1D1D' : '#FFFFFF')};
  font-size: 16px;
  font-weight: 500;
  border-style: solid;
  border-color: ${({ dark }) => (dark ? '#1D1D1D' : '#FFFFFF')};
  border-width: 2px;
  border-radius: 10px;
  background-color: transparent;
  padding: 4px 12px;
  cursor: pointer;

  ${(props) => props.customStyle}
`;

export const IDALogo = styled.img`
  height: 24px;
  margin-right: 8px;
`;
