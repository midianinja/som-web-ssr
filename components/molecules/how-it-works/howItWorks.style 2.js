import styled from 'styled-components';
import { black, white } from '../../../settings/colors';

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 311px;
  border-radius: 8px;
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
  font-size: 24px;
  margin-bottom: 15px;
  color: ${white};
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.2em;
  white-space: normal;
  color: #909090;
`;
