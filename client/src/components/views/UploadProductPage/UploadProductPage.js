import React from "react";
import FileUpload from "../../utils/FileUpload";
import UploadProductForm from "./UploadProductForm";

const UploadProductPage = () => {
  return (
    <section>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        상품을 등록하세요
      </header>
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FileUpload />
        <UploadProductForm />
      </article>
    </section>
  );
};

export default UploadProductPage;
