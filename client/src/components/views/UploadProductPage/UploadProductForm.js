import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectBoxContainer from "./SelectBoxContainer";
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

const UploadProductForm = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { register, watch, handleSubmit, errors } = useForm({
    criteriaMode: "all",
  });

  console.log(watch("radio"));

  const onSubmit = (data) => console.log(data);

  const onClick = (e) => {
    const city = e.target.textContent;
    setSelectedOption(city);
    setToggle(!toggle);
  };
  const clickBtn = () => setToggle(!toggle);

  const cities = [
    { key: 1, city: "jeju", text: "제주" },
    { key: 2, city: "seoul", text: "서울" },
    { key: 3, city: "jeonju", text: "전주" },
    { key: 4, city: "busan", text: "부산" },
    { key: 5, city: "kangnung", text: "강릉" },
  ];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <input type="radio" name="radio" ref={register} value="adada" />
      <SelectBox>
        <Selected onClick={clickBtn}>
          {selectedOption ? selectedOption : "지역"}
          {toggle ? <UpBtn /> : <DownBtn />}
        </Selected>
        <OptionsContainer toggle={toggle}>
          {cities.map(({ key, city, text }) => (
            <Option key={key} onClick={onClick}>
              <SelectInput
                type="radio"
                id={city}
                name="category"
                value={city}
              />
              <OptionLabel htmlFor={city}>{text}</OptionLabel>
            </Option>
          ))}
        </OptionsContainer>
      </SelectBox>
      <InputSubmit type="submit" value="등록" />
    </Form>
  );
};

export default UploadProductForm;
