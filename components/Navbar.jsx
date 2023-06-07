import React from "react";
import Link from "next/link";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { PjsIcon } from "../components";
import { RiNotification3Line } from "react-icons/ri";
import { Cart } from "./";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  // useStateContext 전역변수에서 가져옴
  const {
    showCart,
    setShowCart,
    totalQuantities,
    selected,
    setSelected,
    users,
    setUsers,
    visiter,
    setVisiter,
  } = useStateContext();
  const router = useRouter();

  // 로그아웃의 주요 기능 localstorage에 토큰이 있으면 로그인 상태 없으면 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="navbar-container">
      <p
        className="logo"
        onClick={() => {
          setSelected("/");
        }}
      >
        <Link href="/">
          <a href="">
            <PjsIcon />
          </a>
        </Link>
      </p>
      <div className="profile-box">
        <button className="signUp-box">
          <p
            className="signUp-title login"
            onClick={() => router.push("/login")}
          >
            {!users ? (
              <span>로그인</span>
            ) : (
              users && <span onClick={handleLogout}>로그아웃</span>
            )}
          </p>
        </button>
        <p className="user">
          <span className="user-desc">안녕하세요, </span>
          <span className="user-name"> {visiter} 님</span>
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
      </div>
    </div>
  );
};

export default Navbar;
