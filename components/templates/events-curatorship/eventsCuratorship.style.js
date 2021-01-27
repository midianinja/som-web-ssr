import styled from 'styled-components';
import {
  black,
  tertiaryBlack,
  secondaryBlack,
  white,
  white50,
  purple,
  green,
  red
} from '../../../settings/colors';

export const CuratorshiptWrapper = styled.section`
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  background-color: ${black};
  color: white;
  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

export const Title = styled.h1`
  width: 100%
  max-width: 900px;
  font-size: 2em;
  line-height: 2em;
  padding-left: 200px;
  @media (max-width: 768px) {
    padding-left: 40px;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  max-height: 70vh;
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: none;
    height: auto;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 258px;
  // align-items: center;
`;

export const MenuOption = styled.a`
  padding: 7px 40px;
  color: white;
  cursor: pointer;
  ${(props) => (props.selected ? `color: ${purple};` : '')}
`;

export const Table = styled.div`
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  width: 100%;
`;

export const HSmallCol = styled.div`
  font-weight: lighter;
  letter-spacing: 3px
  font-size: .6em;
  text-transform: uppercase;
  width: 30%;
  color: ${white50};
  text-align: center;
  background-color: transparent;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HBigCol = styled.div`
  font-weight: lighter;
  letter-spacing: 3px
  font-size: .6em;
  text-transform: uppercase;
  color: ${white50};
  text-align: center;
  width: 70%;
  background-color: transparent;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SmallCol = styled.div`
  width: 30%;
  padding: 10px 0;
  background-color: ${tertiaryBlack};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.hover ? `background-color: ${secondaryBlack};` : '')}
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BigCol = styled.div`
  display: flex;
  width: 70%;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  ${(props) => (props.hover ? `background-color: ${black};` : '')}
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Body = styled.div`
  width: 100%;
  border-radius: 20px
  height: 100%;
  padding-bottom: 10px;
  max-height: calc(100vh - 94px);
  overflow-x: auto;
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar{
    width: 7px;
    height: 7px;
    background-color: transparent;
    padding-left: 10px
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #5A5A5A;
  }
  @media (max-width: 768px) {
    border-radius: 0px;
    max-height: none;
  }
`;

export const Line = styled.div`
  display: flex;
  background-color: ${secondaryBlack};
  width: 100%;
  margin: 1px 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px 0;
  }
`;

export const Name = styled.label`
  color: ${white};
  font-size: 0.9em;
`;

export const Profile = styled.label`
  color: ${white50};
  font-size: 0.6em;
  padding-left: 4px;
`;
export const EventName = styled.label`
  color: ${white};
  font-size: 0.6em;
`;

export const SubscriptionStatus = styled.div`
  ${(props) => (props.hidde ? 'display: none;' : '')}
  ${(props) =>
    props.approved === 'aprovada' ? `background-color: ${green}` : `background-color: ${red}`}
  height: 60px;
  position: absolute;
  width: 60px;
  top: -30px;
  right: -30px;
  transform: rotate(45deg);
  @media (min-width: 769px) {
    width: auto;
    height: auto;
    transform: rotate(0deg);
    top: auto;
    right: auto;
    position: relative;
    background-color: transparent;
  }
`;

export const ArtistiInfos = styled.div`
  display: flex;
  align-items: center;
`;

export const SubscriptionLabel = styled.label`
  font-size: 0.8em;
  color: ${white50};
  @media (max-width: 768px) {
    display: none;
  }
`;
