import React, { useState } from 'react';
import NewsletterInput from '../../atoms/newsletter-input/NewsletterInput';
import HomeOpenSource from '../home-open-source/homeOpenSource';
import Dialog from '../../modals/dialog/dialog';
import { handleCreateNewsLatter } from './homeNewsLetter.controller';
import {
  Footer,
  Content,
  Container,
  SocialList,
  Social,
  SocialIcon,
  FormWrapper,
  Title,
  Text,
  Logo,
  ContentOpenSource,
  LogoContainer
} from './homeNewsLetter.style';

/**
 * function that render News Letter React Component
 * @param {object} props component props
 * @returns contains NewsLetter Component
 */
const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState({});
  return (
    <Footer>
      <ContentOpenSource>
        <HomeOpenSource />
      </ContentOpenSource>
      <Content>
        <LogoContainer>
          <Logo src="/images/logo-black.svg" alt="" />
        </LogoContainer>
        <FormWrapper>
          <Title>
            Não paramos por aqui{' '}
            <span role="img" aria-label="Ícone de foguinho">
              🔥
            </span>
          </Title>
          <Text>O Som está em desenvolvimentos! Insira seu e-mail para receber novidades</Text>
          <NewsletterInput
            placeholder="Insira seu e-mail"
            value={email}
            loading={loading}
            onSubmit={() =>
              handleCreateNewsLatter({
                values: { email },
                setLoading,
                setEmail,
                setDialog
              })
            }
            onChange={(e) => setEmail(e.target.value)}
          />
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
        </FormWrapper>
        <Container>
          {dialog.description ? (
            <Dialog
              isOpen
              title={dialog.title}
              icon={dialog.icon}
              description={dialog.description}
              agreeText={dialog.agreeText}
              disagreeText={dialog.disagreeText}
              confirmAction={dialog.confirmAction}
              disagreeAction={dialog.disagreeAction}
            />
          ) : null}
        </Container>
      </Content>
    </Footer>
  );
};

export default NewsLetter;
