import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import PrimaryButton from '../../atoms/primary-button/PrimaryButton';
import Store from '../../../store/Store';
import {
  Wrapper, Title, Name, Text,
  Footer,
} from './welcome.style';

const Welcome = () => {
  const router = useRouter();
  const { state } = useContext(Store);

  return (
    <Wrapper>
      <Title>Seja bem vinde ao S.O.M,</Title>
      <Name>{state.auth.username}</Name>
      <Footer>
        <Text>Conheça os eventos e inscreva-se</Text>
        <PrimaryButton
          onClick={() => {
            router.push('/wall');
          }}
          color="secondaryOrange"
        >
          Ver eventos!
        </PrimaryButton>
      </Footer>
    </Wrapper>
  );
}

export default Welcome;
