import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../atoms/primary-button/PrimaryButton';

import {
  HomeWrapper, Wrapper,
  Content, Logo, Title,
  Description, buttonStyle,
} from './homeApresentation.style';

const Home = ({ onClick }) => (
  <HomeWrapper>
    <Wrapper>
      <Content>
        <Logo src="/images/colorful-logo.svg" alt="Som, Sistema Operacional da Música" />
        <Title>Sistema Operacional da Música</Title>
        <Description>
          A plataforma para aceleração de oportunidades da música brasileira
        </Description>
        <PrimaryButton
          onClick={onClick}
          customStyle={buttonStyle}
        >
          Inscrever-se
        </PrimaryButton>
      </Content>
    </Wrapper>
  </HomeWrapper>
);

Home.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Home;
