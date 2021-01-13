import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, IconWrapper, Icon,
  Content, Title, Number,
  Description,
} from './howItWorks.style';

const HowItsWorkCard = ({
  icon, title, number, description,
}) => {
  return (
    <Card>
      <IconWrapper>
        <Icon src={icon} alt={title} />
      </IconWrapper>
      <Content>
        <Title>{title}</Title>
        <Number>{number}</Number>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
}

HowItsWorkCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HowItsWorkCard;
