import "../css/globals.css";
import { Layout } from "../components";
import React from "react"; // _app에서 import해서 react 돔을 실행해야 index가 동작
import { StateContext } from "../context/StateContext";
import dynamic from "next/dynamic";

const ComponentsWithNoSSR = dynamic(() => import("../pages/ecommerce"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
        {/* <ComponentsWithNoSSR /> */}
      </Layout>
    </StateContext>
  );
}

export default App;
