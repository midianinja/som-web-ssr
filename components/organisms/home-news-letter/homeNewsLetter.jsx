import React from 'react';
import NewsletterInput from '../../atoms/newsletter-input/NewsletterInput';
import {
  Footer, Content, SocialList, Social,
  SocialIcon, FormWrapper, Title, Text,
  Logo,
} from './homeNewsLetter.style';

/**
 * function that render News Letter React Component
 * @param {object} props component props
 * @returns contains NewsLetter Component
 */
const NewsLetter = () => (
  <Footer>
    <Content>
      <FormWrapper>
        <Logo src="/images/logo-black.svg" alt="" />
        <Title>
          Não paramos por aqui 🔥
        </Title>
        <Text>
          O Som está em desenvolvimentos! Insira seu e-mail para receber novidades
        </Text>
        <NewsletterInput
          placeholder="Insira seu e-mail"
        />
      </FormWrapper>
      <SocialList>
        <Social href="https://www.facebook.com/sompontovc">
          <SocialIcon
            src="/icons/facebook-purple.svg"
            alt="Acesse o Sistema Operacional da Música no Facebook"
          />
        </Social>
        <Social href="https://www.instagram.com/som.vc">
          <SocialIcon
            src="/icons/instagram-purple.svg"
            alt="Acesse o Sistema Operacional da Música no Instagram"
          />
        </Social>
        <Social href="https://twitter.com/sompontovc">
          <SocialIcon
            src="/icons/twitter-purple.svg"
            alt="Acesse o Sistema Operacional da Música no Twitter"
          />
        </Social>
      </SocialList>
    </Content>
  </Footer>
);

export default NewsLetter;
