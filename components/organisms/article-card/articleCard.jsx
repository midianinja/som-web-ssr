import React from 'react';
import PropTypes from 'prop-types';
import SlimButton from '../../atoms/slim-button/slimButton';
import {
  Card, Cover, Title, Text,
  ActionWrapepr,
} from './articleCard.style';

const ArticleCard = ({
  title, description, cover, url,
}) => (
  <Card>
    <Cover src={cover} alt="" />
    <Title>{title}</Title>
    <Text>{description}</Text>
    <ActionWrapepr>
      <SlimButton color="white">Ler mais</SlimButton>
    </ActionWrapepr>
  </Card>
);

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ArticleCard;
