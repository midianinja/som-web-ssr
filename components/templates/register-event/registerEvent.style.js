import styled from 'styled-components';
import { black } from '../../../settings/colors';

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

  @media (min-width: 1024px) {
    display: grid;
    margin-top: 60px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'avatar cover'
      'general conditions'
      'address address';
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
