import "../css/globals.css";
import { Layout } from "../components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react"; // _app에서 import해서 react 돔을 실행해야 index가 동작
import { StateContext } from "../context/StateContext";
import Ecommerce from "./ecommerce";

function App({ Component, pageProps }) {
  return (
    // StateContext에서 전달받은 state를 app.js에서 묶어준다

    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default App;
