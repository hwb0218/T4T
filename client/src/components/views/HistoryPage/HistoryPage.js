import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import useFullPageLoader from "../../../hooks/useFullPageLoader";
import GoodsPay from "./GoodsPay/GoodsPay";
import { GoodsPaySection, Month } from "./HistoryPageElements";

const HistoryPage = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const user = useSelector((state) => state.user.userData);

  const [histories, setHistories] = useState([]);

  useEffect(() => {
    showLoader();
    const fetchHistory = async () => {
      const res = await axios.post("/api/payment/history", {
        userId: user._id,
      });
      hideLoader();
      const { success, histories } = res.data;
      if (success) {
        setHistories(histories);
      }
    };
    fetchHistory();
    return () => hideLoader();
  }, []);

  const modifyPayment = (newHistory) => {
    setHistories(newHistory);
  };

  return (
    <>
      {histories.length > 0 &&
        histories.map(({ _id, createdMonth, products }) => (
          <Fragment key={_id}>
            <GoodsPaySection>
              <Month>
                <span>{createdMonth}</span>
              </Month>
              <GoodsPay
                products={products}
                createdMonth={createdMonth}
                modifyPayment={modifyPayment}
              />
            </GoodsPaySection>
          </Fragment>
        ))}
      {loader}
    </>
  );
};

export default HistoryPage;
