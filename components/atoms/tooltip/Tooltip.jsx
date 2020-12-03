import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  TooltipContainer,
  Content,
  Triangle,
} from './tooltip.style';

const Tooltip = ({ children, content }) => (
  <Container>
    <TooltipContainer>
      <Content>
        {content}
      </Content>
      <Triangle />
    </TooltipContainer>
    {children}
  </Container>
);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default Tooltip;
