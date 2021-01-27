import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Text } from './eventText.style';

/**
 * function that render EventText react component
 *
 * @param {object} props component props
 * @returns contains EventText Component
 */
const EventText = ({ text, title }) => (
  <Container>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Container>
);

EventText.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};

EventText.defaultProps = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  title: 'Sobre o evento'
};

export default EventText;
