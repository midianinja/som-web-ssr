import styled from 'styled-components';
import { black50, white, purple, black, green, red, gray04 } from '../../../settings/colors';

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

export const ProfileImage = styled.img`
  width: 120px;
  border-radius: 100%;
  @media (max-width: 768px) {
    width: 90px;
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

export const Label = styled.p`
  font-size: 0.8em;
  padding-top: 20px;
`;

export const Empty = styled.p`
  color: ${gray04};
  padding: 20px;
  display: flex;
  justify-content: center;
  letter-spacing: 0.1em;
  align-items: center;
  font-size: 1em;
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const Bold = styled.label`
  font-weight: bold;
`;

export const GreenBold = styled.label`
  font-weight: bold;
  color: ${green};
`;

export const RedBold = styled.label`
  font-weight: bold;
  color: ${red};
`;

export const ArtistDescription = styled.p`
  font-size: 0.7em;
  line-height: 1em;
  color: ${white};
  max-height: 20px;
  overflow: hidden;
  text-align: left;
  font-weight: 100;
  width: 100%;
  white-space: normal;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ProfileLink = styled.a`
  font-size: 0.7em;
  line-height: 1em;
  padding-top: 32px;
  color: ${white};
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
  background-color: ${white};
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${black};
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
  background-color: ${green};
  margin: 0 7px;
`;

export const reproveButtonStyle = `
  padding: 7px 21px;
  height: auto;
  background-color: ${red};
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
  margin-top: 10px;
  background-color: transparent;
  color: ${black};
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    background-color: transparent;
  }
`;
