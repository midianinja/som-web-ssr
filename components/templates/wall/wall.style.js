import styled from 'styled-components';
import { black } from '../../../settings/colors';

export const Container = styled.div`
  background-color: ${black};
  width: 100%;
  text-align: center;
  margin-top: 78px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
`;

export const GlobalForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 1024px;
  text-align: left;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const LocationLabel = styled.label`
  color: #fff;
  font-size: 1em;
  margin-right: 5px;
`;

export const LocationValue = styled.label`
  color: #51dba9;
  font-size: 1.1em;
`;

export const EventsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  background-color: ${black};
  width: 100%;
  text-align: center;
  margin-top: 32px;
  padding: 10px 0;
  max-width: 1024px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const filterGroupsStyle = `
  margin-right: 10px;
  max-width: 240px;
  display: inline-block;
  vertical-align: top;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const tagListStyle = `
  width: 100%;
  text-align: left;
`;
