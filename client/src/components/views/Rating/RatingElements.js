import styled, { css } from "styled-components";
import { FaStar } from "react-icons/fa/index";

export const Stars = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 20px;

  svg + svg {
    margin-left: 1px;
  }
`;

export const size = css`
  font-size: 15px;
`;

export const Full = styled(FaStar)`
  color: #ff9632;
  ${size};
`;

export const Empty = styled(FaStar)`
  color: #525252;
  ${size};
`;
