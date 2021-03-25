import styled from 'styled-components';
import { purple } from '../../../settings/colors';

export const Section = styled.section`
  width: 100%;
  position: relative;
  background-color: ${purple};
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 45px;
  text-align: center;
`;
