import React from 'react';
import {
  Container, Content, SocialList,
  Social, SocialIcon,
} from './homeNewsLetter.style';

const OpenSource = () => (
  <Container>
    <Content>
      <SocialList>
        <Social href="https://www.facebook.com/sompontovc">
          <SocialIcon src="/icons/facebook-purple.svg" alt="Acesse o Sistema Operacional da Música no Facebook" />
        </Social>
        <Social href="https://www.instagram.com/som.vc">
          <SocialIcon src="/icons/instagram-purple.svg" alt="Acesse o Sistema Operacional da Música no Instagram" />
        </Social>
        <Social href="https://twitter.com/sompontovc">
          <SocialIcon src="/icons/twitter-purple.svg" alt="Acesse o Sistema Operacional da Música no Twitter" />
        </Social>
      </SocialList>
    </Content>
  </Container>
);

export default OpenSource;
