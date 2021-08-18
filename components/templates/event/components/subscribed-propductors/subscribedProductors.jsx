import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../atoms/avatar/avatar';
import {
  Wrapper,
  Card,
  ListWrapper,
  Title,
  avatarCustomStyle,
  ProductorNameWrapper,
  ProductorName,
  ApprovedTag
} from './subscribedProductors.style';

const renderProducts = (productors, productorClick, approveds) =>
  [...approveds, ...productors].map((productor) => {
    return (
      <Card key={productor.id} id={productor.id} onClick={() => productorClick(productor.id)}>
        <ApprovedTag show={approveds.findIndex(({ username }) => productor.username === username) !== -1}>
          APROVADO
        </ApprovedTag>
        <Avatar src={productor.photo} customStyle={avatarCustomStyle} />
        <ProductorNameWrapper>
          <ProductorName>{productor.name}</ProductorName>
        </ProductorNameWrapper>
      </Card>
    );
  });

const SubscribedProductors = ({ productors, productorClick, approveds }) => (
  <Wrapper>
    <Title>Produtores Inscritos</Title>
    <ListWrapper>{renderProducts(productors, productorClick, approveds)}</ListWrapper>
  </Wrapper>
);

const productosShape = {
  phoyo: PropTypes.string,
  name: PropTypes.string
};

const approvedsShape = {
  _id: PropTypes.string.isRequired
};

SubscribedProductors.propTypes = {
  productors: PropTypes.arrayOf(PropTypes.shape(productosShape)),
  productorClick: PropTypes.func.isRequired,
  approveds: PropTypes.arrayOf(PropTypes.shape(approvedsShape))
};

SubscribedProductors.defaultProps = {
  productors: [],
  approveds: []
};

export default SubscribedProductors;
