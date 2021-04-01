import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CardContainer,
  CardList,
  Card,
  ImageWrap,
  CardImg,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  BtnWrapper,
  LoadMoreBtn,
} from "./CardElements";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(6);
  const [postSize, setPostSize] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (data = {}) => {
    try {
      const req = await axios.post("/api/product/products", data);
      data.loadMore === true
        ? setProducts([...products, ...req.data.productInfo])
        : setProducts(req.data.productInfo.slice(0, 6));
      setPostSize(req.data.postSize);
    } catch (e) {
      console.error(e);
    }
  };

  const loadMoreHandler = () => {
    let nextSkip = skip + limit;
    let data = {
      skip: nextSkip,
      limit,
      loadMore: true,
    };
    getProducts(data);
    setSkip(nextSkip);
  };

  const cardItems = products.map((product, i) => (
    <Card key={i}>
      <ImageWrap destination={product.destination}>
        <CardImg src={`http://localhost:5000/${product.images[0]}`} alt="a" />
      </ImageWrap>
      <ProductInfo>
        <ProductTitle>
          <span>{product.title}</span>
        </ProductTitle>
        <ProductDescription>{product.price}</ProductDescription>
      </ProductInfo>
    </Card>
  ));

  return (
    <>
      <CardContainer>
        <CardList>{cardItems}</CardList>
      </CardContainer>
      {postSize > limit && (
        <BtnWrapper>
          <LoadMoreBtn onClick={loadMoreHandler}>더보기</LoadMoreBtn>
        </BtnWrapper>
      )}
    </>
  );
};

export default Cards;
