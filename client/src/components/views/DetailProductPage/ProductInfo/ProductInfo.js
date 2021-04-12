import React from "react";
import styled from "styled-components";

const ProductInfoContainer = styled.div`
  width: 100%;
  padding: 0 4rem;
`;

const Title = styled.div``;
const Information = styled.div``;
const Rating = styled.div``;
const Price = styled.div``;
const Sold = styled.div``;
const Views = styled.div``;

const ProductInfo = ({ detail }) => {
  return (
    <ProductInfoContainer>
      <Title>{detail.title}</Title>
      <Information>
        <Price>{detail.price}</Price>
        <Rating>평점</Rating>
        <Sold>누적판매 {detail.sold}</Sold>
        <Views>조회수 {detail.views}</Views>
      </Information>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
