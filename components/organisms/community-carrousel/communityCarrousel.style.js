import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin-top: 52px;
  margin-bottom: 52px;
`;

export const RowsWrapper = styled.div`
  transition-duration: 0.4s;
  transform: translateX(${({ translate }) => translate}px);
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;

  &:nth-child(even) {
    transform: translateX(72px);
  }
`;

export const CommunityUser = styled.div``;

export const Avatar = styled.img`
  display: inline-block;

  width: 147px;
  height: 147px;

  background-color: #f1f1f1;
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-position: center;

  border-radius: 50%;
`;

export const PlaceholderAvatar = styled.div`
  display: inline-block;

  width: 147px;
  height: 147px;

  background-color: #f1f1f1;
  background-size: cover;
  background-position: center;

  border-radius: 50%;
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

    left: 122px;
    top: 0;

    height: 100%;
  }

  &:last-child {
    display: flex;
    align-items: center;

    right: 122px;
    top: 0;

    height: 100%;
  }

  > svg {
    border-radius: 50%;
    cursor: pointer;
  }
`;
