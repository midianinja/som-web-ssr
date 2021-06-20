import styled from 'styled-components';
import { green, wrapperModal, white } from '../../../../../settings/colors';

export const Wrapper = styled.div`
  display: flex;
  ${(props) => props.customStyle}
`;

export const Container = styled.div`
  display: flex;
  text-align: start;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  vertical-align: top;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const View = styled.div`
${(props) => props.customStyle}

`;

export const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const IMAGE_SIZE = {
  mobile: {
    height: '140px',
    width: '140px'
  },
  desktop: {
    height: '140px',
    width: '140px'
  }
};

export const Image = styled.img`
  ${(props) => `
    background-image: url('${props.image}');
    height: ${IMAGE_SIZE.mobile.height};
    width: ${IMAGE_SIZE.mobile.width};
    background-repeat: no-repeat;
    background-size: cover;
  `}
`;

export const ImageHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${IMAGE_SIZE.mobile.height};
  width: ${IMAGE_SIZE.mobile.width};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${wrapperModal};
  cursor: pointer;
  @media (max-width: 768px) {
    right: 0;
    margin: auto;
  }
`;

export const Icon = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

export const Label = styled.label`
  color: ${white};
  width: 100px;
  text-align: center;
  font-size: 1em;
  cursor: pointer;
`;

export const Title = styled.label`
  color: ${green};
  font-size: 1em;
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
`;

export const tagListStyl = `
  margin: 10px 0;
`;

export const eventDetailsStyl = `
  height: 100px;
`;

export const FakeButton = styled.label`
  border: 1px solid ${white};
  border-radius: 38px;
  width: 130px;
  color: ${white};
  text-align: center;
  font-size: 0.7em;
  padding: 3px 5px;
`;
