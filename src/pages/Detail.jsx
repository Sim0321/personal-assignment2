import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTodoBYID } from "../redux/modules/todo";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const { id } = useParams();
  console.log("Dtodo", todo);

  useEffect(() => {
    dispatch(getTodoBYID(id));
  }, [id]); // 의존성 배열 안에 함수 넣지마라  노란색 줄은 eslint공부

  // const params = useParams();
  // console.log(params);
  // const data = {
  //   id: 1,
  //   title: "hey",
  //   body: "hey",
  // };

  // const detail = data[params];

  const goBack = () => {
    navigate(-1);
  };

  // console.log("detail :", detail);
  return (
    <DetailContainer>
      <div>
        <div className="ID">ID : {todo.id}</div>
        <h1>제목 : {todo.title}</h1>
        <p>내용 : {todo.body}</p>
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
