import React from "react";
import {
  setReviewContent,
  setRating,
} from "../../../../_actions/reviewActions";
import { useSelector, useDispatch } from "react-redux";
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
const API_URL = process.env["REACT_APP_API_URL"];

const GoodsPay = ({
  products,
  createdMonth,
  modifyPayment,
  setShowModal,
  match,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);

  const buttonItem = (orderConfirmation, _id) =>
    orderConfirmation ? (
      <Link to={`${match.url}?product=${_id}`}>
        <button onClick={() => handleReviewBtn(_id)}>후기작성</button>
      </Link>
    ) : (
      <>
        <button onClick={() => handleConfirmationBtn(_id)}>구매확정</button>
        <button onClick={() => handleCancelPaymentBtn(_id)}>주문취소</button>
      </>
    );

  const handleReviewBtn = (id) => {
    const reviewFormObj = window.localStorage.getItem(`reviewForm/${id}`);
    if (reviewFormObj !== null) {
      const { rating, review } = JSON.parse(reviewFormObj);
      dispatch(setRating(rating));
      dispatch(setReviewContent(review));
    } else {
      dispatch(setRating(0));
      dispatch(setReviewContent(""));
    }
    setShowModal((prev) => !prev);
  };

  const handleConfirmationBtn = async (id) => {
    try {
      const data = {
        user: user._id,
        createdMonth,
        productId: id,
      };
      const res = await axios.post("/api/payment/orderConfirmation", data);
      modifyPayment(res.data.histories);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelPaymentBtn = async (id) => {
    try {
      const data = {
        user: user._id,
        createdMonth,
        productId: id,
      };
      const res = await axios.post("/api/payment/cancelPayment", data);
      modifyPayment(res.data.histories);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GoodsPayList>
      {products.map(
        ({
          _id,
          purchaseDate,
          productDetail,
          quantity,
          orderConfirmation,
          reviewRegistration,
        }) => (
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
              {reviewRegistration ? (
                <div>후기등록완료</div>
              ) : (
                buttonItem(orderConfirmation, _id)
              )}
            </ButtonItem>
          </GoodsPayItem>
        )
      )}
    </GoodsPayList>
  );
};

export default withRouter(GoodsPay);
