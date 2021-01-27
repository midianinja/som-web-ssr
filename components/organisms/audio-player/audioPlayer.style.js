import styled from 'styled-components';
import { white10, white30, purple, white } from '../../../settings/colors';

export const TooltipContainer = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  right: 85px;
  top: -4px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
  }
  ${(props) =>
    !props.show
      ? `
        display: none;   
      `
      : null}
`;

export const Content = styled.div`
  background-color: ${purple};
  position: absolute;
  padding: 5px 15px;
  top: -21px;
  width: 105px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  @media (max-width: 1024px) {
    width: 100px;
    position: relative;
    justify-content: space-arround;
    top: 1px;
    right: auto;
    width: 100%;
  }
`;

export const Triangle = styled.span`
  position: relative;
  display: block;
  width: 30px;
  height: 15px;
  text-align: center;
  overflow: hidden;
  right: 3px;
  bottom: -9px;

  &:after {
    content: '';
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: ${purple};
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.35);
    transform: rotate(45deg);
    bottom: 16px;
  }
  @media (max-width: 1024px) {
    position: absolute;
    right: 77px;
    bottom: -16px;
  }
  ${(props) =>
    !props.show
      ? `
        display: none;   
      `
      : null}
`;

export const Wrapper = styled.div`
  width: 100%;
  ${(props) => props.customStyle}
`;

export const Header = styled.div`
  padding-left: 45px;
  padding-right: 45px;
  text-align: left;
`;

export const Info = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
  padding-right: 10px;
  max-width: calc(100% - 70px);
`;

export const Title = styled.h3`
  font-size: 1em;
  font-weight: 400;
  margin-bottom: 3px;
`;

export const Album = styled.h4`
  font-size: 0.7142857143em;
  font-weight: 400;
  color: ${white30};
`;

export const List = styled.ul`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 30px;
  ${(props) => props.customStyle}
`;

export const Track = styled.li.attrs({ className: 'track' })`
  width: 100%;
  display: block;
  border-top: solid 0.5px ${white10};
  position: relative;

  transition-duration: 2s;
  transition-property: auto;

  :hover + .track {
    border-top: none;
  }
`;

export const TrackContainer = styled.div`
  width: 100%;
  height: 48px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: ${white10};
    border-radius: 40px;
    border-top: none;
  }
`;

export const TrackText = styled.input`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 0.7142857143em;
  color: ${white}
  font-weight: 300;
  ${(props) =>
    props.disabled
      ? ''
      : `
    border-bottom: 1px solid ${white};
    :focus {
      border-bottom: 1px solid ${white};
    }
  `}
`;

export const TrackInfo = styled.div`
  align-items: center;
`;

export const TrackTime = styled.label`
  font-size: 0.8571428571em;
  font-weight: 300;
`;

export const TrackLikedIcon = styled.img`
  width: 20px;
  height: 14px;
  vertical-align: middle;
  margin-right: 10px;
  margin-top: -2px;
`;

export const TrackEditIcon = styled.img`
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-right: 10px;
  margin-top: -2px;
  cursor: pointer;
`;

export const TooltipIcon = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;
  cursor: pointer;

  ${(props) => (props.show ? '' : 'display: none;')}
`;

export const TrackHeaderWrapper = styled.div`
  display: block;
`;
