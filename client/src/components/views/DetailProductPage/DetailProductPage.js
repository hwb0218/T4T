import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ProductImage from "./ProductImage/ProductImage";
import ProductInfo from "./ProductInfo/ProductInfo";
import styled from "styled-components";

const DetailProductPageContainer = styled.div`
  width: 100%;
  padding: 0 4rem;

  ${({ theme }) => theme.mobile`
    padding: 0 2rem;
  `};
`;

const DetailProductPage = ({ match }) => {
  const { productId } = match.params;

  const [product, setProduct] = useState("");

  useEffect(async () => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `/api/product/products_by_id?id=${productId}&type=single`
        );
        if (res.data.success) {
          setProduct(res.data.product[0]);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getProduct();
  }, []);

  return (
    <DetailProductPageContainer>
      {product && <ProductImage detail={product} />}
      <ProductInfo detail={product} />
    </DetailProductPageContainer>
  );
};

export default withRouter(DetailProductPage);
