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
  Tag,
  Indicators,
  IndicatorBall
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
 * @param {number} quantity
 * @param {number} activeIndex
 * @returns
 */
const renderIndicators = (quantity, activeIndex) => {
  const indicators = [];

  for (let count = 1; count <= quantity; count += 1) {
    indicators.push(<IndicatorBall key={`#${count}`} actived={activeIndex === count} />);
  }

  return indicators;
};

/**
 *
 * @returns
 */
const CarouselHighlight = ({ opportunities }) => (
  <>
    <CarouselContent quantity={opportunities.length}>{renderItems(opportunities)}</CarouselContent>
    <Indicators>{renderIndicators(opportunities.length, 1)}</Indicators>
  </>
);

CarouselHighlight.propTypes = {
  opportunities: PropTypes.array.isRequired
};

export default CarouselHighlight;
