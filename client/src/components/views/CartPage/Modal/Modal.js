import React from "react";
import { useSelector } from "react-redux";
import {
  Background,
  ModalWrapper,
  CloseModalButton,
  ModalContent,
  AmountControl,
  Amount,
  CntMinus,
  CntPlus,
} from "./ModalElements";
import axios from "axios";

const Modal = ({
  showModal,
  setShowModal,
  quantity,
  handleCntBtn,
  productId,
  setCartProducts,
  calculate,
  setCheckedItems,
}) => {
  const user = useSelector((state) => state.user);
  const { userData } = user;

  const modifyQuantity = async () => {
    const data = { userId: userData._id, quantity, productId };
    const res = await axios.post("/api/cart/modifyQuantity", data);

    if (res.data.success) {
      setCartProducts(res.data.cart);
      setCheckedItems(res.data.cart);
      calculate(res.data.cart);
      setShowModal((prev) => !prev);
    }
  };

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal} size="cartPage">
            <ModalContent>
              <AmountControl>
                <CntMinus
                  onClick={() => handleCntBtn("left")}
                  disabled={quantity === 1}
                />
                <Amount>{quantity}</Amount>
                <CntPlus
                  onClick={() => handleCntBtn("right")}
                  disabled={quantity === 10}
                />
              </AmountControl>
              <button onClick={modifyQuantity}>수정</button>
            </ModalContent>
            <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
