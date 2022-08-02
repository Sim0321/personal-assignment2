import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <DetailContainer>
      <div>
        <div className="ID">ID : 20</div>
        <h1>title</h1>
        <p>desc</p>
        <button onClick={goBack}>이전으로</button>
      </div>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  /* border: 2px solid rgb(238, 238, 238); */
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  /* background-color: pink; */
  div {
    width: 600px;
    height: 400px;
    padding: 30px;
    box-sizing: border-box;
    border: 2px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .ID {
      width: 100%;
      height: 40px;
      /* background-color: royalblue; */
      font-size: 25px;
      border: none;
      text-align: right;
      padding: 0;
    }
    h1 {
      margin: 30px 0;
    }
    p {
      padding: 40px 0;
      font-size: 20px;
    }
    button {
      width: 100%;
      height: 50px;
      border-radius: 20px;
      border: none;
      transition: all 0.5s;
      font-weight: bold;
      font-size: 18px;
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
`;
