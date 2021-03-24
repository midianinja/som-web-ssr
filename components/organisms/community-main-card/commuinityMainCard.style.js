import styled from 'styled-components';
import { white } from '../../../settings/colors';

const zindex = 1;

export const Card = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  padding: 30px;
  padding-top: 51vw;
`;

export const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 80vw;
  max-height: 827px;
  background-image: url('/images/community-main-card.png');
  top: 0;

  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 101%;
    background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 83.61%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    top: 0;
    left: 0;
    user-select: none;
  }
`;

export const Title = styled.h3`
  font-family: CircularStd;
  font-weight: 900;
  font-size: 28px;
  line-height: 1em;
  color: ${white};
  z-index: ${zindex + 1};
`;

export const Description = styled.p`
  font-family: CircularStd;
  font-weight: 200;
  font-size: 16px;
  line-height: 1.1em;
  color: ${white};
  z-index: ${zindex + 1};
  color: ${white};
`;
