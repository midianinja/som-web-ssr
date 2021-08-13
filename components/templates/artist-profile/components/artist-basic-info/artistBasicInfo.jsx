import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../atoms/avatar/avatar';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import Socials from '../../../../organisms/social/social';
import {
  Wrapper,
  Title,
  TitleAndFollowWrapper,
  ConnectionsWrapper,
  EditIcon,
  FollowNumber,
  FollowText,
  ActionWrapper,
  LerMoreBio,
  About,
  followButtonCustomStyled,
  buttonCustomStyled,
  avatarCustomStyled,
  EmailWrapper
} from './artistBasicInfo.style';

const renderSubiscribeActions = (isFollowing, followToggle) => (
  <Fragment>
    {isFollowing ? (
      <PrimaryButton onClick={followToggle} customStyle={followButtonCustomStyled}>
        Deixar de seguir
      </PrimaryButton>
    ) : (
      <PrimaryButton onClick={followToggle} customStyle={buttonCustomStyled}>
        Seguir
      </PrimaryButton>
    )}
  </Fragment>
);

const renderEditAction = (onClick) => (
  <PrimaryButton onClick={onClick} customStyle={followButtonCustomStyled}>
    <EditIcon src="/icons/edit-white.svg" />
    Editar
  </PrimaryButton>
);

const ArtistBasicInfo = ({
  name,
  email,
  avatar,
  followers,
  following,
  about,
  facebook,
  instagram,
  twitter,
  followToggle,
  isFollowing,
  spotify,
  isUserArtist,
  editAction
}) => {
  const [lerMoreBio, setLerMoreBio] = useState(false);

  return (
    <Wrapper id="infos">
      <Avatar customStyle={avatarCustomStyled} src={avatar} alt={name} />
      <TitleAndFollowWrapper>
        <Title>{name}</Title>
        <ConnectionsWrapper>
          <FollowText>
            <FollowNumber>{followers}</FollowNumber>
            seguidores
          </FollowText>
          <FollowText>
            <FollowNumber>{following}</FollowNumber>
            seguindo
          </FollowText>
        </ConnectionsWrapper>
      </TitleAndFollowWrapper>
      <About>
        {!about ? 'Sem descrição' : ''}
        {!lerMoreBio ? about.slice(0, 200) : about}
        {!lerMoreBio && about.length > 200 ? '...' : ''}
        &nbsp;
        {about.length > 200 ? (
          <LerMoreBio onClick={() => setLerMoreBio(!lerMoreBio)}>
            {!lerMoreBio ? 'Ler mais' : 'Ler menos'}
          </LerMoreBio>
        ) : null}
      </About>
      <ActionWrapper>
        {!isUserArtist
          ? renderSubiscribeActions(isFollowing, followToggle)
          : renderEditAction(editAction)}
        {/* <LinkButton color="white">Ler release</LinkButton> */}
        {!isUserArtist ? (
          <PrimaryButton
            color="transparent"
            hoverColors="transparent"
            customStyle={`
        width: 200px;
        `}
            onClick={() => {
              window.open(`mailto:${email}`, '_blank');
            }}>
            Enviar e-mail
          </PrimaryButton>
        ) : (
          ''
        )}
      </ActionWrapper>

      <Socials facebook={facebook} instagram={instagram} twitter={twitter} spotify={spotify} />
    </Wrapper>
  );
};

ArtistBasicInfo.propTypes = {
  about: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  spotify: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  followToggle: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isUserArtist: PropTypes.bool.isRequired
};

export default ArtistBasicInfo;
