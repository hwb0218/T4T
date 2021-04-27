import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { FaRegGrimace } from "react-icons/fa";

export const CartPageContainer = styled.main`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.tablet`
    padding: 0 25px;
  `};

  ${({ theme }) => theme.mobile`
    max-width: 500px;
    padding: 0 10px;
  `}
`;

export const Table = styled.table`
  width: 100%;
  min-width: 285px;
  border-spacing: 0;
`;

export const Thead = styled.thead`
  background: #f7f7f7;
  line-height: 48px;
  font-size: 15px;
  font-weight: bold;

  ${({ theme }) => theme.mobile`
    
    tr::after {
      display: inline-block;
      content: "상품 전체 선택"
    }
    
    th:not(:first-child) {
      display: none;
    }
  `}
`;

export const TableRow = styled.tr`
  & + & {
    border-top: 1px solid #e2e2e2;
  }

  &:last-child {
    border-bottom: 1px solid #e2e2e2;
  }
`;

export const TableData = styled.td`
  text-align: center;
  vertical-align: middle;

  &:before {
    display: none;
  }

  ${({ theme }) => theme.mobile`
    display: block;
    text-align: left;
    width: 100%;
      
    & + & {
      padding-top: 10px;
    }
    
    &:last-child {
      padding-bottom: 10px;
    }
    
    &:not(:nth-child(2))::before {
    content: attr(data-th);
    width: 7rem;
    display: inline-block;
  }
  `}
`;

export const ProductWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 5px 0 5px 0;
  min-height: 100px;
`;

export const ProductThumb = styled.span`
  width: 100px;
  height: 100px;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
`;

export const ProductTitle = styled.span`
  position: absolute;
  left: 110px;
`;

export const RemoveBtn = styled(FaTimes)`
  position: absolute;
  top: 0;
  right: 14px;
  font-size: 1.3rem;
  color: #e2e2e2;
  cursor: pointer;
`;

export const ThumbImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const OrderCalculator = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mobile`
    flex-direction: column;
  `}
`;

export const TotalPrice = styled.div`
  width: 300px;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 10px 0;

  span {
    color: #5f0080;
  }

  ${({ theme }) => theme.mobile`
    width: inherit;
  `}
`;

const button = css`
  background: #5f0080;
  border: none;
  border-radius: 2px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

export const PaymentButton = styled.button`
  ${button};
  padding: 1rem 2.5rem;
  font-size: 14px;

  ${({ theme }) => theme.mobile`
    margin: 0;
  `}
`;

export const CheckBoxInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background: #e2e2e2;
  border-radius: 3px;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:after {
    position: relative;
    bottom: 2px;
    right: -1px;
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: white;
    display: none;
  }

  &:hover {
    background: #a5a5a5;
  }

  &:checked {
    background: #5f0080;
    &:after {
      display: inline-block;
    }
  }
`;

export const EmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-top: 10px;
`;

export const EmptyProduct = styled(FaRegGrimace)`
  padding-bottom: 10px;
  font-size: 5rem;
  color: #5f5f5f;
`;

export const Content = styled.p`
  font-size: 14px;
  color: #5f5f5f;
`;

export const QuantityWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditBtn = styled.button`
  ${button};
  width: 38px;
  margin-top: 2px;
  font-size: 13px;
`;
