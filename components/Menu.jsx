// dom제어  useRef
import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const Menu = () => {
  const { setShowMenu } = useStateContext();

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowMenu(false)}
        >
          <AiOutlineLeft />
        </button>
      </div>
    </div>
  );
};

export default Menu;
