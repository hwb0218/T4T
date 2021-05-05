import React, { useState } from "react";
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

const Modal = ({ showModal, setShowModal }) => {
  const [rating, setRating] = useState(0);

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
            <ModalContent>
              <RatingWrapper>
                <div>평점주기</div>
                <Rating rating={rating} onRating={(rate) => setRating(rate)} />
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
                  ></textarea>
                </Review>
              </ReviewWrapper>
              <button>등록</button>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
