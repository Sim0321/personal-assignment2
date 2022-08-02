import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo, toggleTodo } from "../redux/modules/todo";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  console.log("todos :", todos);
  return (
    <ListContainer>
      <h2>To Do !!</h2>
      <section>
        {todos.map(
          (todo) =>
            !todo.isDone && (
              <Todo key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.body}</p>
                <div className="btn-box">
                  <button
                    className="delete"
                    onClick={() => onDeleteHandler(todo)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="complete"
                    onClick={() => onToggleHandler(todo)}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </div>
              </Todo>
            )
        )}
      </section>
      <h2>Finish !!</h2>
      <section>
        {todos.map(
          (todo) =>
            todo.isDone && (
              <Todo key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.body}</p>
                <div className="btn-box">
                  <button
                    className="delete"
                    onClick={() => onDeleteHandler(todo)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="complete"
                    onClick={() => onToggleHandler(todo)}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </div>
              </Todo>
            )
        )}
      </section>
    </ListContainer>
  );
};

export default TodoList;

const ListContainer = styled.div`
  padding: 0 20px;
  /* background-color: orange; */
  section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* background-color: pink; */
  }
`;

const Todo = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;
  .btn-box {
    display: flex;
    justify-content: center;
    padding: 12px;
    gap: 12px;
    .delete {
      border: 1px solid red;
      height: 40px;
      width: 120px;
      background-color: rgb(255, 255, 255);
      border-radius: 12px;
      cursor: pointer;
      font-weight: bold;
      font-size: 20px;
      transition: all 0.5s;
      &:hover {
        background-color: red;
        color: #fff;
      }
    }
    .complete {
      border: 1px solid green;
      height: 40px;
      width: 120px;
      background-color: rgb(255, 255, 255);
      border-radius: 12px;
      cursor: pointer;
      font-weight: bold;
      font-size: 20px;
      transition: all 0.5s;
      &:hover {
        background-color: green;
        color: #fff;
      }
    }
  }
`;
