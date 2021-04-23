import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  max-width: 950px;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e2e2;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ProductInfoList = styled.li`
  display: flex;
  & + & {
    margin-top: 0.3rem;
  }
`;

export const TitleBox = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #000;

  & + & {
    margin-left: 110px;
  }
`;

export const ProductTit = styled.p`
  width: 115px;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.5px;
  font-weight: bold;
`;

export const ProductContent = styled.p`
  width: 115px;
  letter-spacing: 0.5px;
  font-size: 13px;
  font-weight: bold;
`;

export const ProductDescription = styled.div`
  min-width: 320px;
  font-weight: bold;
  font-size: 13px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 300px;
`;

export const Btn = styled.button`
  display: inline-block;
  max-width: 300px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: white;
  letter-spacing: 1px;

  & + & {
    margin-top: 0.8rem;
  }

  &:first-child {
    background: #565656;
  }

  &:last-child {
    background: #5f0080;
  }
`;
