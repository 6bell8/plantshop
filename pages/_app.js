import "../css/globals.css";
import { Layout } from "../components";
import React from "react"; // _app에서 import해서 react 돔을 실행해야 index가 동작
import { StateContext } from "../context/StateContext";
import dynamic from "next/dynamic";

const ComponentsWithNoSSR = dynamic(
  () => import("../pages/ecommerce"), // Component로 사용할 항목을 import합니다.
  { ssr: false }
); // ssr옵션을 false로 설정해줍니다.

function App({ Component, pageProps }) {
  return (
    // StateContext에서 전달받은 state를 app.js에서 묶어준다

    <StateContext>
      <Layout>
        <Component {...pageProps} />
        <ComponentsWithNoSSR />
      </Layout>
    </StateContext>
  );
}

export default App;
