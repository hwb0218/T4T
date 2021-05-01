import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import useFullPageLoader from "../../../hooks/useFullPageLoader";
import GoodsPay from "./GoodsPay/GoodsPay";
import { GoodsPaySection, Month } from "./HistoryPageElements";

const HistoryPage = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const user = useSelector((state) => state.user.userData);

  const [history, setHistory] = useState([]);

  useEffect(() => {
    showLoader();
    const fetchHistory = async () => {
      const res = await axios.post("/api/payment/history", {
        userId: user._id,
      });
      const { success, history } = res.data;
      if (success) {
        setHistory(history);
        hideLoader();
      }
    };
    fetchHistory();
  }, []);

  return (
    <>
      {history.length > 0 &&
        history.map(({ _id, createdMonth, products }) => (
          <GoodsPaySection key={_id}>
            <Month>
              <span>{createdMonth}</span>
            </Month>
            <GoodsPay products={products} createdMonth={createdMonth} />
          </GoodsPaySection>
        ))}
      {loader}
    </>
  );
};

export default HistoryPage;
