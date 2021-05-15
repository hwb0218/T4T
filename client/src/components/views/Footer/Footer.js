import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  border-top: 1px solid #e2e2e2;
  font-size: 1rem;
  background: #f2f2f2;
`;

const Text = styled.span`
  line-height: 80px;
`;

function Footer() {
  return (
    <FooterDiv>
      <Text>thanks for traveling</Text>
    </FooterDiv>
  );
}

export default Footer;
