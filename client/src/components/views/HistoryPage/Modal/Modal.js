import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  setRating,
  setReviewContent,
} from "../../../../_actions/reviewActions";
import queryString from "query-string";
import Rating from "../Rating/Rating";
import {
  Background,
  CloseModalButton,
  ModalWrapper,
  ModalContent,
  RatingWrapper,
  ReviewWrapper,
  Review,
} from "./ModalElements";
import axios from "axios";

const Modal = ({
  showModal,
  setShowModal,
  setHistories,
  history,
  location,
}) => {
  const dispatch = useDispatch();
  const { rating, review, productDetail } = useSelector(
    (state) => state.review
  );
  const user = useSelector((state) => state.user.userData);
  const query = queryString.parse(location.search);

  const setLocalStorage = (reviewFormObj) => {
    window.localStorage.setItem(
      `reviewForm/${query.product}`,
      JSON.stringify(reviewFormObj)
    );
  };

  const onChange = (e) => {
    const reviewFormObj = { rating, review: e.target.value };
    setLocalStorage(reviewFormObj);
    dispatch(setReviewContent(e.target.value));
  };

  const onRating = (value) => {
    const reviewFormObj = { rating: value, review };
    setLocalStorage(reviewFormObj);
    dispatch(setRating(value));
  };

  const handleSaveBtn = async () => {
    try {
      if (review.length < 10) {
        alert("10자 이상 입력해주세요.");
        return handleSaveBtn;
      }

      const variables = {
        user: user._id,
        rating,
        review,
        product: query.product,
        productDetail,
      };

      const res = await axios.post("/api/review/saveReview", variables);
      setHistories(res.data.histories);
      window.localStorage.removeItem(`reviewForm/${query.product}`);
      history.push("/history");
      setShowModal((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <Link to="/history">
              <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
            </Link>
            <ModalContent>
              <RatingWrapper>
                <div>평점주기</div>
                <Rating onRating={onRating} />
              </RatingWrapper>
              <ReviewWrapper>
                <div>리뷰작성</div>
                <Review>
                  <textarea
                    id="reviewInput"
                    cols="30"
                    rows="8"
                    placeholder="최소 10자 이상 입력해주세요."
                    maxLength="200"
                    onChange={onChange}
                    value={review}
                  />
                </Review>
              </ReviewWrapper>
              <button onClick={handleSaveBtn}>등록</button>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default withRouter(Modal);
