import React from 'react';
import PropTypes from 'prop-types';
import { Card, IconWrapper, Icon, Content, Title, Number, Description } from './howItWorks.style';

/**
 * function that render How Its Work Card Card React Component
 * @param {object} props component props
 * @returns contains HowItsWorkCard Component
 */
const HowItsWorkCard = ({ icon, title, number, description }) => {
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

HowItsWorkCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default HowItsWorkCard;
