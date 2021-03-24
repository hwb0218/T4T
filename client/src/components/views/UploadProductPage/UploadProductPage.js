import React from "react";
import UploadProductForm from "./UploadProductForm";

const UploadProductPage = () => {
  return (
    <section>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        상품을 등록하세요
      </header>
      <article style={{ display: "flex", justifyContent: "center" }}>
        <UploadProductForm />
      </article>
    </section>
  );
};

export default UploadProductPage;
