import React from "react";
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  AmountControl,
  Amount,
  CntMinus,
  CntPlus,
} from "./ModalElements";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <AmountControl>
                <CntMinus
                // onClick={() => handleCntBtn("left")}
                // disabled={amount === 1}
                />
                <Amount>0</Amount>
                <CntPlus
                // onClick={() => handleCntBtn("right")}
                // disabled={amount === 10}
                />
              </AmountControl>
              <button>수정</button>
            </ModalContent>
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
