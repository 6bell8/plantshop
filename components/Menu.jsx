// dom제어  useRef
import React, { useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { Link } from "react-router-dom";
import ProfileHeader from "../public/image/profileHeader.svg";

const Menu = () => {
  const { setShowMenu } = useStateContext();

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-header">
          <button
            type="button"
            className="cart-heading"
            onClick={() => setShowMenu(false)}
          >
            <AiOutlineLeft />
          </button>
          <ProfileHeader />
        </div>
        <div className="profile-menu">
          {links.map((item) => (
            <div key={item.title}>
              <p>{item.title}</p>
              {item.links.map((link) => (
                // link 처리가 안돼서 일단
                <p
                  to={`/${link.name}`}
                  key={link.name}
                  // onClick={handleCloseSideBar}
                >
                  {link.icon}
                  <span className="capitalize">{link.name}</span>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
