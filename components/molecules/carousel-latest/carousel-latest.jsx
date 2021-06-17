import React from 'react';
import PropTypes from 'prop-types';
import { CarouselContent, CarouselItem } from './carousel-latest.style';

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
const CarouselLatest = ({ opportunities }) => (
  <CarouselContent quantity={opportunities.length}>{renderItems(opportunities)}</CarouselContent>
);

CarouselLatest.propTypes = {
  opportunities: PropTypes.array.isRequired
};

export default CarouselLatest;
