import React from 'react';
import PropTypes from 'prop-types';
import { CarouselContent, CarouselItem } from './carousel-artists.style';

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
const CarouselArtists = ({ opportunities }) => (
  <CarouselContent quantity={opportunities.length}>{renderItems(opportunities)}</CarouselContent>
);

CarouselArtists.propTypes = {
  opportunities: PropTypes.array.isRequired
};

export default CarouselArtists;
