import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../../../_actions/userActions";
import styled from "styled-components";
import axios from "axios";

const ProductInfoContainer = styled.div`
  max-width: 900px;
  margin: 1rem auto 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e2e2;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ProductInfoList = styled.li`
  display: flex;
  & + & {
    margin-top: 0.3rem;
  }
`;

const TitleBox = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #000;

  & + & {
    margin-left: 110px;
  }
`;

const ProductTit = styled.p`
  width: 115px;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.5px;
  font-weight: bold;
`;

const ProductContent = styled.p`
  width: 115px;
  letter-spacing: 0.5px;
  font-size: 13px;
  font-weight: bold;
`;

const ProductDescription = styled.div`
  min-width: 320px;
  font-weight: bold;
  font-size: 13px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 300px;
`;

const Btn = styled.button`
  display: inline-block;
  max-width: 300px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: white;
  letter-spacing: 1px;

  & + & {
    margin-top: 0.8rem;
  }

  &:first-child {
    background: #565656;
  }

  &:last-child {
    background: #5f0080;
  }
`;

const ProductInfo = ({ detail, productId }) => {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleCartBtn = async () => {
    const data = {
      user: user.userData._id,
      productId,
    };
    const res = await axios.post("/api/cart/addToCart", data);
    console.log(res.data);
    // const res = await dispatch(addToCart(detail._id));
    // if (res.payload.duplicate) {
    //   alert("이미 장바구니에 있는 상품입니다.");
    // }
  };

  return (
    <ProductInfoContainer>
      <TitleBox>Product Info</TitleBox>
      <TitleBox>Description</TitleBox>
      <ProductInfoWrapper>
        <ul>
          <ProductInfoList>
            <ProductTit>상품명</ProductTit>
            <ProductContent>{detail.title}</ProductContent>
          </ProductInfoList>
          <ProductInfoList>
            <ProductTit>평점</ProductTit>
            <ProductContent>⭐</ProductContent>
          </ProductInfoList>
          <ProductInfoList>
            <ProductTit>가격</ProductTit>
            <ProductContent>{detail.price}원</ProductContent>
          </ProductInfoList>
          <ProductInfoList>
            <ProductTit>누적판매</ProductTit>
            <ProductContent>{detail.sold}</ProductContent>
          </ProductInfoList>
          <ProductInfoList>
            <ProductTit>조회수</ProductTit>
            <ProductContent>{detail.views}</ProductContent>
          </ProductInfoList>
        </ul>
        <ProductDescription>{detail.description}</ProductDescription>
        <BtnWrapper>
          <Btn onClick={handleCartBtn}>장바구니</Btn>
          <Btn>결제하기</Btn>
        </BtnWrapper>
      </ProductInfoWrapper>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
