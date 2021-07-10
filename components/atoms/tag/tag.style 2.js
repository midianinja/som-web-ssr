import styled from 'styled-components';
import { white, purple, green, orange, magenta, yellow } from '../../../settings/colors';

const colors = {
  purple,
  green,
  orange,
  magenta,
  yellow
};

/**
 * function that get color based on props
 * @param {string} key it is color key
 * @returns contains color in hexa or rgba
 */
const getColor = (key) => {
  return colors[key] ? colors[key] : colors.purple;
};

export const TagWrapper = styled.label`
  display: inline-block;
  padding: 2px 5px;
  padding-right: 12px;
  background-color: ${(props) => getColor(props.color)};
  color: ${white};
  text-transform: lowercase;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 0.8571428571em;
  margin-right: 10px;
  margin-bottom: 10px;
  ${(props) => (props.handleClose ? 'cursor: pointer;' : 'padding-left: 12px;')}
  ${(props) => props.customStyle}
`;

export const CloseIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 5px;
`;
