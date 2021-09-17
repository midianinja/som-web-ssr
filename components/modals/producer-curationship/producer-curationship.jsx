import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Cover from '../../atoms/cover/cover';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import {
  ProducerCurationshipModalWrapper,
  CloseWrapper,
  CloseIcon,
  ProfileImage,
  ProducerWrapper,
  ProducerInfos,
  ProducerName,
  ProducerLabel,
  Label,
  Bold,
  GreenBold,
  RedBold,
  ProducerDescription,
  ProfileLink,
  CoverWrapper,
  HeaderWrapper,
  Container,
  WhiteZone,
  ButtonsWrapper,
  aprroveButtonStyle,
  reproveButtonStyle,
  resetSubscriptionStyle
} from './producer-curationship.style';

const curatorAction = ({ opportunity, producer, approveAction, reproveAction }) => (
  <WhiteZone>
    <Label>
      <Bold>{`${producer?.name} `}</Bold>
      se inscreveu em
      <Bold>{` ${opportunity?.name} `}</Bold>
    </Label>
    <ButtonsWrapper>
      <PrimaryButton customStyle={aprroveButtonStyle} onClick={approveAction}>
        Aprovar
      </PrimaryButton>
      <PrimaryButton onClick={reproveAction} customStyle={reproveButtonStyle}>
        Reprovar
      </PrimaryButton>
    </ButtonsWrapper>
  </WhiteZone>
);

const resetRateAction = ({ opportunity, producer, resetSubscriptionAction }) => (
  <WhiteZone approved={producer?.approved}>
    <Label>
      Banda
      {producer?.approved === 'approved' ? (
        <GreenBold>{' aprovada '}</GreenBold>
      ) : (
        <RedBold>{' reprovada '}</RedBold>
      )}
      para o<Bold>{` ${opportunity?.name} `}</Bold>
    </Label>
    <PrimaryButton onClick={resetSubscriptionAction} customStyle={resetSubscriptionStyle}>
      Reavaliar produtor
    </PrimaryButton>
  </WhiteZone>
);

const ProducerCurationshipModal = ({
  producer,
  opportunity,
  closeModal,
  resetSubscriptionAction,
  reproveAction,
  approveAction
}) => {
  const router = useRouter();

  if (!producer) return null;

  return (
    <ProducerCurationshipModalWrapper
      id="Producers-curationship"
      onClick={() => {
        closeModal();
      }}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CoverWrapper>
          <Cover customStyle="padding: 0; min-height: 100px;" cover={producer?.cover}>
            <HeaderWrapper>
              <CloseWrapper>
                <CloseIcon onClick={closeModal} src="/icons/close-white.svg" />
              </CloseWrapper>
              <ProducerWrapper>
                <ProfileImage>
                  <img alt="" src={producer?.photo} />
                </ProfileImage>
                <ProducerInfos>
                  <ProducerLabel>Produtor</ProducerLabel>
                  <ProducerName>{producer?.name}</ProducerName>
                  <ProducerDescription>
                    {producer?.description.slice(0, 100)}
                    {producer?.description.length > 100 ? '...' : ''}
                  </ProducerDescription>
                  <ProfileLink onClick={() => router.push(`/producer/${producer?.username}`)}>
                    Ver perfil completo
                  </ProfileLink>
                </ProducerInfos>
              </ProducerWrapper>
            </HeaderWrapper>
          </Cover>
        </CoverWrapper>
        {producer.approved
          ? resetRateAction({ opportunity, producer, resetSubscriptionAction })
          : curatorAction({ opportunity, producer, approveAction, reproveAction })}
      </Container>
    </ProducerCurationshipModalWrapper>
  );
};

const producerShape = {
  cover: PropTypes.object,
  about: PropTypes.string,
  approved: PropTypes.string
};

curatorAction.propTypes = {
  producer: PropTypes.shape(producerShape).isRequired,
  reproveAction: PropTypes.func.isRequired,
  approveAction: PropTypes.func.isRequired
};

resetRateAction.propTypes = {
  Producer: PropTypes.shape(producerShape).isRequired,
  resetSubscriptionAction: PropTypes.func.isRequired
};

ProducerCurationshipModal.propTypes = {
  producer: PropTypes.shape(producerShape).isRequired,
  opportunity: PropTypes.shape({ name: PropTypes.string }).isRequired,
  closeModal: PropTypes.func.isRequired,
  reproveAction: PropTypes.func.isRequired,
  approveAction: PropTypes.func.isRequired,
  resetSubscriptionAction: PropTypes.func.isRequired
};

export default ProducerCurationshipModal;
