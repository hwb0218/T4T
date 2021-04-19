import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

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
    display: none;
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
  font-size: 1.3rem;
  font-weight: bold;
  margin: 10px 0;

  span {
    color: #5f0080;
  }
`;

export const PaymentButton = styled.button`
  background: #5f0080;
  border: none;
  padding: 1rem 2.5rem;
  margin-left: 30px;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  color: white;

  ${({ theme }) => theme.mobile`
    margin: 0;
  `}
`;
