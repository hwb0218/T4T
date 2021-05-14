import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FileUpload from "../../../utils/FileUpload";
import { UploadForm } from "../../../../styles/Form";
import FormList from "../FormList/FormList";

const UploadProductForm = ({ user, history }) => {
  const methods = useForm({
    criteriaMode: "all",
  });
  const { handleSubmit } = methods;

  const [images, setImages] = useState([]);

  const onSubmit = async (data) => {
    const { title, description, price, category } = data;

    let formData = new FormData();
    images.forEach((image) => formData.append("img", image.selectedFiles));

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    try {
      const uploadRes = await axios.post(
        "/api/product/upload",
        formData,
        config
      );
      const { files } = uploadRes.data;

      const dataToSubmit = {
        seller: user.userData._id,
        title,
        description,
        price,
        destination: category,
        images: files,
      };
      const res = await axios.post("/api/product", dataToSubmit);
      if (res.data.success) {
        alert("상품이 업로드 되었습니다.");
        history.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateImage = (newImage) => setImages(newImage);

  return (
    <FormProvider {...methods}>
      <UploadForm onSubmit={handleSubmit(onSubmit)}>
        <FileUpload updateImage={updateImage} />
        <FormList />
      </UploadForm>
    </FormProvider>
  );
};

export default withRouter(UploadProductForm);
