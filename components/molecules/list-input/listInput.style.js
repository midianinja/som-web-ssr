import styled from 'styled-components';
import {
  green, white10, white30,
  white,
} from '../../settings/colors';

export const SelectWrapper = styled.div`
  color: ${(props) => {
    const { focus, selected } = props;
    const isOpacity = !(focus || selected);
    return !isOpacity ? white : white30;
  }};
  background-color: ${white10};
  border-radius: 38px;
  padding-left: 15px;
  padding-right: 15px;

  ${(props) => {
    const { focus } = props;
    if (focus) {
      return `
        outline: none;
        border-radius: 19px 19px 0px 0px;
      `;
    }
    return '';
  }}
`;

export const Image = styled.img``;

export const Option = styled.li`
  padding: 3px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 0.8571428571em;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 25px;

  :hover {
    background-color: ${green};
    cursor: pointer;
  }
`;

export const Options = styled.ul`
  position: absolute;
  background-color: #1a1a1a;
  left: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 0px 0px 19px 19px;
  max-height: ${(props) => {
    const { focus } = props;
    return !focus ? '0px' : '192px';
  }};
  transition-duration: ${(props) => {
    const { focus } = props;
    return !focus ? '0s' : '0.2s';
  }};
  overflow-y: auto;
  ${(props) => {
    const { focus } = props;
    return focus ? 'padding: 15px;' : '';
  }};
  z-index: 2;
`;

export const Label = styled.label`
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8571428571em;
`;