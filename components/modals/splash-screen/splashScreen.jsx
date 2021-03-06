import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import { OverlayContainer, StepContainer, Text } from './splashScreen.style';

/**
 *
 */
const SplashScreen = ({ opened, openSOM }) => {
  const [endAnimation3, setEndAnimation3] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <OverlayContainer opened={opened}>
      <StepContainer
        background="/images/home/splash-bg-1.png"
        mobBackground="/images/home/mob-splash-bg-1.png"
        open={currentStep === 0}
        onClick={() => setCurrentStep(currentStep + 1)}>
        <Text>Quando vamos ver aquele show juntes novamente?</Text>
      </StepContainer>
      <StepContainer
        background="/images/home/splash-bg-2.png"
        mobBackground="/images/home/mob-splash-bg-2.png"
        open={currentStep === 1}
        onClick={() => setCurrentStep(currentStep + 1)}>
        <Text>Faça parte da comunidade</Text>
      </StepContainer>
      <StepContainer
        light
        animation3={endAnimation3}
        background="/images/home/splash-bg-3.png"
        mobBackground="/images/home/mob-splash-bg-3.png"
        open={currentStep === 2}
        onClick={() => {
          setEndAnimation3(true);

          setTimeout(() => {
            setCurrentStep(currentStep + 1);
          }, 500);
        }}>
        <Text>Construa a história da nova música brasileira</Text>
      </StepContainer>
      <StepContainer open={currentStep === 3} light>
        <Text>Aproveite as oportunidades</Text>
        <PrimaryButton onClick={openSOM}>Entrar no SOM</PrimaryButton>
      </StepContainer>
    </OverlayContainer>
  );
};

SplashScreen.propTypes = {
  opened: PropTypes.bool.isRequired,
  openSOM: PropTypes.func.isRequired
};

export default SplashScreen;
