import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TagList from '../tag-list/tagList';
import PrimaryButton from '../../atoms/primary-button/primaryButton';

import {
  Container,
  Image,
  Title,
  ImageContainer,
  FollowNumber,
  FollowText,
  ActionWrapper,
  followButtonCustomStyled,
  buttonCustomStyled,
  EditIcon

} from './producerCard.style';

const ProducersCard = ({
  onClick,
  followAction,
  unfollow,
  producers,
  followersAmount,
  isUserProducer,
  editAction,
  isFollowing,
  followToggle
}) => {
  const [stateOccupations, setStateOccupations] = useState([]);
  const colors = ['green', 'orange', 'magenta', 'yellow'];

  const renderSubiscribeActions = (isFollowing, followToggle) => (
    <>
      {isFollowing ? (
        <PrimaryButton onClick={followToggle} customStyle={followButtonCustomStyled}>
          Deixar de seguir
        </PrimaryButton>
      ) : (
        <PrimaryButton onClick={followToggle} customStyle={buttonCustomStyled}>
          Seguir
        </PrimaryButton>
      )}
    </>
  );

  const renderEditAction = (onClick) => (
    <PrimaryButton onClick={onClick} customStyle={followButtonCustomStyled}>
      <EditIcon src="/icons/edit-white.svg" />
      Editar
    </PrimaryButton>
  );

  useEffect(() => {
    setStateOccupations(
      producers.occupations.map(({ id, label }) => ({
        id: id,
        text: label,
        color: colors[Math.floor(Math.random() * colors.length)]
      }))
    );
  }, []);
  console.log('oi');
  return (
    <Container>
      <ImageContainer>
        <Image onClick={onClick} image={producers.photo}></Image>
      </ImageContainer>
      <TagList
        data={stateOccupations}
        customStyle={`
          padding-left: 30px;
          padding-right: 30px;
          margin-bottom: 20px;
          display: flex;

          @media (min-width: 1024px) {
            padding-left: 0;
            padding-right: 0;
          }
        `}
      />
      <Title>{producers.name} </Title>

      <FollowText>
        <FollowNumber>{followersAmount}</FollowNumber>
        seguidores
      </FollowText>

      <ActionWrapper>
        {!isUserProducer
          ? renderSubiscribeActions(isFollowing, followToggle)
          : renderEditAction(editAction)}
      </ActionWrapper>
    </Container>
  );
};

ProducersCard.propTypes = {
  customStyle: PropTypes.string.isRequired,
  producers: PropTypes.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ProducersCard;
