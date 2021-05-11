import styled from "styled-components";

export const GoodsPayList = styled.ul`
  width: 100%;
  ${({ theme }) => theme.mobile`
    padding: 0 0.5rem;
  `}
`;

export const GoodsPayItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  width: 100%;

  & + & {
    border-top: 1px solid #e2e2e2;
  }
`;

export const GoodsItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  width: 60%;
  min-width: 200px;
`;

export const Img = styled.img`
  display: block;
  width: 90px;
  height: 90px;
`;

export const GoodsInfo = styled.div`
  padding-left: 1.5rem;
  min-width: 100px;

  p {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.9rem;
  }

  ul {
    margin: 2px 0;

    li {
      display: inline-block;
      font-size: 0.9rem;

      @media screen and (max-width: 451px) {
        display: block;
      }

      &:last-child {
        color: #525252;
      }

      &:first-child:after {
        content: "|";
        display: inline-block;
        padding: 0 0.2rem;
        color: #e2e2e2;

        @media screen and (max-width: 451px) {
          display: none;
        }
      }
    }
  }
`;

export const ButtonItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 110px;
  height: 29px;

  button {
    width: 100%;
    border: 1px solid #e2e2e2;
    background: inherit;
    color: #424242;
    line-height: 27px;
    font-size: 13px;
    cursor: pointer;
  }

  & > button {
    margin-top: 5px;
  }

  div {
    font-size: 13px;
    text-align: center;
    font-weight: bold;
    color: #5f0080;
  }
`;
