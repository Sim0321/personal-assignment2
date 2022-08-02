import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>My Todo List</h1>
      <h3>React</h3>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  border-radius: 10px 10px 0 0;
  border: 1px solid #eee;
`;
