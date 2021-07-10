import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px;
  ${(props) => props.customStyle}
`;

export const Wrapper = styled.div`
  width: 100%;
  ${(props) => props.customStyle}
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  padding: 40px;
  text-align: center;
`;
