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

const Modal = ({ showModal, setShowModal, match, location }) => {
  const dispatch = useDispatch();
  const { rating, review } = useSelector((state) => state.review);
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

  const handleSaveBtn = () => {};

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <Link to={match.url}>
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
