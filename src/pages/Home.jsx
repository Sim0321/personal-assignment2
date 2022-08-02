import React from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";

import styled from "styled-components";

const Home = () => {
  return (
    <Wrap>
      <Form></Form>
      <TodoList></TodoList>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  height: 300px;
  /* background-color: pink; */
`;
