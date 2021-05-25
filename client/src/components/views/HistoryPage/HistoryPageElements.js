import styled from "styled-components";
import { FaRegGrimace } from "react-icons/fa/index";

export const GoodsPaySection = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  ${({ theme }) => theme.mobile`
    padding: 0;
  `}
`;

export const Month = styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  border-bottom: 2px solid #5f0080;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20%);
    padding: 0.3rem 1rem;
    display: block;
    border: 2px solid #5f0080;
    border-radius: 15px;
    background: white;
    font-weight: bold;
  }
`;

export const EmptyBox = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const EmptyPayment = styled(FaRegGrimace)`
  padding-bottom: 10px;
  font-size: 5rem;
  color: #5f5f5f;
`;

export const EmptyMessage = styled.p`
  font-size: 14px;
  color: #5f5f5f;
`;
