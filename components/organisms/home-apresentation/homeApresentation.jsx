import React from 'react';
import PropTypes from 'prop-types';
import IDASignupButton from '../../atoms/ida-signup-button/idaSignupButton';
import {
  HomeWrapper, Wrapper, Content, Logo,
  Title, Description,
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
        <IDASignupButton
          onClick={onClick}
        />
      </Content>
    </Wrapper>
  </HomeWrapper>
);

Home.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Home;
