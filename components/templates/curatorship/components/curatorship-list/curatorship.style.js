import styled from 'styled-components';
import { getGradient } from '../../../../../settings/gradients';

export const CuratorshipListWrapper = styled.div`
  width: 100%;
`;

export const CuratorshipTabs = styled.ul`
  display: flex;
  gap: 16px;

  margin-bottom: 28px;
`;

export const CuratorshipTab = styled.li`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;

  cursor: pointer;

  color: ${({ selected }) => (selected ? '#ffffff' : 'rgba(255, 255, 255, 0.5)')};
`;

export const List = styled.ul`
  display: grid;
  gap: 20px;
  padding-bottom: 160px;
`;

// CARD

export const SubscriptionCard = styled.li`
  display: flex;
  gap: 12px;

  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;

    > div {
      display: flex;
      justify-content: space-between;

      width: 100%;
    }
  }
`;

export const SubscriberAvatar = styled.figure`
  width: 60px;
  height: 60px;

  border-radius: 50%;

  background: ${getGradient()};

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    object-fit: cover;
    object-position: center;
  }

  img[src=''] {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 42px;
    height: 42px;
  }
`;

export const SubscriberName = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
`;

export const SubscriberType = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: rgba(255, 255, 255, 0.5);
`;

export const SubscriptionDate = styled.time`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;

  color: rgba(255, 255, 255, 0.5);
`;
