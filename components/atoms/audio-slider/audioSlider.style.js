import styled from 'styled-components';
import { white, secondaryOrange, secondaryOrange15, secondaryOrange50 } from '../../../settings/colors';

export const AudioSliderStyle = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  width: 100%;
  margin-top: 20px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    display: inline-block;
    height: 8px;
    width: 8px;
    bottom: -3px;
    border-radius: 50%;
    background: ${(props) => props.color || secondaryOrange};
    cursor: pointer;
    z-index: 1;
  }

  :after {
    content: '';
    position: absolute;
    display: inline-block;
    height: 8px;
    width: 8px;
    bottom: -3px;
    right: 0px;
    border-radius: 50%;
    background: ${white};
    cursor: pointer;
    z-index: 1;
  }

  :focus {
    outline: none;
    margin-top: 20px;
  }

  ::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-webkit-slider-thumb {
    position: relative;
    box-sizing: content-box;
    -webkit-appearance: none;
    height: 8px;
    border-radius: 50%;
    margin-top: -7px;
    margin-left: -4px;
    width: 8px;
    background: ${(props) => props.color || secondaryOrange};
    cursor: pointer;
    box-shadow: 0px 0px 0px 6px ${(props) => props.color15 || secondaryOrange15};
    border: solid 4px ${(props) => props.color50 || secondaryOrange50};
    -moz-background-clip: content;
    -webkit-background-clip: content;
    background-clip: content-box;
    z-index: 2;
  }

  ::-moz-range-thumb {
    height: 10px;
    border-radius: 50%;
    width: 10px;
    margin-left: -2;
    border-radius: 50%;
    background: ${(props) => props.color || secondaryOrange};
    cursor: pointer;
    z-index: 2;
  }

  ::-ms-thumb {
    box-sizing: content-box;
    -webkit-appearance: none;
    height: 10px;
    border-radius: 50%;
    width: 10px;
    background: ${(props) => props.color || secondaryOrange};
    cursor: pointer;
    margin-top: 0px;
    box-shadow: 0px 0px 0px 4px ${(props) => props.color15 || secondaryOrange15};
    position: relative;
    border: solid 4px ${(props) => props.color50 || secondaryOrange50};
    -moz-background-clip: content;
    -webkit-background-clip: content;
    background-clip: content-box;
    z-index: 2;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    border-radius: 2px;
    cursor: pointer;
    background: ${white};
    background: 
      linear-gradient(90deg, ${(props) => props.color || secondaryOrange} ${(props) =>
  props.value / 10}%, ${white} ${(props) => props.value / 10}%);
  }

  :focus::-webkit-slider-runnable-track,
  :active::-webkit-slider-runnable-track {
    background: ${white};
    background: 
      linear-gradient(90deg, ${(props) => props.color || secondaryOrange} ${(props) =>
  props.value / 10}%, ${white} ${(props) => props.value / 10}%);
  }

  ::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: ${(props) => props.color || secondaryOrange};
  }

  ::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-webkit-progress-value {
    background-color: ${(props) => props.color || secondaryOrange}; 
  }

  ::-moz-range-progress {
    background-color: ${(props) => props.color || secondaryOrange}; 
  }

  ::-moz-range-track {  
    background-color: ${white};
  }

  ::-ms-fill-lower {
    background-color: ${(props) => props.color || secondaryOrange}; 
  }

  ::-ms-fill-upper {  
    background-color: ${white};
  }
`;
