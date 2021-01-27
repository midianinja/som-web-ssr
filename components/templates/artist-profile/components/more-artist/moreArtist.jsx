import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../atoms/avatar/avatar';
import {
  Wrapper,
  Card,
  ListWrapper,
  Title,
  avatarCustomStyle,
  ArtistName
} from './moreArtist.style';

const renderArtists = (artists, history) =>
  artists.map((art) => (
    <Card onClick={() => history.push(`/artist/${art.id}`)}>
      <Avatar src={art.avatar_image.mimified} customStyle={avatarCustomStyle} />
      <ArtistName>{art.name}</ArtistName>
    </Card>
  ));

const MoreArtist = ({ artists, history }) => (
  <Wrapper>
    <Title>Bandas Relacionadas</Title>
    <ListWrapper>{renderArtists(artists, history)}</ListWrapper>
  </Wrapper>
);

const artistShape = {
  avatar_image: PropTypes.object,
  name: PropTypes.string
};

MoreArtist.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape(artistShape)),
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

MoreArtist.defaultProps = {
  artists: [],
  history: {}
};

export default MoreArtist;
