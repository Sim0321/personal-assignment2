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

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
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
