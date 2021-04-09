import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../../../_actions/filterActions";
import {
  FilterContainer,
  FilterWrapper,
  Panel,
  CheckBoxes,
  CheckBoxInput,
  CheckBoxLabel,
  CheckBox,
} from "./FilterElements";

const Filter = ({ destination, price, rating }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleToggle = (id) => {
    const { destination } = filters;
    const checked = destination.includes(id);
    const newChecked = checked
      ? destination.filter((option) => option !== id)
      : [...destination, id];

    dispatch(filter(newChecked, "destination"));
  };

  const handleChange = (priceRange) => {
    dispatch(filter(priceRange, "price"));
  };

  return (
    <FilterContainer>
      <FilterWrapper>
        <Panel>여행지</Panel>
        <CheckBoxes>
          {destination.map(({ _id, city }) => (
            <CheckBox key={_id}>
              <CheckBoxInput
                onChange={() => handleToggle(_id)}
                type="checkbox"
                id={_id}
              />
              <CheckBoxLabel htmlFor={_id}>{` ${city}`}</CheckBoxLabel>
            </CheckBox>
          ))}
        </CheckBoxes>
      </FilterWrapper>
      <FilterWrapper>
        <Panel>가격(만원)</Panel>
        <CheckBoxes>
          {price.map(({ _id, label, priceRange }) => (
            <CheckBox key={_id}>
              <CheckBoxInput
                onChange={() => handleChange(priceRange)}
                type="radio"
                id={label}
                name="checkPrice"
                defaultChecked={_id === 0}
              />
              <CheckBoxLabel htmlFor={label}>{` ${label}`}</CheckBoxLabel>
            </CheckBox>
          ))}
        </CheckBoxes>
      </FilterWrapper>
      <FilterWrapper>
        <Panel>평점</Panel>
        <CheckBoxes>
          {rating.map(({ _id, rate }) => (
            <CheckBox key={_id}>
              <CheckBoxInput type="radio" name="checkRating" id={rate} />
              <CheckBoxLabel htmlFor={rate}>{` ${rate}`}</CheckBoxLabel>
            </CheckBox>
          ))}
        </CheckBoxes>
      </FilterWrapper>
    </FilterContainer>
  );
};

export default Filter;
