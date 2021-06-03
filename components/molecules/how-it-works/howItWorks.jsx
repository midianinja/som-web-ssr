import React from 'react';
import PropTypes from 'prop-types';
import { Card, Content, Title, Description } from './howItWorks.style';
import { icons } from './howItWorks.collection';

/**
 * function that render How Its Work Card Card React Component
 * @param {object} props component props
 * @returns contains HowItsWorkCard Component
 */
const HowItsWorkCard = ({ iconNumber, title, description }) => {
  return (
    <Card>
      {icons[iconNumber]}
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
};

HowItsWorkCard.propTypes = {
  iconNumber: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

HowItsWorkCard.defaultProps = {
  iconNumber: 0
};

export default HowItsWorkCard;
