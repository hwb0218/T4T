import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";

const ReactIcon = styled(FaReact)`
  height: 100%;
`;

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        borderTop: "1px solid #e2e2e2",
        background: "#f2f2f2",
      }}
    >
      <div style={{ display: "inline-block" }}>thanks for traveling</div>
    </div>
  );
}

export default Footer;
