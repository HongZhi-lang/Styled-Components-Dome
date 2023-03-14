import React from "react";
import styled from "styled-components";
import { flexAround, Button } from "../styled/basics";
import { useNavigate } from "react-router-dom";

const Text = styled.div`
  margin: 200px auto 100px;
  color: #fff;
  text-align: left;
  position: relative;
  text-align: center;
  ${flexAround}
  flex-direction: column;
  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;
const MajorButton = styled(Button)`
  margin-top: 20px;
  background: ${(props) => props.bgcolor};
`;
function Home() {
  const navigate = useNavigate();
  // const navigation = useNavigation();
  // console.log(navigation)
  return (
    <div>
      <Text>
        <h1>Styled Component</h1>
        <div>
          <p>Visual primitives for the component age. </p>
          <p>
            Use the best bits of ES6 and CSS to style your apps without stress
          </p>
          <MajorButton
            onClick={() => {
              window.location.href = "https://styled-components.com";
            }}
            bgcolor="#ff9aa9"
          >
            Official website
          </MajorButton>
          <MajorButton
            onClick={() => navigate("/menu", { state: { a: 1 } })}
            bgcolor="#7074c7"
          >
            To Menu
          </MajorButton>
        </div>
      </Text>
    </div>
  );
}

export default Home;
