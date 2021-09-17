import styled from 'styled-components';
import {
  black50,
  white,
  black,
  green,
  red,
  gray04,
  secondaryGreen,
  secondaryRed
} from '../../../settings/colors';
import { getGradient } from '../../../settings/gradients';

export const ArtistCurationshipModalWrapper = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 30;
  overflow: auto;
  background-color: ${black50};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const CloseIcon = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const ProfileImage = styled.figure`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${getGradient()};

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }

  > img {
    width: 100%;
    height: 100%;
    display: ${({ src }) => (src ? 'inline-block' : 'none')};
  }
`;

export const ArtistWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ArtistInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 290px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const ArtistName = styled.h2`
  font-size: 1.5em;
  max-height: 50px;
  overflow: hidden;
  text-align: left;
  line-height: 2.2em;
  color: ${white};
  white-space: normal;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ArtistLabel = styled.label`
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;

  letter-spacing: 3px;
  text-transform: uppercase;

  color: #ffffff;
`;

export const Label = styled.p`
  font-size: 0.8em;
  padding-top: 20px;
`;

export const Empty = styled.p`
  color: ${gray04};
  padding: 24px;
  display: flex;
  justify-content: center;
  letter-spacing: 0.1em;
  align-items: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const Bold = styled.label`
  font-weight: bold;
`;

export const GreenBold = styled.label`
  font-weight: bold;
  color: ${white};
`;

export const RedBold = styled.label`
  font-weight: bold;
  color: ${white};
`;

export const ArtistDescription = styled.p`
  font-size: 14px;
  line-height: 1em;
  color: ${white};
  text-align: left;
  font-weight: 100;
  width: 100%;
`;

export const ProfileLink = styled.a`
  font-size: 0.7em;
  line-height: 1em;
  padding-top: 16px;
  color: ${green};
  cursor: pointer;
`;

export const CoverWrapper = styled.div`
  width: 100%;
  z-index: 0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 10px;
  // text-align center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  border-radius: 20px;
  max-height: 600px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #000;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 0;
  }
`;

export const WhiteZone = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${({ approved }) => {
    if (!approved) return white;
    return approved === 'approved' ? '#20a676' : red;
  }};
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ approved }) => (approved ? white : black)};

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
`;

export const aprroveButtonStyle = `
  padding: 7px 21px;
  height: auto;
  background-color: ${secondaryGreen};
  margin: 0 7px;

  &:hover {
    background-color: ${green};
  }
`;

export const reproveButtonStyle = `
  padding: 7px 21px;
  height: auto;
  background-color: ${red};

  &:hover {
    background-color: ${secondaryRed};
  }
`;

export const audioListStyle = `
  max-height: 122px;
  overflow-x: auto;
  @media (max-width: 768px) {
    padding-bottom: 100px;
    max-height: none;
  }
`;
export const resetSubscriptionStyle = `
  margin-bottom: 10px;
  background-color: transparent;
  color: ${white};
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    background-color: transparent;
  }
`;
