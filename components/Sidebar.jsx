// dom제어  useRef
import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummy";
import { Link } from "react-router-dom";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SunMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import ProfileHeader from "../public/image/profileHeader.svg";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <p>{title}</p>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const router = useRouter();
  // const { setShowMenu } = useStateContext();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square" className="menu-bar">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <AiOutlineLeft /> : undefined}
          >
            {!isCollapsed && (
              <div className="pro-item-box">
                {" "}
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
                <Image
                  className="profile-user"
                  width="100px"
                  height="100px"
                  src="/image/주호민.jpg"
                />
              </div>
              <div className="profile-info">
                <p className="profile-name">박진성</p>
                <p className="profile-mode">관리자모드</p>
              </div>
            </div>
          )}

          {/* <div paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="대시보드"
              to="/"
              // icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <p>Data</p>
            <Item
              title="관리팀"
              to="/team"
              // icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="고객지원"
              to="/contacts"
              // icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="송장 청구서"
              to="/invoices"
              // icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <p>Pages</p>
            <Item
              title="프로필 형식"
              to="/form"
              // icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="달력"
              to="/calendar"
              // icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              // icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <p>Charts</p>
            <Item
              title="Bar Chart"
              to="/bar"
              // icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Line Chart"
              to="/line"
              // icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </div> */}
        </Menu>
      </ProSidebar>
    </>
  );
};

export default Sidebar;
