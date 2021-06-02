import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 52px;
  margin-bottom: 52px;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;

  &:nth-child(even) {
    transform: translateX(72px);
  }
`;

export const CommunityUser = styled.div``;

export const Avatar = styled.div`
  display: inline-block;

  width: 147px;
  height: 147px;

  background-color: #f1f1f1;
  background-image: url('${({ src }) => src}');

  border-radius: 50%;
`;

export const Info = styled.div`
  display: none;
`;

export const Name = styled.h3``;

export const Label = styled.span``;

export const Locale = styled.span``;
