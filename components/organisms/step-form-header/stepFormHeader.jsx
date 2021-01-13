import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DefaultHeader from '../default-header/defaultHeader';
import {
  Header, Body, Title, Text, 
} from './stepFormHeader.style';

const StepFormHeader = (props) => {
    const [small, setSmall] = useState(0);
    const { items, index } = props;
  
    useEffect(() => {
      window.document.addEventListener('scroll', (event) => {
        setSmall(event.target.documentElement.scrollTop > 0);
      });
    }, []);
  
    return (
      <Header {...props}>
        <DefaultHeader />
        {/* <IndexContainer>{renderBall(props)}</IndexContainer> */}
        <Body>
          <Title>{items[index].title}</Title>
          <Text small={small}>{items[index].description}</Text>
        </Body>
      </Header>
    );
  };
  
  const itemShape = {
    title: PropTypes.string.isRequired,
    small: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  };
  
  StepFormHeader.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(itemShape)).isRequired,
    index: PropTypes.string.isRequired,
    customStyle: PropTypes.string.isRequired,
    color: PropTypes.string,
  };
  
  StepFormHeader.defaultProps = {
    color: magenta,
  };
  
  export default StepFormHeader;
  