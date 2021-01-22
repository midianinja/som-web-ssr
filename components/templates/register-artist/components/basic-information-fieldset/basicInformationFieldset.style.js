import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  padding: 30px 15px;
  width: 100%;
`;

export const MainInformationWrapper = styled.div`
width: 100%;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const TextInpustWrapper = styled.div`
  @media (min-width: 1024px) {
    margin-left: 20px;
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: ${white};
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const musicalGenresCustomStyle = `
  margin-top: 10px;
`;

export const avatarInputGroupStyle = `
  text-align: center;

  @media (min-width: 1024px) {
    margim-bottom: 0;
    width: 200px
  }
`;
