import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../atoms/avatar/avatar';
import {
  Wrapper, Card, ListWrapper, Title,
  avatarCustomStyle, ArtistNameWrapper, ArtistName, ApprovedTag,
} from './subscribedArtists.style';

const renderArtists = (artists, artistClick, approveds) => [...approveds, ...artists]
  .map((artist) => {
    const src = artist && artist.avatar_image ? artist.avatar_image.mimified : '';
    return (
      <Card key={artist.id} id={artist.id} onClick={() => artistClick(artist.id)}>
        <ApprovedTag
          show={approveds.findIndex(({ id }) => artist.id === id) !== -1}
        >
          APROVADO
        </ApprovedTag>
        <Avatar src={src} customStyle={avatarCustomStyle} />
        <ArtistNameWrapper>
          <ArtistName>{artist.name}</ArtistName>
        </ArtistNameWrapper>
      </Card>
    );
  });


const SubscribedArtists = ({ artists, artistClick, approveds }) => (
  <Wrapper>
    <Title>Artistas Inscritos</Title>
    <ListWrapper>{renderArtists(artists, artistClick, approveds)}</ListWrapper>
  </Wrapper>
);

const imageShape = {
  mimified: PropTypes.string,
};

const artistShape = {
  avatar_image: PropTypes.shape(imageShape),
  name: PropTypes.string,
};

const approvedsShape = {
  _id: PropTypes.string.isRequired,
};

SubscribedArtists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape(artistShape)),
  artistClick: PropTypes.func.isRequired,
  approveds: PropTypes.arrayOf(PropTypes.shape(approvedsShape)),
};

SubscribedArtists.defaultProps = {
  artists: [],
  approveds: [],
};

export default SubscribedArtists;
