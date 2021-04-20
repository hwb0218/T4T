import React, { useState } from "react";
import FullPageLoader from "../components/utils/FullPageLoader";

const UseFullPageLoader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <FullPageLoader /> : null,
    () => setLoading(true),
    () => setLoading(false),
  ];
};

export default UseFullPageLoader;
