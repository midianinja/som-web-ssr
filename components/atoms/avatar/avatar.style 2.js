import styled from 'styled-components';
import { getGradient } from '../../../settings/gradients';

export const Wrapper = styled.div`
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background: ${getGradient()};
  ${(props) => props.customStyle}
`;

export const PreLoaderImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${(props) => {
    const { src } = props;
    return !src ? 0 : 1;
  }};
  object-fit: cover;
  transition-property: opacity;
  transition-duration: 1s;
  transition-delay: 0.5s;
  overflow: hidden;
`;
