import "../css/globals.css";
import { Layout } from "../components";
import React from "react"; // _app에서 import해서 react 돔을 실행해야 imdex가 동작

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
