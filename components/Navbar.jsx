import React from "react";
import Link from "next/link";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { PjsIcon } from "../components";
import { RiNotification3Line } from "react-icons/ri";
import { Cart } from "./";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  // useStateContext 전역변수에서 가져옴
  const { showCart, setShowCart, totalQuantities, selected, setSelected } =
    useStateContext();

  const router = useRouter();

  // useEffect(() => {
  //   return () => {

  //   };
  // }, [router]);

  return (
    <div className="navbar-container">
      <p
        className="logo"
        onClick={() => {
          setSelected("/");
        }}
      >
        <Link href="/">
          <PjsIcon />
        </Link>
      </p>
      <div className="profile-box">
        <button className="signUp-box">
          <p
            className="signUp-title signup"
            onClick={() => router.push("/signup")}
          >
            회원가입
          </p>
          <p className="signUp-title login">로그인</p>
        </button>
        <p className="user">
          <span className="user-desc">안녕하세요, </span>
          <span className="user-name"> 방문자 님</span>
        </p>
        <button type="button" className="noti-icon nav-icon">
          <RiNotification3Line />
        </button>
        <button
          type="button"
          className="cart-icon .nav-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {/* toggle 할 때 컴포넌트 숨기고 감추는 법  */}
        {showCart && <Cart />}
        {/* profile orders */}
        {/* <button
          type="button"
          className="nav-icon"
          onClick={() => setShowMenu(true)}
        >
          <AiOutlineMenu />
        </button> */}
        {/* toggle 할 때 컴포넌트 숨기고 감추는 법 추가  */}
        {/* {showMenu && <Sidebar />} */}
      </div>
    </div>
  );
};

export default Navbar;
