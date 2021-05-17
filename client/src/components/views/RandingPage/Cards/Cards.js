import React from "react";
import Rating from "../../Rating/Rating";
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

const Cards = ({ products }) => {
  const cardItems = products.map((product, i) => (
    <Card to={`/product/${product._id}`} key={i}>
      <ImageWrap destination={product.destination}>
        <CardImg
          src={`http://localhost:5000/${product.images[0]}`}
          alt={product.images[0]}
        />
      </ImageWrap>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>
          <span>{`${product.price}원`}</span>
          <Rating value={product.rating} card={true} size="medium" />
        </ProductDescription>
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
