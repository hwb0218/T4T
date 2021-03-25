import React from "react";
import UploadProductForm from "./UploadProductForm";

const UploadProductPage = ({ user }) => {
  return (
    <section>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        상품을 등록하세요
      </header>
      <article style={{ display: "flex", justifyContent: "center" }}>
        <UploadProductForm user={user} />
      </article>
    </section>
  );
};

export default UploadProductPage;
