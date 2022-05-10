import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";

import logo from "../assets/images/websitelogo.png"
import { ReactComponent as UserLogo } from "../assets/icons/user.svg"

function NavBar() {
  const navLists = [
    { name: "Home", link: "/" },
    { name: "The Journey", link: "/journey" },
    { name: "Team", link: "/team" },
    { name: "Store", link: "/store" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className={classes["navbar__container"]}>
      {/* logo */}
      <div className={classes["navbar__logo"]}>
       <img src={logo} alt="Website logo" />
      </div>

      {/* centered items */}
      <ul className={classes["navbar__items"]}>
        {navLists.map((item) => (
          <li>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? [
                      classes["navbar__item"],
                      classes["navbar__item--active"],
                    ].join(" ")
                  : classes["navbar__item"]
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* User button */}
      <div className={classes["navbar__user"]}>
       <UserLogo className={classes["navbar__user-logo"]}  />
       <p className={classes["navbar__user-text"]}>Rohan</p>
      </div>
    </nav>
  );
}

export default NavBar;
