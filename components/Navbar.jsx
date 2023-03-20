import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  // useStateContext 전역변수에서 가져옴
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">prk-plant</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
        {console.log(totalQuantities)}
      </button>
      {/* toggle 할 때 컴포넌트 숨기고 감추는 법  */}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
