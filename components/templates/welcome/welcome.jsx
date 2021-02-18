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
      <Title>Seja bem vinde ao S.O.M,</Title>
      <Name>{state.auth.username}</Name>
      <Footer>
        <Text>Conheça os eventos e as oportunidades, inscreva-se nos que se interessar!</Text>
        <PrimaryButton
          onClick={() => {
            router.push('/wall');
          }}
          color="secondaryOrange">
          Ver mural
        </PrimaryButton>
      </Footer>
    </Wrapper>
  );
};

export default Welcome;
