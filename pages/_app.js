import "../css/globals.css";
import { Layout, Loading, Popup } from "../components";
import React, { useState } from "react"; // _app에서 import해서 react 돔을 실행해야 index가 동작
import { StateContext } from "../context/StateContext";
import Router from "next/router";

function App({ Component, pageProps }) {
  //  app 내에서 Router.event.on로 로딩 제어
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <StateContext>
      <Layout>
        {/* useState 논리연산자:  먼저 나온 게 false면 안보여줌 */}
        <Popup />
        {loading && <Loading />}
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default App;
