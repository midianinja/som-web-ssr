import styled from 'styled-components';
import {
  white10, black, white, tertiaryBlack,
} from '../../../settings/colors';

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
`;

export const GlobalForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputIconWrapper = styled.div`
  display: flex;
  height: 38px;
  color: ${white};
  background-color: ${white10};
  border-radius: 38px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const SearchIcon = styled.img`
  width: 20px;
`;

export const EventsContainer = styled.section`
  background-color: ${black};
  width: 100%;
  text-align: center;
  margin-top: 50px;
  padding: 10px 0;
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
`;

export const searchStyle = `
  width: 200px;
  text-align: left;
  margin-bottom: 0;
`;

export const Icon = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

export const AddButton = styled.a`
  display: flex;
  padding: 15px 25px;
  font-size: .8em;
  color: ${white};
  background-color: ${tertiaryBlack};
  align-items: center;
  border-radius: 40px;
  cursor: pointer;
`;

export const searchInputStyle = `
  background-color: transparent;
`;
