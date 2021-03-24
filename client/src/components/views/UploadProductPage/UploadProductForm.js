import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FileUpload from "../../utils/FileUpload";
import {
  Form,
  Label,
  Input,
  PTag,
  InputNumber,
  InputSubmit,
  Textarea,
} from "../../../styles/Form";
import {
  DownBtn,
  Option,
  OptionLabel,
  OptionsContainer,
  SelectBox,
  Selected,
  SelectInput,
  UpBtn,
} from "./UploadProductElements";
import axios from "axios";

const cities = [
  { key: 0, city: "jeju", text: "제주" },
  { key: 1, city: "seoul", text: "서울" },
  { key: 2, city: "jeonju", text: "전주" },
  { key: 3, city: "busan", text: "부산" },
  { key: 4, city: "kangnung", text: "강릉" },
];

const UploadProductForm = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [images, setImages] = useState([]);
  const { register, watch, handleSubmit, errors } = useForm({
    criteriaMode: "all",
  });

  const toggle = () => setOpen(!open);

  const onSubmit = async (data) => {
    console.log(data);
    const { title, description, price, category } = data;

    let formData = new FormData();
    images.forEach((image) => formData.append("img", image.selectedFiles));

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    try {
      const res = await axios.post("/api/product/upload", formData, config);
      const filePath = res.data.filePath;
      console.log(filePath);
    } catch (err) {
      console.error(err);
    }
  };

  const onClick = (e) => {
    e.currentTarget.firstElementChild.checked = true;
    clickedCity(e);
  };

  const clickedCity = (e) => {
    e.preventDefault();
    const city = e.currentTarget.textContent;
    setSelectedOption(city);
    setOpen(!open);
  };

  const updateImage = (newImage) => setImages(newImage);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          width: "100%",
          marginRight: "50px",
          height: "100%",
        }}
      >
        <FileUpload updateImage={updateImage} />
      </div>
      <div style={{ width: "100%", height: "100%", display: "grid" }}>
        <Label>상품명</Label>
        <Input
          name="title"
          type="text"
          ref={register({
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.title?.types?.required && <PTag>상품명을 입력하세요</PTag>}
        {errors?.title?.types?.maxLength && <PTag>최대 10글자입니다</PTag>}

        <Label>내용</Label>
        <Textarea
          name="description"
          ref={register({
            required: true,
          })}
        />
        {errors?.description?.types?.required && <PTag>내용을 입력하세요</PTag>}

        <Label>가격</Label>
        <InputNumber
          name="price"
          type="number"
          ref={register({ required: true })}
        />
        {errors?.price?.types?.required && <PTag>가격을 입력하세요</PTag>}
        <SelectBox>
          <Selected onClick={toggle}>
            {selectedOption ? selectedOption : "지역"}
            {open ? <UpBtn /> : <DownBtn />}
          </Selected>
          <OptionsContainer toggle={open}>
            {cities.map(({ key, city, text }) => (
              <Option key={key} onClick={onClick}>
                <SelectInput
                  type="radio"
                  id={city}
                  name="category"
                  value={city}
                  ref={register({ required: true })}
                />
                <OptionLabel htmlFor={city} onClick={clickedCity}>
                  {text}
                </OptionLabel>
              </Option>
            ))}
          </OptionsContainer>
        </SelectBox>
        {errors?.category?.types?.required && <PTag>지역을 선택하세요</PTag>}
        <InputSubmit type="submit" value="등록" />
      </div>
    </Form>
  );
};

export default UploadProductForm;
