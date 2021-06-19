import React from 'react';
import PropTypes from 'prop-types';
import {
  CarouselContent,
  CarouselItem,
  ItemImage,
  ItemContent,
  Tag,
  ItemTitle,
  ItemDescription
} from './carousel-news.style';

/**
 *
 * @param {*} items
 * @returns
 */
const renderItems = (items) =>
  items.map((item) => (
    <CarouselItem key={item.id}>
      <ItemImage src={item.image_uri} alt="" />
      <ItemContent>
        <div>
          <Tag>Notícias</Tag>
        </div>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDescription>{item.description}</ItemDescription>
      </ItemContent>
    </CarouselItem>
  ));

/**
 *
 * @returns
 */
const CarouselNews = ({ opportunities }) => (
  <CarouselContent quantity={opportunities.length}>{renderItems(opportunities)}</CarouselContent>
);

CarouselNews.propTypes = {
  opportunities: PropTypes.array.isRequired
};

export default CarouselNews;
