// dom제어  useRef
import React, { useEffect, useState } from "react";
import {
  AiOutlineLeft,
  AiOutlineMenu,
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineStock,
  AiOutlineHome,
} from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPeopleFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummy";
import { useRouter } from "next/router";
import Image from "next/image";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import ProfileHeader from "../public/image/profileHeader.svg";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const router = useRouter();
  return (
    <MenuItem
      active={selected === to}
      className="tooltip-link"
      data-tooltip={title}
      onClick={() => router.push(`${to}`, setSelected(to))}
      icon={icon}
    >
      <p>{title}</p>
    </MenuItem>
  );
};

const Sidebar = () => {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { selected, setSelected } = useStateContext();

  return (
    <>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square" className="menu-bar">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <AiOutlineMenu /> : undefined}
          >
            {!isCollapsed && (
              <div className="pro-item-box">
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="backBtn"
                >
                  <AiOutlineLeft />
                </button>
                <ProfileHeader />
              </div>
            )}
          </MenuItem>

          {!isCollapsed && (
            <div className="profile-user-wrapper">
              <div className="profile-user-box">
                <figure className="profile-user-img"></figure>
              </div>
              <div className="profile-info">
                <p className="profile-name">박진성</p>
                <p className="profile-mode">관리자모드</p>
              </div>
            </div>
          )}

          <div>
            <Item
              title="홈"
              to="/"
              icon={<AiOutlineHome />}
              selected={selected}
              setSelected={setSelected}
            />
            <p className="sidebar-title">Info</p>
            <Item
              title="거래내역"
              to="/ecommerce"
              icon={<FiShoppingBag />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="주문내역"
              to="/orders"
              icon={<AiOutlineShoppingCart />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="직원명단"
              to="/employee"
              icon={<BsFillPeopleFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <p className="sidebar-title">Page</p>
            <Item
              title="달력"
              to="/calendar"
              icon={<AiOutlineCalendar />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<BsFillQuestionCircleFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <p className="sidebar-title">Charts</p>
            <Item
              title="막대 차트"
              to="/bar"
              icon={<AiOutlineStock />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="라인 차트"
              to="/line"
              icon={<AiOutlineAreaChart />}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </Menu>
      </ProSidebar>
    </>
  );
};

export default Sidebar;
