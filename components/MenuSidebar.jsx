// dom제어  useRef
import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { Link } from "react-router-dom";
import { useRouter } from "next/router";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import ProfileHeader from "../public/image/profileHeader.svg";

const MenuSidebar = () => {
  const router = useRouter();
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
            <div key={item.title} className="profile-desc">
              <p className="profile-title">{item.title}</p>
              {item.links.map((link, idx) => (
                // link 처리가 안돼서 일단
                <div className="profile-links" key={link.name}>
                  <p
                    className={"profile-link"}
                    onClick={() => router.push(`${link.name}`)}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
