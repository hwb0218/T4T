import React from "react";
import Spinner from "../../resources/spinner.svg";
import styled from "styled-components";

const FullPageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #a1a1a1ad;
`;

const Loader = styled.img`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  position: absolute;
`;

const FullPageLoader = () => {
  return (
    <FullPageContainer>
      <Loader src={Spinner} alt="loading" />
    </FullPageContainer>
  );
};

export default FullPageLoader;
