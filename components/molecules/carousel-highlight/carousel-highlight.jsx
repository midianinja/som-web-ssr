import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import {
  CarouselContent,
  CarouselItem,
  ItemImageWrapper,
  ItemImage,
  Indicators,
  IndicatorBall,
  Controls,
  IconWrapper
} from './carouselHighlight.style';
import { useRouter } from 'next/dist/client/router';

/**
 *
 * @param {*} param0
 */
const CarouselItemComponent = ({ item, onClick }) => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    const image = new Image();
    image.onload = () => setSrc(item.image);
    image.src = item.image;
  }, []);

  return (
<<<<<<< HEAD
    <CarouselItem onClick={() => onClick(item.oportunity?.id, item.link)}>
=======
    <CarouselItem onClick={() => onClick(item?.opportunity?.id, item.link)}>
>>>>>>> main
      <ItemImageWrapper>
        <ItemImage src={src} alt="" />
      </ItemImageWrapper>
    </CarouselItem>
  );
};

CarouselItemComponent.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func
};

/**
 *
 * @param {*} items
 * @returns
 */
const renderItems = (items, onClick) =>
  items.map((item) => <CarouselItemComponent key={item.id} item={item} onClick={onClick} />);

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
 * @param {*} param0
 */
const initListeners = async ({
  layoutManager,
  opportunities,
  mainCard,
  carouselRef,
  setLayoutManager,
  setMainCard
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
    if (mainCard < opportunities.length - 1) {
      const newMainCard = mainCard + 1;
      setMainCard(newMainCard);
    }
  });

  mc.on('swiperight', () => {
    if (mainCard > 0) {
      setMainCard(mainCard - 1);
    }
  });
};

/**
 *
 * @returns
 */
const CarouselHighlight = ({ opportunities }) => {
  const router = useRouter();
  const [layoutManager, setLayoutManager] = useState(null);
  const [mainCard, setMainCard] = useState(0);
  const carouselRef = useRef();

  const handleCardClick = (id, link) => {
    if (link) window.location.href = link;
    else router.push(`/event/${id}`);
  };

  useLayoutEffect(() => {
    initListeners({
      layoutManager,
      opportunities,
      mainCard,
      carouselRef,
      setLayoutManager,
      setMainCard
    });

    const interval = setInterval(() => {
      if (mainCard >= 0 && mainCard < opportunities.length - 1) {
        setMainCard(mainCard + 1);
      } else {
        setMainCard(0);
      }
    }, 5000);

    return () => {
      if (layoutManager) {
        layoutManager.off('swipeleft');
        layoutManager.off('swiperight');
      }

      clearInterval(interval);
    };
  }, [mainCard]);

  return (
    <>
      <CarouselContent ref={carouselRef} card={mainCard} quantity={opportunities.length}>
        {renderItems(opportunities, handleCardClick)}
      </CarouselContent>
      <Controls>
        <IconWrapper
          onClick={() => {
            if (mainCard > 0) {
              setMainCard(mainCard - 1);
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
            if (mainCard < opportunities.length - 1) {
              const newMainCard = mainCard + 1;
              setMainCard(newMainCard);
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
      <Indicators>{renderIndicators(opportunities.length, mainCard + 1)}</Indicators>
    </>
  );
};

CarouselHighlight.propTypes = {
  opportunities: PropTypes.array.isRequired
};

export default CarouselHighlight;
