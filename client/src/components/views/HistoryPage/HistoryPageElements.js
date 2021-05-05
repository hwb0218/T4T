import styled from "styled-components";

export const GoodsPaySection = styled.main`
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
