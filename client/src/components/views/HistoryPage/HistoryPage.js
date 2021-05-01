import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import useFullPageLoader from "../../../hooks/useFullPageLoader";
import GoodsPay from "./GoodsPay/GoodsPay";
import { GoodsPaySection, Month } from "./HistoryPageElements";

const HistoryPage = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const user = useSelector((state) => state.user.userData);

  const [histories, setHistories] = useState([]);
  console.log(histories);

  useEffect(() => {
    showLoader();
    const fetchHistory = async () => {
      const res = await axios.post("/api/payment/history", {
        userId: user._id,
      });
      const { success, histories } = res.data;
      if (success) {
        setHistories(histories);
        hideLoader();
      }
    };
    fetchHistory();
  }, []);

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
            />
          </GoodsPaySection>
        ))}
      {loader}
    </>
  );
};

export default HistoryPage;
