import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from ".././../../../_actions/filterActions";
import {
  FilterContainer,
  DestinationWrapper,
  Panel,
  CheckBoxes,
  CheckBoxInput,
  CheckBoxLabel,
  CheckBox,
} from "./FilterElements";
import axios from "axios";

const Filter = ({ list, showFilteredResults }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);
  const [checked, setChecked] = useState([]);

  const handleToggle = (id) => {
    let currentIndex = checked.indexOf(id);
    let newChecked;

    currentIndex === -1
      ? (newChecked = [...checked, id])
      : (newChecked = checked.slice(0, currentIndex));
    setChecked(newChecked);
    dispatch(filter(newChecked, "destination"));
  };

  return (
    <FilterContainer>
      <DestinationWrapper>
        <Panel>여행지</Panel>
        <CheckBoxes>
          {list.map(({ _id, city }) => (
            <CheckBox key={_id}>
              <CheckBoxInput
                onChange={() => handleToggle(_id)}
                type="checkbox"
                id={_id}
                value={_id}
                checked={checked.includes(_id)}
              />
              <CheckBoxLabel htmlFor={_id}>{` ${city}`}</CheckBoxLabel>
            </CheckBox>
          ))}
        </CheckBoxes>
      </DestinationWrapper>
      <div>price</div>
      <div>rating</div>
    </FilterContainer>
  );
};

export default Filter;
