import React from "react";

import "./topnav.css";

import { Link } from "react-router-dom";

import Dropdown from "../../../../dropdown/Dropdown";

import user_image from "../../../../assets/images/logo.png";

//import user_menu_admin from '../../../../assets/JsonData/user_menu_admin.json'

const user_menu_admin = [
  {
    icon: "bx bx-sm bx-user",
    routes: "/family/profile",
    content: "Hồ sơ",
  },
  {
    icon: "bx bx-sm bx-log-out-circle bx-rotate-180",
    routes: "/family/logout",
    content: "Đăng xuất",
  },
];

let curr_user = {
  display_name: localStorage.getItem("name"),
  image: user_image,
};

// const renderNotificationItem = (item, index) => (
//     <div className="notification-item" key={index}>
//         <i className={item.icon}></i>
//         <span>{item.content}</span>
//     </div>
// )

var renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user_image} alt="" />
    </div>
    <div className="topnav__right-user__name">
      <span className="topnav__right-hello">Xin chào </span> <br />
      {localStorage.getItem("name")}
    </div>
  </div>
);

let renderUserMenu = (item, index) => (
  <Link to={item.routes} key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

var Topnav = () => {
  return (
    <div className="topnav">
      <div className="welcome-info"></div>

      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu_admin}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        {/* <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div> */}
        <div className="topnav__right-item"></div>
      </div>
    </div>
  );
};

export default Topnav;
