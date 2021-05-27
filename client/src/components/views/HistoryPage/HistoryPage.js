import React, { useState, useEffect } from "react";
import axios from "axios";
import useFullPageLoader from "../../../hooks/useFullPageLoader";
import GoodsPay from "./GoodsPay/GoodsPay";
import {
  GoodsPaySection,
  Month,
  EmptyBox,
  EmptyPayment,
  EmptyMessage,
} from "./HistoryPageElements";
import Modal from "./Modal/Modal";

const HistoryPage = ({ user }) => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  const [histories, setHistories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        if (user.userData) {
          showLoader();
          const res = await axios.post("/api/payment/history", {
            userId: user.userData._id,
          });
          hideLoader();
          setHistories(res.data.histories);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchHistory();
    return () => hideLoader();
  }, [showLoader, hideLoader]);

  const modifyPayment = (newHistory) => {
    setHistories(newHistory);
  };

  return (
    <>
      {histories.length > 0 ? (
        histories.map(({ _id, createdMonth, products }) => (
          <GoodsPaySection key={_id}>
            <Month>
              <span>{createdMonth}</span>
            </Month>
            <GoodsPay
              products={products}
              createdMonth={createdMonth}
              modifyPayment={modifyPayment}
              setShowModal={setShowModal}
            />
          </GoodsPaySection>
        ))
      ) : (
        <EmptyBox>
          <EmptyPayment />
          <EmptyMessage>주문 정보가 없습니다.</EmptyMessage>
        </EmptyBox>
      )}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setHistories={setHistories}
      />
      {loader}
    </>
  );
};

export default HistoryPage;
