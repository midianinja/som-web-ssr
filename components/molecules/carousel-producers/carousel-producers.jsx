import React from 'react';
import PropTypes from 'prop-types';
import { CarouselContent, CarouselItem } from './carousel-producers.style';

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
const CarouselProducers = ({ opportunities }) => (
  <CarouselContent quantity={opportunities.length}>{renderItems(opportunities)}</CarouselContent>
);

CarouselProducers.propTypes = {
  opportunities: PropTypes.array.isRequired
};

export default CarouselProducers;
