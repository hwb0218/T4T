import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 33vh;
  border: ${({ select }) => (select ? "none" : "2px dashed #c2cdda")};
  border-radius: 10px;
  background: #fff;
  overflow: hidden;

  ${({ select }) =>
    select
      ? css`
          &:hover {
            ${CancelBtn} {
              display: block;
            }
            ${FileName} {
              display: block;
            }
          }
        `
      : "none"}
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 280px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentIcon = styled.div`
  font-size: 100px;
  color: #9658fe;
`;

export const ContentText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #bf1650;
`;

export const CancelBtn = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 20px;
  color: black;
  cursor: pointer;
  display: none;
`;

export const FileName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff;
  padding: 13px 0;
  font-size: 18px;
  background: #5f0080;
  display: none;
`;

export const CustomBtn = styled.button`
  display: block;
  width: 40%;
  height: 40px;
  margin: 0 auto;
  border: 1.2px solid #5f0080;
  color: #5f0080;
  border-radius: 5px;
  background: white;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const PreviewImagesWrapper = styled.div`
  width: 100%;
  height: 165px;
  border: 2px dashed #c2cdda;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 0.6rem;
`;
