import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, IconWrapper, Icon,
  Content, Title, Description,
} from './instructionCard.style';

const InstructionCard = ({
  icon, title, description,
}) => {
  return (
    <Card>
      <IconWrapper>
        <Icon src={icon} alt={title} />
      </IconWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
}

InstructionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InstructionCard;
