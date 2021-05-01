import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  GoodsPayList,
  GoodsPayItem,
  Img,
  GoodsItem,
  GoodsInfo,
  ButtonItem,
} from "./GoodsPayElements";
import axios from "axios";

const API_URL = process.env["REACT_APP_API_URL"];

const GoodsPay = ({ products, createdMonth, modifyPayment }) => {
  const user = useSelector((state) => state.user.userData);

  const handleCancelPayment = async (_id) => {
    const data = {
      user: user._id,
      createdMonth,
      _id,
    };
    const res = await axios.post("/api/payment/cancelPayment", data);
    modifyPayment(res.data.payment);
  };

  return (
    <GoodsPayList>
      {products.map(({ purchaseDate, productDetail, quantity, _id }) => (
        <GoodsPayItem key={_id}>
          <GoodsItem>
            <Img
              src={`${API_URL}${productDetail.images[0]}`}
              alt={productDetail.title}
            />
            <GoodsInfo>
              <p>{productDetail.title}</p>
              <ul>
                <li>{productDetail.price * quantity}원</li>
                <li>
                  <span>{purchaseDate}</span>
                </li>
              </ul>
            </GoodsInfo>
          </GoodsItem>
          <ButtonItem>
            <button>후기작성</button>
            <button onClick={() => handleCancelPayment(_id)}>주문취소</button>
          </ButtonItem>
        </GoodsPayItem>
      ))}
    </GoodsPayList>
  );
};

export default GoodsPay;
