import React from 'react';
import { Button, Wrapper, Icon, Text } from './methodButton.style';

/**
 * function that render MethodButton react component
 * @param {object} props component props
 * @returns contains MethodButton Component
 */
const MethodButton = ({ onClick, selected, text, iconSrc, buttonType }) => {
  return (
    <Button onClick={onClick} type={buttonType} selected={selected}>
      <Wrapper>
        <Icon src={iconSrc} alt={text} />
        <Text>{text}</Text>
      </Wrapper>
    </Button>
  );
};

MethodButton.propTypes = {
  customStyle: PropTypes.string,
  buttonType: PropTypes.string
};

MethodButton.defaultProps = {
  customStyle: '',
  buttonType: 'button'
};

export default MethodButton;
