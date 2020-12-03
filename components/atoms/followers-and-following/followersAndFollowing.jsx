import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Followers,
  FNumber,
} from './followersAndFollowing.style';

const FollowersAndFollowing = ({
  nFollowers, nFollowing,
  followersLabel, followingLabel,
}) => (
  <Container>
    <Followers>
      <FNumber>{nFollowers}</FNumber> {followersLabel}
    </Followers>
    <Followers>
      <FNumber>{nFollowing}</FNumber> {followingLabel}
    </Followers>
  </Container>
);

FollowersAndFollowing.propTypes = {
  nFollowers: PropTypes.number,
  nFollowing: PropTypes.number,
  followersLabel: PropTypes.string,
  followingLabel: PropTypes.string,
};

FollowersAndFollowing.defaultProps = {
  nFollowers: 26,
  nFollowing: 142,
  followersLabel: 'Seguidores',
  followingLabel: 'Seguindo',
};

export default FollowersAndFollowing;
