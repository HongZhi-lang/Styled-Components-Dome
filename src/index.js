import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import bg from "./img/snowberg.jpg";
import store from "./store";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: url(${bg}) no-repeat center/cover ;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </BrowserRouter>
);
