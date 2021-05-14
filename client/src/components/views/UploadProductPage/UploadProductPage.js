import React from "react";
import styled from "styled-components";
import UploadProductForm from "./UploadProductForm/UploadProductForm";

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const UploadProductPage = ({ user }) => {
  return (
    <section>
      <Header>상품을 등록하세요</Header>
      <UploadProductForm user={user} />
    </section>
  );
};

export default UploadProductPage;
