import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Image,
  Title,
  ImageContainer,
  followButtonCustomStyled,
  buttonCustomStyled,
  ActionWrapper,
  EditIcon,
  FollowText,
  FollowNumber
} from './artistCard.style';
import TagList from '../tag-list/tagList';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import { useRouter } from 'next/router';

const ArtistCard = ({
  onClick,
  followAction,
  unfollowAction,
  artists,
  followersAmount,
  isFollowing,
  isUserArtist,
  followToggle,
  editAction
}) => {
  const [stateOccupations, setStateOccupations] = useState([]);
  const colors = ['green', 'orange', 'magenta', 'yellow'];
  const router = useRouter();

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
      artists.musical_styles.map(({ id, name }) => ({
        id,
        text: name,
        color: colors[Math.floor(Math.random() * colors.length)]
      }))
    );
  }, []);

  return (
    <Container>
      <ImageContainer>
        <Image onClick={() => router.push(`/artist/${artists.id}`)} src={artists.photo}></Image>
      </ImageContainer>

      <Title onClick={() => router.push(`/artist/${artists.id}`)}>{artists.name} </Title>

      <FollowText>
        <FollowNumber>{followersAmount}</FollowNumber>
        seguidores
      </FollowText>

      <ActionWrapper>
        {!isUserArtist
          ? renderSubiscribeActions(isFollowing, followToggle)
          : renderEditAction(editAction)}
      </ActionWrapper>
    </Container>
  );
};

ArtistCard.propTypes = {
  customStyle: PropTypes.string.isRequired,
  artists: PropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  followToggle: PropTypes.bool.isRequired
};

export default ArtistCard;
