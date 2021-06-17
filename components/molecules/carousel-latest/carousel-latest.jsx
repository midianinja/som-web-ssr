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
} from './carousel-latest.style';

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
const CarouselLatest = ({ opportunities }) => (
  <CarouselContent quantity={opportunities.length}>{renderItems(opportunities)}</CarouselContent>
);

CarouselLatest.propTypes = {
  opportunities: PropTypes.array.isRequired
};

export default CarouselLatest;
