import React from 'react';
import CommunityMainCard from '../../../../organisms/community-main-card/communityMainCard';
// import ProPTypes from 'prop-types';
import {
  MovimentOnCommunitySection,
} from './movimentOnCommunity.style';

const MovimentOnCommunity = () => (
  <MovimentOnCommunitySection>
    <CommunityMainCard         
      onSubscribe={() => null}
    />
  </MovimentOnCommunitySection>
);

export default MovimentOnCommunity;
