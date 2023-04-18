import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Sidebar } from "./";
// import { Sidebar, Footer, Navbar, Head } from "./";

//chiidren 이라는 props로 흘려서 component 전체를 묶어줘서 _app 전체에 실행한다
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>prk-plant-shop</title>
        <link rel="icon" href="image/pjs-g.svg" />
      </Head>
      {/* import 바로 하는 방법 ctrl + space + 클릭 */}
      <header>
        <Navbar />
      </header>
      <Sidebar />
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
