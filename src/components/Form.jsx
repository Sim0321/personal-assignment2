import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todo";

import nextId from "react-id-generator";

const Form = () => {
  const dispatch = useDispatch();

  const id = nextId();

  const todos = useSelector((state) => state.todo.todos);
  // console.log("todos.id :", todos);
  // initialState을 만들어서
  // const [todo, setTodo] = useState(initialState);
  // const { name, value } = e.target; 이걸로 했어야 했나. 하지만 이해를 못하겠다..;;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangetitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangebodyHandler = (e) => {
    setBody(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || body === "") {
      alert("입력을 해주세요");
      return null;
    }
    dispatch(
      // 처음에 두번 눌러야 state에 추가가 됨
      addTodo({
        // id: todos[todos.length - 1].id + 1,
        id,
        title,
        body,
        isDone: false,
      })
    );

    setTitle("");
    setBody("");
  };
  console.log("todos :", todos);

  // console.log("title :", title);
  // console.log("body :", body);
  return (
    <FormContainer>
      <form onSubmit={onSubmitHandler}>
        <div className="flex-box">
          <label>제목</label>
          <input type="text" value={title} onChange={onChangetitleHandler} />
          <label>내용</label>
          <input type="text" value={body} onChange={onChangebodyHandler} />
        </div>
        <button>추가하기</button>
      </form>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  /* background-color: skyblue; */
  form {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    border-radius: 15px;
    background-color: #ddd;
    margin: 30px 0;
    .flex-box {
      display: flex;
      gap: 20px;
      align-items: center;
      label {
        font-size: 18px;
        font-weight: bold;
      }
      input {
        width: 240px;
        height: 40px;
        padding: 0 12px;
        border-radius: 15px;
        /* outline: none; */
        border: none;
        font-size: 18px;
      }
    }
    button {
      border: none;
      height: 40px;
      cursor: pointer;
      border-radius: 10px;
      background-color: teal;
      width: 140px;
      color: rgb(255, 255, 255);
      font-weight: bold;
      font-size: 20px;
      transition: all 0.5s;
      &:hover {
        background-color: #fff;
        color: teal;
      }
    }
  }
`;
