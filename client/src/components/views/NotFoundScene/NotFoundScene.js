import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFlushed } from "react-icons/fa";

const Page404 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;

  span {
    display: block;
    font-size: 1.3rem;
    margin: 1rem 0;
  }

  div:last-child {
    display: inline-block;
    box-sizing: content-box;
    height: 50px;

    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      border: 2px solid #525252;
      border-radius: 2px;
      padding: 15px 15px;
      font-weight: bold;
      transition: 0.2s background-color ease-in-out;

      &:hover {
        border: none;
        padding: 17px 17px;
        color: white;
        background: #5f0080;
      }
    }
  }
`;

const Icon = styled(FaFlushed)`
  font-size: 6.5rem;
  color: #525252;
`;

const NotFoundScene = () => {
  return (
    <Page404>
      <div>
        <Icon />
      </div>
      <span>해당 페이지를 찾을 수 없습니다.</span>
      <div>
        <Link to="/">홈으로 가기</Link>
      </div>
    </Page404>
  );
};

export default NotFoundScene;
