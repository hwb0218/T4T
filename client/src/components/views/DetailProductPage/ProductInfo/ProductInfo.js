import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Rating from "../../Rating/Rating";
import {
  ProductInfoContainer,
  ProductInfoWrapper,
  ProductInfoList,
  TitleBox,
  ProductTit,
  ProductContent,
  ProductDescription,
  BtnWrapper,
  Btn,
  AmountControl,
  Amount,
  CntMinus,
  CntPlus,
} from "./ProductInfoElements";

const ProductInfo = ({ detail, productId, history }) => {
  const user = useSelector((state) => state.user);
  const [amount, setAmount] = useState(1);

  const isConfirm = (confirm, path) => {
    if (confirm) {
      history.push(path);
    }
  };

  const addToCart = async () => {
    const data = {
      user: user.userData._id,
      productId,
      amount,
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

  const handleCntBtn = (direction) => {
    if (direction === "left") {
      setAmount(amount > 1 ? amount - 1 : 1);
    }
    if (direction === "right") {
      setAmount(amount < 10 ? amount + 1 : 10);
    }
  };

  return (
    <ProductInfoContainer>
      <ProductInfoWrapper>
        <ul>
          <TitleBox>Product Info</TitleBox>
          <ProductInfoList>
            <ProductTit>상품명</ProductTit>
            <ProductContent>{detail.title}</ProductContent>
          </ProductInfoList>
          <ProductInfoList>
            <ProductTit>평점</ProductTit>
            <ProductContent>
              <Rating value={detail.rating} />
              <span>({detail.rating})</span>
            </ProductContent>
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
        <div>
          <TitleBox>Description</TitleBox>
          <ProductDescription>{detail.description}</ProductDescription>
        </div>
        <BtnWrapper>
          <AmountControl>
            <CntMinus
              onClick={() => handleCntBtn("left")}
              disabled={amount === 1}
            />
            <Amount>{amount}</Amount>
            <CntPlus
              onClick={() => handleCntBtn("right")}
              disabled={amount === 10}
            />
          </AmountControl>
          <Btn onClick={handleCartBtn}>장바구니</Btn>
        </BtnWrapper>
      </ProductInfoWrapper>
    </ProductInfoContainer>
  );
};

export default React.memo(withRouter(ProductInfo));
