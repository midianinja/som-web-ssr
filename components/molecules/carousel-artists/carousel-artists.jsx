import React, { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import {
  CarouselContent,
  CarouselItem,
  CarouselWrapper,
  ItemImage,
  ItemContent,
  ItemTitle,
  Tag,
  Controls,
  IconWrapper,
  Wrapper
} from './carousel-artists.style';

/**
 *
 * @param {*} items
 * @returns
 */
const renderItems = (items) =>
  items.map((item) => (
    <CarouselItem key={item.id}>
      <ItemImage src={item.photo?.mimified} alt="" />
      <ItemContent>
        <div>
          <Tag>Oportunidade</Tag>
        </div>
        <ItemTitle>{item.name}</ItemTitle>
      </ItemContent>
    </CarouselItem>
  ));

/**
 *
 * @param {*} param0
 */
const initListeners = async ({
  layoutManager,
  opportunities,
  page,
  carouselRef,
  setLayoutManager,
  setPage
}) => {
  let mc = layoutManager;
  if (!mc) {
    const Hammer = (await import('hammerjs')).default;

    mc = new Hammer.Manager(carouselRef.current);

    const Swipe = new Hammer.Swipe({});
    mc.add(Swipe);

    setLayoutManager(mc);
  } else {
    layoutManager.off('swipeleft');
    layoutManager.off('swiperight');
  }

  mc.on('swipeleft', () => {
    if (page < opportunities.length - 1) {
      const newPage = page + 1;
      setPage(newPage);
    }
  });

  mc.on('swiperight', () => {
    if (page > 0) {
      setPage(page - 1);
    }
  });
};

/**
 *
 * @returns
 */
const CarouselArtists = ({ opportunities }) => {
  const [layoutManager, setLayoutManager] = useState(null);
  const [page, setPage] = useState(0);
  const carouselRef = useRef();

  useLayoutEffect(() => {
    initListeners({
      layoutManager,
      opportunities,
      page,
      carouselRef,
      setLayoutManager,
      setPage
    });

    return () => {
      if (layoutManager) {
        layoutManager.off('swipeleft');
        layoutManager.off('swiperight');
      }
    };
  }, [page, opportunities]);

  return (
    <Wrapper>
      <CarouselWrapper>
        <CarouselContent ref={carouselRef} card={page} quantity={opportunities.length}>
          {renderItems(opportunities)}
        </CarouselContent>
      </CarouselWrapper>
      <Controls>
        <IconWrapper
          onClick={() => {
            if (page > 0) {
              setPage(page - 1);
            }
          }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#C1C1C1" fillOpacity="0.4" />
            <path d="M27.0004 14.0006L17 24.001L27.0004 34.0013" stroke="white" strokeWidth="3" />
          </svg>
        </IconWrapper>
        <IconWrapper
          onClick={() => {
            if (page < Math.ceil(opportunities.length / 3) - 1) {
              const newPage = page + 1;
              setPage(newPage);
            }
          }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="24"
              cy="24"
              r="24"
              transform="rotate(-180 24 24)"
              fill="#C1C1C1"
              fillOpacity="0.4"
            />
            <path d="M20.9996 33.9994L31 23.999L20.9996 13.9987" stroke="white" strokeWidth="3" />
          </svg>
        </IconWrapper>
      </Controls>
    </Wrapper>
  );
};

CarouselArtists.propTypes = {
  opportunities: PropTypes.array.isRequired
};

export default CarouselArtists;
