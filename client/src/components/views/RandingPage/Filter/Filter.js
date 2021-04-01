import React from "react";
import {
  FilterContainer,
  DestinationWrapper,
  Panel,
  CheckBoxes,
  CheckBoxInput,
  CheckBoxLabel,
  CheckBox,
} from "./FilterElements";
import { destination } from "./Datas";

const Filter = () => {
  return (
    <FilterContainer>
      <DestinationWrapper>
        <Panel>여행지</Panel>
        <CheckBoxes>
          {destination.map(({ _id, city }) => (
            <CheckBox key={_id}>
              <CheckBoxInput id={_id} type="checkbox" value={_id} />
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
