import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";

import logo from "../assets/images/websitelogo.png";
import { ReactComponent as UserLogo } from "../assets/icons/user.svg";

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
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
      <ul
        className={
          isNavExpanded
            ? [classes["navbar__items"], classes["expanded"]].join(" ")
            : classes["navbar__items"]
        }
      >
        {navLists.map((item) => (
          <li key={`nav-${item.name}`}>
            <NavLink
              onClick={() => setIsNavExpanded(false)}
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
        <UserLogo className={classes["navbar__user-logo"]} />
        <p className={classes["navbar__user-text"]}>Rohan</p>
      </div>

      <button
        className={classes.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
}

export default NavBar;
