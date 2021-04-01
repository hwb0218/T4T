import React, { useState } from "react";
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
} from "./ModalElements";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <h1>Are you ready?</h1>
              <p>dadadadaadadada!</p>
              <button>click!</button>
            </ModalContent>
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
