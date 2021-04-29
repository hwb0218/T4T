import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import useFullPageLoader from "../../../hooks/useFullPageLoader";
import GoodsPay from "./GoodsPay/GoodsPay";

const HistoryPage = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const user = useSelector((state) => state.user);
  const { userData } = user;

  const [history, setHistory] = useState([]);

  useEffect(() => {
    showLoader();
    const fetchHistory = async () => {
      const res = await axios.post("/api/payment/history", {
        userId: userData._id,
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
      <div>
        {history.length > 0 &&
          history.map(({ _id, createdMonth, products }) => (
            <div key={_id}>
              <div>{createdMonth}</div>
              <GoodsPay products={products} />
            </div>
          ))}
      </div>
      {loader}
    </>
  );
};

export default HistoryPage;
