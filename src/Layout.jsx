import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

// import Form from "./components/Form";

const Layout = () => {
  return (
    <Wrap>
      <Header></Header>
      <Outlet />
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  height: 300px;
  /* background-color: pink; */
`;
