import React from 'react';
import PropTypes from 'prop-types';
import { Card, IconWrapper, Icon, Content, Title, Description } from './instructionCard.style';

/**
 * function that render Instruction Card React Component
 * @param {object} props component props
 * @returns contains InstructionCard Component
 */
const InstructionCard = ({ icon, title, description }) => {
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
};

InstructionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default InstructionCard;
