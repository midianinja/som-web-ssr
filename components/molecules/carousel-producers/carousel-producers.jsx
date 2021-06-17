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
} from './carousel-producers.style';

/**
 *
 * @param {*} items
 * @returns
 */
const renderItems = (items) =>
  items.map((item) => (
    <CarouselItem key={item.id}>
      <ItemImage src={item.image} alt="" />
      <ItemContent>
        <div>
          <Tag>Oportunidade</Tag>
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
const CarouselProducers = ({ opportunities }) => (
  <CarouselContent quantity={opportunities.length}>{renderItems(opportunities)}</CarouselContent>
);

CarouselProducers.propTypes = {
  opportunities: PropTypes.array.isRequired
};

export default CarouselProducers;
