import React from 'react';
import PropTypes from 'prop-types';
import { CarouselContent, CarouselItem } from './carousel-news.style';

/**
 *
 * @param {*} items
 * @returns
 */
const renderItems = (items) =>
  items.map((item) => (
    <CarouselItem key={item.id}>
      <span />
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
