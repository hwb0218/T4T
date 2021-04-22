import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ProductImage from "./ProductImage/ProductImage";
import ProductInfo from "./ProductInfo/ProductInfo";
import Comment from "./Comment/Comment";
import styled from "styled-components";
import useFullPageLoader from "../../../hooks/useFullPageLoader";

const DetailProductPageContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const DetailProductPage = ({ match }) => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const { productId } = match.params;

  const [product, setProduct] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        showLoader();
        const res = await axios.get(
          `/api/product/products_by_id?id=${productId}`
        );
        if (res.data.success) {
          setProduct(res.data.product[0]);
          hideLoader();
        }
      } catch (e) {
        console.error(e);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <DetailProductPageContainer>
      {product && <ProductImage detail={product} />}
      <ProductInfo detail={product} productId={productId} />
      <Comment productId={productId} />
      {loader}
    </DetailProductPageContainer>
  );
};

export default withRouter(DetailProductPage);
