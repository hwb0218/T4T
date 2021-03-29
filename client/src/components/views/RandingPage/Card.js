import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const req = await axios.get("/api/product/products");
      console.log(req.data.productInfo);
      setProducts(req.data.productInfo);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderCards = products.map((product, i) => (
    <div key={i}>
      <img src={`http://localhost:5000/${product.images[0]}`} alt="a" />
      <span>title </span>
      <span>description</span>
    </div>
  ));

  return <div style={{ margin: "0 2rem" }}>{renderCards}</div>;
};

export default Card;
