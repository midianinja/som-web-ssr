import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IDASignupButton from '../../atoms/ida-signup-button/idaSignupButton';
import { HomeWrapper, Wrapper, Content, Logo, Title, Description } from './homeApresentation.style';

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
const HomeApresentation = ({ onClick }) => {
  const [bgSrc, setBgSrc] = useState('');

  useEffect(() => {
    const bg = '/images/colorful-logo.svg';
    load(bg, setBgSrc);
  }, []);

  return (
    <HomeWrapper>
      <Wrapper>
        <Content>
          <Logo src={bgSrc} alt="Som, Sistema Operacional da Música" />
          <Title>Sistema Operacional da Música</Title>
          <Description>
            A plataforma para aceleração de oportunidades da música brasileira
          </Description>
          <IDASignupButton onClick={onClick} />
        </Content>
      </Wrapper>
    </HomeWrapper>
  );
};

HomeApresentation.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default HomeApresentation;
