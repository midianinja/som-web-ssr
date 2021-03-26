import React from 'react';
import PropTypes from 'prop-types';
import SlimButton from '../../atoms/slim-button/slimButton';
import {
  Card, Cover, Title, Text,
  ActionWrapper, ContentWrapper,
} from './articleCard.style';

const ArticleCard = ({
  title, description, cover, url,
}) => (
  <Card>
    <Cover src={cover} alt="" />
    <ContentWrapper>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <ActionWrapper>
        <SlimButton
          color="white"
          onClick={() => {
            window.open(url);
          }}
        >
          Ler mais
        </SlimButton>
      </ActionWrapper>
    </ContentWrapper>
  </Card>
);

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ArticleCard;
