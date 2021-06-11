import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 37px;
  margin-bottom: 37px;

  @media (min-width: 768px) {
    margin-top: 52px;
    margin-bottom: 52px;
  }
`;

export const RowsWrapper = styled.div`
  transition-duration: 0.4s;
  transform: translateX(${({ translate }) => translate}px);
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;

  &:nth-child(even) {
    transform: translateX(30px);
  }

  @media (min-width: 768px) {
    gap: 16px;

    &:nth-child(even) {
      transform: translateX(72px);
    }
  }
`;

export const CommunityUser = styled.div``;

export const Avatar = styled.div`
  display: inline-block;

  width: 71px;
  height: 71px;

  background-color: #f1f1f1;
  background-size: cover;
  background-position: center;

  border-radius: 50%;

  overflow: hidden;
  border: solid 1px #f1f1f1;

  @media (min-width: 768px) {
    width: 147px;
    height: 147px;
  }
`;

export const PlaceholderAvatar = styled.div`
  display: inline-block;

  width: 71px;
  height: 71px;

  background-color: #f1f1f1;
  background-size: cover;
  background-position: center;

  border-radius: 50%;

  @media (min-width: 768px) {
    width: 147px;
    height: 147px;
  }
`;

export const Info = styled.div`
  display: none;
`;

export const Name = styled.h3``;

export const Label = styled.span``;

export const Locale = styled.span``;

export const IconWrapper = styled.div`
  z-index: 1;
  position: absolute;

  &:first-child {
    display: flex;
    align-items: center;

    left: 16px;
    top: 0;

    height: 100%;

    @media (min-width: 768px) {
      left: 122px;
    }
  }

  &:last-child {
    display: flex;
    align-items: center;

    right: 16px;
    top: 0;

    height: 100%;

    @media (min-width: 768px) {
      right: 122px;
    }
  }

  > svg {
    border-radius: 50%;
    cursor: pointer;
  }
`;
