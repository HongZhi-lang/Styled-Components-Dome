import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
// import { flexAround } from "../styled/basics";

const { Meta } = Card;
const CardWrapper = styled(Card)`
  margin: auto;
  margin-bottom: 20px;
  display: inline-block;
`;

const Exhibit = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  margin: 100px auto;
  p {
    width: 80%;
    padding-top: 60px;
    margin: auto;
    color: #fff;
    z-index: 999;
  }
`;
const Showpiece = styled.div`
  height: 500px;
  width: 800px;
  border-radius: 30px;
  box-shadow: 0 0 5px #525590;
  background-color: #7074c7;
  transform: rotate(${(props) => props.rotate}deg);
  position: absolute;
  z-index: -1;
`;
const MenuBox = styled.div`
  width: 1000px;
  height: calc(100vh - 80px);
  margin: auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .card-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

function Menu() {
  const location = useLocation();
  console.log(location);
  return (
    <MenuBox>
      <Exhibit>
        <Showpiece rotate="-3"></Showpiece>
        <Showpiece rotate="3"></Showpiece>
        <p>
          Automatic critical CSS: styled-components keeps track of which
          components are rendered on a page and injects their styles and nothing
          else, fully automatically. Combined with code splitting, this means
          your users load the least amount of code necessary.
        </p>
        <p>
          No class name bugs: styled-components generates unique class names for
          your styles. You never have to worry about duplication, overlap or
          misspellings.
        </p>
        <p>
          Easier deletion of CSS: it can be hard to know whether a class name is
          used somewhere in your codebase. styled-components makes it obvious,
          as every bit of styling is tied to a specific component. If the
          component is unused (which tooling can detect) and gets deleted, all
          its styles get deleted with it.
        </p>
      </Exhibit>
      <div className="card-wrapper">
        {Array.from({ length: 11 }).map((_, index) => (
          <CardWrapper
            key={index}
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </CardWrapper>
        ))}
      </div>
    </MenuBox>
  );
}

export default Menu;
