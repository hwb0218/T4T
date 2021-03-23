import React from "react";
import {
  CancelBtn,
  ContentIcon,
  ContentText,
  FileName,
  Image,
  Img,
  Wrapper,
} from "./FileUploadElements";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa/index";

const ImagePreview = () => {
  return (
    <>
      <Wrapper select={selectedFiles}>
        <Image>{previewURL ? <Img src={previewURL} /> : ""}</Image>
        <div>
          <ContentIcon>
            <FaCloudUploadAlt />
          </ContentIcon>
          <ContentText>선택한 파일이 없습니다</ContentText>
        </div>
        <CancelBtn onClick={ClickCancelBtn}>
          <FaTimes />
        </CancelBtn>
        <FileName>{fileNames}</FileName>
      </Wrapper>
    </>
  );
};

export default ImagePreview;