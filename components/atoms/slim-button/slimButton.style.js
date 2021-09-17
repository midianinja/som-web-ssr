import styled from 'styled-components';
import {
  white,
  purple,
  green,
  orange,
  magenta,
  gray,
  secondaryPurple,
  transparent
} from '../../../settings/colors';

const sizes = {
  small: '28px',
  medium: '38px'
};

/**
 * function that getting size based on props
 * @param {string} key it is size key
 * @returns contains size in pixel
 */
const getSize = (key) => {
  return sizes[key] ? sizes[key] : sizes.medium;
};

const colors = {
  secondaryPurple,
  purple,
  green,
  orange,
  magenta,
  gray,
  transparent,
  white
};

/**
 * function that getting color based on props
 * @param {string} key it is color key
 * @returns contains color in hexa or rgba
 */
const getColor = (key) => {
  return colors[key] ? colors[key] : colors.purple;
};

export const SlimButtonStyle = styled.button`
  height: ${(props) => getSize(props.size)};
  padding-left: 18px;
  padding-right: 18px;
  background-color: transparent;
  border-radius: ${(props) => getSize(props.size)};
  border: solid 2px ${(props) => getColor(props.color)};
  color: ${white};
  cursor: pointer;
  transition-duration: 0.3s;
  font-size: 0.8571428571em;
  font-weight: 700;

  :focus {
    outline: none;
  }

  :disabled {
    opacity: ${(props) => {
      const { color } = props;
      return color === 'white' ? '0.7' : '1';
    }};
    cursor: not-allowed;
  }

  ${(props) => props.customStyle}
`;
