// import React from "react";
// import styled from "styled-components";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import TodoList from "./components/TodoList";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

//라우터
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

// const Wrap = styled.div`
//   max-width: 1200px;
//   min-width: 800px;
//   margin: 0 auto;
//   height: 300px;
//   /* background-color: pink; */
// `;
