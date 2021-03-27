import React from 'react';
import PropTypes from 'prop-types';
import CommunityMainCard from '../../../../organisms/community-main-card/communityMainCard';
import ArticleCard from '../../../../organisms/article-card/articleCard';
import {
  MovimentOnCommunitySection, ArticleList,
} from './movimentOnCommunity.style';
import { articles } from './movimentOnCommunity.collection';

const renderArticles = ({ onSubscribe }) => articles.map(({
  title, cover, url, shortDescription,
}) => (
  <ArticleCard
    key={title}
    title={title}
    description={shortDescription}
    cover={cover}
    url={url}
    onSubscribe={onSubscribe}
  />
));

const MovimentOnCommunity = ({ onSubscribe }) => (
  <MovimentOnCommunitySection id="community">
    <CommunityMainCard         
      onSubscribe={onSubscribe}
    />
    <ArticleList>
      { renderArticles({ onSubscribe }) }
    </ArticleList>
  </MovimentOnCommunitySection>
);

MovimentOnCommunity.propTypes = {
  onSubscribe: PropTypes.func.isRequired,
};

export default MovimentOnCommunity;
