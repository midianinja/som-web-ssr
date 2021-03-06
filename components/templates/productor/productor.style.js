import styled from 'styled-components';
import { black } from '../../../settings/colors';

export const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  background-color: ${black};
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 768px;
`;
