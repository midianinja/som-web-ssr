import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import Store from '../../../store/Store';
import { Wrapper, Title, Name, Text, Footer } from './welcome.style';

const Welcome = () => {
  const router = useRouter();
  const { state } = useContext(Store);

  return (
    <Wrapper>
      <Name>Oi, {state.auth.username}</Name>
      <Title>Seja bem vinde ao S.O.M!</Title>
      <Footer>
        <Text>Acesse ou crie oportunidades.</Text>
        <Text>Amplie suas conexões!</Text>
        <PrimaryButton
          customStyle="margin-top: 30px;"
          onClick={() => {
            router.push('/oportunities');
          }}
          color="secondaryOrange">
          Ver mural
        </PrimaryButton>
      </Footer>
    </Wrapper>
  );
};

export default Welcome;
