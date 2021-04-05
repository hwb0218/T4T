import React from "react";
import { useSelector } from "react-redux";
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
  const filters = useSelector((state) => state.filters);

  const cardItems = products.map((product, i) => (
    <Card key={i}>
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
        <ProductDescription>{product.price}</ProductDescription>
      </ProductInfo>
    </Card>
  ));

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <CardContainer>
        <CardList>{cardItems}</CardList>
      </CardContainer>
    </>
  );
};

export default Cards;
