import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const Footer = styled.div`
  display: flex;
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 45px;
  ${(props) => props.customStyle}
`;

export const Wrapper = styled.div`
  width: 100%;
  ${(props) => props.customStyle}
`;

export const Icon = styled.img`
  width: 13px;
  height: 13px;
  margin-left: 10px;
  vertical-align: middle;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  padding: 40px;
  text-align: center;
`;

export const LoadingText = styled.div`
  color: ${white};
`;
