import React from "react";
import { useFormContext } from "react-hook-form";
import SelectBoxContainer from "../SelectBoxContainer/SelectBoxContainer";
import {
  Input,
  InputNumber,
  InputSubmit,
  Label,
  PTag,
  Textarea,
} from "../../../../styles/Form";
import styled from "styled-components";

const FormListWrapper = styled.div`
  width: 100%;
`;

const FormList = () => {
  const { register, errors } = useFormContext();
  return (
    <FormListWrapper>
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
      <SelectBoxContainer />
      <InputSubmit type="submit" value="등록" />
    </FormListWrapper>
  );
};

export default FormList;
