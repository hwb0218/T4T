import React, { useCallback, useState } from "react";
import FullPageLoader from "../components/utils/FullPageLoader";

const UseFullPageLoader = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading ? <FullPageLoader /> : null,
    useCallback(() => {
      setLoading(true);
    }, []),
    useCallback(() => {
      setLoading(false);
    }, []),
  ];
};

export default UseFullPageLoader;
