import React from "react";
import {
  CardContainer,
  CardList,
  Card,
  ImageWrap,
  CardImg,
  ProductInfo,
  ProductTitle,
  ProductDescription,
} from "./CardElements";

const Cards = ({ products, loading }) => {
  const cardItems = products.map((product, i) => (
    <Card to={`/product/${product._id}`} key={i}>
      <ImageWrap destination={product.destination}>
        <CardImg
          src={`http://localhost:5000/${product.images[0]}`}
          alt={product.images[0]}
        />
      </ImageWrap>
      <ProductInfo>
        <ProductTitle>
          <span>{product.title}</span>
        </ProductTitle>
        <ProductDescription>{`${product.price}원`}</ProductDescription>
      </ProductInfo>
    </Card>
  ));

  return (
    <>
      <CardContainer>
        <CardList>{cardItems}</CardList>
      </CardContainer>
    </>
  );
};

export default Cards;
