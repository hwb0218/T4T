import React from "react";

const API_URL = process.env["REACT_APP_API_URL"];

const GoodsPay = ({ products }) => {
  console.log(products);
  return (
    <div>
      <ul>
        {products.map(({ purchaseDate, productDetail, quantity, _id }) => (
          <li key={_id}>
            <div>
              <img
                src={`${API_URL}${productDetail.images[0]}`}
                alt={productDetail.title}
                width="90"
                height="90"
              />
            </div>
            <div>
              <p>{productDetail.title}</p>
              <ul>
                <li>{productDetail.price * quantity}</li>
                <li>{purchaseDate}</li>
              </ul>
            </div>
            <div>
              <button>후기작성</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoodsPay;
