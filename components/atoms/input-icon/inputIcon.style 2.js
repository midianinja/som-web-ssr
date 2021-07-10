import styled from 'styled-components';
import { white10, white } from '../../../settings/colors';

export const Input = styled.input`
  width: calc(100% - 18px);
  height: 100%;
  color: ${white};
  background: transparent;
  padding-right: 10px;

  :focus {
    outline: none;
    box-shadow: none;
    padding-right: 10px;
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export const InputIconWrapper = styled.div`
  width: ${(props) => props.width};
  height: 38px;
  background-color: ${white10};
  border-radius: 38px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const icons = {
  calendar: '/icons/calendar.svg',
  info: '/icons/info.svg',
  location: '/icons/location.svg',
  loading: '/icons/dark-loading.svg'
};
