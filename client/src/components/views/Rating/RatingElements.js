import styled, { css } from "styled-components";
import { FaStar } from "react-icons/fa/index";

export const Stars = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 20px;

  svg + svg {
    margin-left: 1px;
  }

  ${({ card }) =>
    card &&
    css`
      position: absolute;
      right: 20px;
    `}
`;

const sizes = css`
  font-size: 1rem;
`;

export const Full = styled(FaStar)`
  color: #ff9632;
  ${sizes}
`;

export const Empty = styled(FaStar)`
  color: #525252;
  ${sizes}
`;
