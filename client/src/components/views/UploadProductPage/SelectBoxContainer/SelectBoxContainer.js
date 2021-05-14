import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  DownBtn,
  Option,
  OptionLabel,
  OptionsContainer,
  SelectBox,
  Selected,
  SelectInput,
  UpBtn,
} from "./SelectBoxContainerElements";
import { PTag } from "../../../../styles/Form";

const cities = [
  { key: 0, city: "jeju", text: "제주" },
  { key: 1, city: "seoul", text: "서울" },
  { key: 2, city: "jeonju", text: "전주" },
  { key: 3, city: "busan", text: "부산" },
  { key: 4, city: "kangnung", text: "강릉" },
];

const SelectBoxContainer = () => {
  const { register, errors } = useFormContext();

  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const toggle = () => setOpen(!open);

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

  return (
    <>
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
    </>
  );
};

export default SelectBoxContainer;
