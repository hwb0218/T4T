import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  GoodsPayList,
  GoodsPayItem,
  Img,
  GoodsItem,
  GoodsInfo,
  ButtonItem,
} from "./GoodsPayElements";
import axios from "axios";
import Modal from "../Modal/Modal";

const API_URL = process.env["REACT_APP_API_URL"];

const GoodsPay = ({ products, createdMonth, modifyPayment, match }) => {
  const user = useSelector((state) => state.user.userData);

  const [showModal, setShowModal] = useState(false);

  const handleReviewBtn = () => {
    setShowModal((prev) => !prev);
  };

  const handleCancelPayment = async (_id) => {
    try {
      const data = {
        user: user._id,
        createdMonth,
        _id,
      };
      const res = await axios.post("/api/payment/cancelPayment", data);
      modifyPayment(res.data.payment);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GoodsPayList>
      {products.map(({ purchaseDate, productDetail, quantity, _id }) => (
        <Fragment key={_id}>
          <GoodsPayItem>
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
              <Link to={`${match.url}?product=${_id}`}>
                <button onClick={() => handleReviewBtn()}>후기작성</button>
              </Link>
              <button onClick={() => handleCancelPayment(_id)}>주문취소</button>
            </ButtonItem>
          </GoodsPayItem>
          <Modal showModal={showModal} setShowModal={setShowModal} id={_id} />
        </Fragment>
      ))}
    </GoodsPayList>
  );
};

export default withRouter(GoodsPay);
