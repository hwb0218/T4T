import styled, { css } from "styled-components";

export const FileUploadContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

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
    select &&
    css`
      &:hover {
        ${CancelBtn} {
          display: block;
        }
        ${FileName} {
          display: block;
        }
      }
    `}
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
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
  text-align: center;
  bottom: 0;
  width: 100%;
  color: #fff;
  padding: 13px 0;
  font-size: 18px;
  background: #5f0080;
  display: none;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
`;

export const CustomBtn = styled.button`
  display: block;
  width: 45%;
  height: 40px;
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
  border: 2px solid #c2cdda;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;

  @media screen and (max-width: 451px) {
    height: 15vh;
  }
`;
