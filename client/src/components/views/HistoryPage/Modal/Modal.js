import React from "react";
import Rating from "../Rating/Rating";
import {
  Background,
  CloseModalButton,
  ModalWrapper,
  ModalContent,
} from "./ModalElements";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal} size="historyPage">
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
            <ModalContent>
              <div>
                <span>평점주기</span>
                <Rating value={5} />
              </div>
              <div>
                <span>리뷰작성</span>
              </div>
              <button>등록</button>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
