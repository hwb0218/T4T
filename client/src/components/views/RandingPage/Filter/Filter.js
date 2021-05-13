import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
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

const Filter = ({ destination, price, rating, history }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleToggleDestination = (id) => {
    const { destination } = filters;
    const checked = destination.includes(id);
    const newChecked = checked
      ? destination.filter((option) => option !== id)
      : [...destination, id];
    dispatch(filter(newChecked, "destination"));
    history.push("/");
  };

  const handleChangePrice = (priceRange) => {
    dispatch(filter(priceRange, "price"));
    history.push("/");
  };

  const handleToggleRating = (id) => {
    const { rating } = filters;
    const checked = rating.includes(id);
    const newChecked = checked
      ? rating.filter((option) => option !== id)
      : [...rating, id];
    dispatch(filter(newChecked, "rating"));
    history.push("/");
  };

  return (
    <FilterContainer>
      <FilterWrapper>
        <Panel>여행지</Panel>
        <CheckBoxes>
          {destination.map(({ _id, city }) => (
            <CheckBox key={_id}>
              <CheckBoxInput
                onChange={() => handleToggleDestination(_id)}
                type="checkbox"
                name="destination"
                id={_id}
                checked={filters.destination.includes(_id)}
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
                onChange={() => handleChangePrice(priceRange)}
                type="radio"
                id={label}
                checked={
                  filters.price.length < 1
                    ? _id === 0
                    : filters.price === priceRange
                }
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
              <CheckBoxInput
                onChange={() => handleToggleRating(_id)}
                type="checkbox"
                id={rate}
              />
              <CheckBoxLabel htmlFor={rate}>{` ${rate}`}</CheckBoxLabel>
            </CheckBox>
          ))}
        </CheckBoxes>
      </FilterWrapper>
    </FilterContainer>
  );
};

export default withRouter(Filter);
