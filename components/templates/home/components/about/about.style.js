import styled from 'styled-components';
import { white, purple, black } from '../../../../../settings/colors';

const zindex = 10;

export const AboutSection = styled.section`
  position: relative;
  padding: 30px;
  background-color: ${purple};
  padding-bottom: 75px;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    padding-bottom: 188px;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-size: 60px;
  color: ${white};
  font-weight: 400;
  line-height: 1.1em;
  text-align: right;
  z-index: ${zindex + 2};

  @media (min-width: 1024px) {
    max-width: 280px;
    margin-left: -80px;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const Subtitle = styled.h3`
  position: relative;
  font-size: 26px;
  color: ${white};
  font-weight: 200;
  line-height: 1.1em;
  text-align: right;
  margin-top: 10px;
  margin-bottom: 30px;
  z-index: ${zindex + 2};

  @media (min-width: 1024px) {
    max-width: 280px;
    margin-left: -80px;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  right: -50px;
  background-color: ${black};
  background-image: url("/images/lp-video-cover.png");
  background-size: cover;
  width: 100%;
  max-width: 709px;
  height: calc(65vw - 60px);
  max-height: 394px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  box-shadow: 0px 50px 80px rgba(0, 0, 0, 0.6);
  z-index: ${zindex + 1};
  cursor: pointer;
  user-select: none;
`;

export const PlayIcon = styled.img`
  z-index: ${zindex + 2};
`;

export const MIcon = styled.img`
  height: 200vw;
  max-height: 1018px;
  position: absolute;
  z-index: ${zindex};
  top: -30px;
  left: calc(-50% - 37vw);

  @media (min-width: 1024px) {
    left: inherit;
    top: -10vh;
    right: -17vw;
  }
`;

