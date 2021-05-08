import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import useFullPageLoader from "../../../hooks/useFullPageLoader";
import GoodsPay from "./GoodsPay/GoodsPay";
import { GoodsPaySection, Month } from "./HistoryPageElements";
import Modal from "./Modal/Modal";

const HistoryPage = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const user = useSelector((state) => state.user.userData);

  const [histories, setHistories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    showLoader();
    const fetchHistory = async () => {
      const res = await axios.post("/api/payment/history", {
        userId: user._id,
      });
      hideLoader();
      setHistories(res.data.histories);
    };
    fetchHistory();
    return () => hideLoader();
  }, [user]);

  const modifyPayment = (newHistory) => {
    setHistories(newHistory);
  };

  return (
    <>
      {histories.length > 0 &&
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
        ))}
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {loader}
    </>
  );
};

export default HistoryPage;
