import React, { useState } from "react";
import Routers from "./routers";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { flexAround, Button } from "./styled/basics";
import { Modal, Input } from "antd";
import "animate.css";

const Header = styled.div`
  height: 80px;
  width: 100%;
  color: #fff;
  background-color: #f3b6be;
  box-shadow: #f3b6be 0px 10px 10px 5px;
  ${flexAround}
  h1 {
    cursor: pointer;
    font-family: "华文行楷";
    letter-spacing: 4px;
  }
  nav {
    min-width: 400px;
    font-size: 20px;
    ${flexAround}
  }
`;
const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
`;
const SignButton = styled(Button)`
  background: transparent;
  &:hover {
    background-color: #ffbebe;
  }
`;
const InputWrapper = styled(Input)`
  margin-top: 20px;
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <Header>
        <h1 onClick={() => navigate("/")}>Styled Component</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/profile">Profile</Link>
          <SignButton as="a" onClick={showModal}>
            sign in
          </SignButton>
        </nav>
      </Header>
      <Routers></Routers>
      <Modal
        title="sign in"
        centered
        okText="sign in"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <InputWrapper placeholder="请输入账号" />
        <InputWrapper placeholder="请输入密码" />
      </Modal>
    </div>
  );
}
console.log("cherry-pick1");
console.log("NODE_ENV", process.env.NODE_ENV)
export default App;
