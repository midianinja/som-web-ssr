import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IDASignupButton from '../../atoms/ida-signup-button/idaSignupButton';
import LinkButton from '../../atoms/link-button/LinkButton';
import {
  HomeWrapper, Wrapper, Content, Logo,
  Title, CTAWrapper, TextWrapper,
} from './homeApresentation.style';

/**
 * function that loading image before render
 * @void
 * @param {string} src image source to be loading
 */
const load = (src, callback) => {
  const img = new Image();

  img.onload = () => {
    callback(src);
  };

  img.src = src;
};

/**
 * This contains the Home apresentation section
 * @returns {React.Component} productor form
 */
const HomeApresentation = ({ signupClick, signinClick }) => {
  const [bgSrc, setBgSrc] = useState('');

  useEffect(() => {
    const bg = '/images/colorful-logo.svg';
    load(bg, setBgSrc);
  }, []);

  return (
    <HomeWrapper>
      <Wrapper>
        <Content>
          <TextWrapper>
            <Logo src={bgSrc} alt="Som, Sistema Operacional da Música" />
            <Title>
              Explore oportunidades na Música Brasileira
            </Title>
          </TextWrapper>
          <CTAWrapper>
            <IDASignupButton onClick={signupClick} />
            <LinkButton color="white" onClick={signinClick}>Já tenho cadastro</LinkButton>
          </CTAWrapper>
        </Content>
      </Wrapper>
    </HomeWrapper>
  );
};

HomeApresentation.propTypes = {
  signinClick: PropTypes.func.isRequired,
  signupClick: PropTypes.func.isRequired,
};

export default HomeApresentation;
