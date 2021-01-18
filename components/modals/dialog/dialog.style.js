import styled from 'styled-components';
import {
  white, purple, black50, black,
} from '../../../settings/colors';

export const ModalWrapper = styled.div`
  display: ${(props) => {
    const { isOpen } = props;
    return !isOpen ? 'none' : 'flex';
  }};
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  padding: 30px;
  background-color: ${black50};
`;

export const Modal = styled.div`
  border-radius: 20px;
  width: 100%;
  max-width: 320px;
  overflow: hidden;
  background-color: ${white};
  text-align: left;
  color: ${black};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  padding-top: 30px; 
`;

export const Icon = styled.img`
  height: 100%;
`;

export const Content = styled.div`
  padding: 30px;
`;

export const Title = styled.h2`
  font-size: 1.5714285714em;
  line-height: 1.1em;
  font-weight: 400;
`;

export const Message = styled.h3`
  font-size: 1em;
  font-weight: 300;
  line-height: 1.625em;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const BackButton = styled.a`
  margin-right: 15px;
  color: ${purple};
`;

export const CloseIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-top: 5px;
  margin-top: 20px;
  margin-right: 20px;
  float: right;
  cursor: pointer;
`;
