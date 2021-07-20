import styled from 'styled-components';
import { white, gray } from '../../../../../settings/colors';
import { green2yellow } from '../../../../../settings/gradients';

export const Fieldset = styled.fieldset`
  grid-area: avatar;
  padding: 30px 15px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${white};
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 24px;
`;

export const Span = styled.span`
  color: ${gray};
  font-size: 0.625rem;
`;

export const avatarCustomStyle = `
  border-radius: 12px;
  background: ${green2yellow};
`;
