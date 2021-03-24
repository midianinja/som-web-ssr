import React from 'react';
// import ProPTypes from 'prop-types';
import CommunityMainCard from '../../../../organisms/community-main-card/communityMainCard';
import ArticleCard from '../../../../organisms/article-card/articleCard';
import {
  MovimentOnCommunitySection, ArticleList,
} from './movimentOnCommunity.style';
import { articles } from './movimentOnCommunity.collection';

const renderArticles = () => articles.map(({
  title, cover, url, shortDescription,
}) => (
  <ArticleCard
    key={title}
    title={title}
    description={shortDescription}
    cover={cover}
    url={url}
  />
));

const MovimentOnCommunity = () => (
  <MovimentOnCommunitySection>
    <CommunityMainCard         
      onSubscribe={() => null}
    />
    <ArticleList>
      { renderArticles() }
    </ArticleList>
  </MovimentOnCommunitySection>
);

export default MovimentOnCommunity;
