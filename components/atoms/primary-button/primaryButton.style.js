import styled from 'styled-components';
import {
  white,
  purple,
  green,
  orange,
  magenta,
  gray,
  secondaryPurple,
  transparent,
  darkGray,
  secondaryOrange,
  secondaryMagenta,
  black
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
function getSize(key) {
  return sizes[key] ? sizes[key] : sizes.medium;
}

const colors = {
  secondaryPurple,
  purple,
  green,
  orange,
  secondaryOrange,
  magenta,
  secondaryMagenta,
  gray,
  transparent,
  white,
  darkGray
};

/**
 * function that getting color based on props
 * @param {string} key it is color key
 * @returns contains color in hexa or rgba
 */
function getColor(key) {
  return colors[key] ? colors[key] : colors.purple;
}

const hoverColors = {
  purple: secondaryPurple,
  magenta,
  orange,
  secondaryOrange,
  white,
  transparent
};

/**
 * function that getting hover color based on props
 * @param {string} key it is hover color key
 * @returns contains hover color in hexa or rgba
 */
function getHoverColor(key) {
  return hoverColors[key] ? colors[key] : hoverColors.purple;
}

export const PrimaryButtonStyle = styled.button`
  height: ${(props) => getSize(props.size)};
  border-radius: ${(props) => getSize(props.size)};
  background-color: ${(props) => getColor(props.color)};
  color: ${(props) => {
    const { color } = props;
    return color === 'white' ? black : white;
  }};
  cursor: pointer;
  transition-duration: 0.3s;
  font-size: 14px;
  font-weight: 700;
  padding-left: 18px;
  padding-right: 18px;

  :active,
  :hover {
    background-color: ${(props) => getHoverColor(props.color)};
  }

  :focus {
    outline: none;
  }

  :disabled {
    background-color: ${(props) => {
      const { color } = props;
      return color === 'white' ? white : gray;
    }};
    color: ${(props) => {
      const { color } = props;
      return color === 'white' ? black : white;
    }};
    opacity: ${(props) => {
      const { color } = props;
      return color === 'white' ? '0.7' : '1';
    }};
    cursor: not-allowed;
  }

  ${(props) => props.customStyle}
`;
