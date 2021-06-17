import React from 'react';
import PropTypes from 'prop-types';
import {
  CarouselContent,
  CarouselItem,
  ItemImageWrapper,
  ItemImage,
  ItemContent,
  ItemTitle,
  ItemDescription,
  Tag
} from './carouselHighlight.style';

/**
 *
 * @param {*} items
 * @returns
 */
const renderItems = (items) =>
  items.map((item) => (
    <CarouselItem key={item.id}>
      <ItemImageWrapper>
        <ItemImage src={item.image} alt="" />
      </ItemImageWrapper>
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
const CarouselHighlight = ({ opportunities }) => (
  <CarouselContent quantity={opportunities.length}>{renderItems(opportunities)}</CarouselContent>
);

CarouselHighlight.propTypes = {
  opportunities: PropTypes.array.isRequired
};

export default CarouselHighlight;
