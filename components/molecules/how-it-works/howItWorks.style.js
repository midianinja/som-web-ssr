import styled from 'styled-components';
import { black, white } from '../../../settings/colors';

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 311px;
  border-radius: 20px;
  padding: 40px 30px;
  background-color: ${black};
  text-align: center;

  svg.fit {
    position: relative;
    top: 23px;
    left: 12px;
  }
`;

export const Content = styled.div`
  position: relative;
  text-align: center;

  margin-top: 20px;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 1.2857142857em;
  margin-bottom: 15px;
  color: ${white};
`;

export const Description = styled.p`
  font-size: 0.875em;
  font-weight: 300;
  line-height: 1.5384615385em;
  white-space: normal;
  color: #909090;
`;
