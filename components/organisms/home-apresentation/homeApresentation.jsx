import React from 'react';
import PropTypes from 'prop-types';
import IDASignupButton from '../../atoms/ida-signup-button/idaSignupButton';
import {
  HomeWrapper, Wrapper, Content, Logo,
  Title, Description,
} from './homeApresentation.style';

/**
 * This contains the Home apresentation section
 * @returns {React.Component} productor form
 */
const HomeApresentation = ({ onClick }) => (
  <HomeWrapper>
    <Wrapper>
      <Content>
        <Logo src="/images/colorful-logo.svg" alt="Som, Sistema Operacional da Música" />
        <Title>Sistema Operacional da Música</Title>
        <Description>
          A plataforma para aceleração de oportunidades da música brasileira
        </Description>
        <IDASignupButton
          onClick={onClick}
        />
      </Content>
    </Wrapper>
  </HomeWrapper>
);

HomeApresentation.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HomeApresentation;
