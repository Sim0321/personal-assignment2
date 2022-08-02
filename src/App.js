import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <Wrap>
      <Header></Header>
      <Form></Form>
      <TodoList></TodoList>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  height: 300px;
  /* background-color: pink; */
`;
