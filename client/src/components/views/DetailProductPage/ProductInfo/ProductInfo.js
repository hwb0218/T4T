import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";

const ProductInfoContainer = styled.div`
  max-width: 950px;
  margin-top: 1rem;
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

const ProductInfo = ({ detail, productId, history }) => {
  const user = useSelector((state) => state.user);

  const isConfirm = (confirm, path) => {
    if (confirm) {
      history.push(path);
    }
  };

  const addToCart = async () => {
    const data = {
      user: user.userData._id,
      productId,
    };
    const res = await axios.post("/api/product/addToCart", data);
    if (res.data.duplicate) {
      alert("이미 장바구니에 있는 상품입니다.");
    }
    if (res.data.success) {
      const message =
        "장바구니에 상품이 담겼습니다. 장바구니로 이동하시겠습니까?";
      const confirm = window.confirm(message);
      isConfirm(confirm, "/user/cart");
    }
  };

  const handleCartBtn = () => {
    if (user.userData.isAuth) {
      addToCart();
    } else {
      const message = "로그인이 필요한 서비스입니다. 로그인 하시겠습니까?";
      const confirm = window.confirm(message);
      isConfirm(confirm, "/login");
    }
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

export default withRouter(ProductInfo);
