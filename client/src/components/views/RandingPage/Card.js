import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);
  const [postSize, setPostSize] = useState(0);
  console.log(postSize);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (data = {}) => {
    try {
      const req = await axios.post("/api/product/products", data);
      data.loadMore === true
        ? setProducts([...products, ...req.data.productInfo])
        : setProducts(req.data.productInfo.slice(0, 8));
      setPostSize(req.data.postSize);
    } catch (e) {
      console.error(e);
    }
  };

  const loadMoreHandler = () => {
    let nextSkip = skip + limit;
    let data = {
      skip: nextSkip,
      limit,
      loadMore: true,
    };
    getProducts(data);
    setSkip(nextSkip);
  };

  const renderCards = products.map((product, i) => (
    <div
      style={{
        borderRadius: "3px",
        overflow: "hidden",
        width: "100%",
      }}
      key={i}
    >
      <div>
        <img
          style={{
            width: "80%",
            height: "200px",
          }}
          src={`http://localhost:5000/${product.images[0]}`}
          alt="a"
        />
        <div>
          <span>{product.title}</span>
        </div>
        <div>{product.description}</div>
      </div>
    </div>
  ));

  return (
    <div
      style={{
        background: "#f5f6f8",
        padding: "30px 60px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          textAlign: "center",
          rowGap: "0.5rem",
        }}
      >
        {renderCards}
      </div>
      {postSize > limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}>더보기</button>
        </div>
      )}
    </div>
  );
};

export default Card;
