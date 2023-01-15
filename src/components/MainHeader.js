import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { FaBars } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
const MainHeader = () => {
  const [isMenuSubMenu, setIsMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setIsMenuSubMenu(!isMenuSubMenu);
  };

  return (
    <div className={classes.header}>
      <nav className={classes.nav}>
        <h1>TBR Agency</h1>
        {/* <NavLink to="/logo">logo</NavLink> */}

        <ul className={classes.ul}>
          <li>
            <NavLink
              to="/Home"
              className={classes.navlink}
              activeClassName={classes.active}
            >
              <pan className={classes.navlink__home}>Home</pan>
            </NavLink>
          </li>

          <li
            className={classes.navlink}
            id={classes.nav__li}
            onClick={toggleSubmenu}
          >
            <Link to="#" className={classes.navlink}>
              Services <FiChevronDown />
            </Link>
            {isMenuSubMenu ? (
              <div className={classes.class}>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <NavLink
                      to="/Ride"
                      className={classes.navlink}
                      id={classes.id}
                      activeClassName={classes.active}
                    >
                      Take a Ride
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/Booking"
                      className={classes.navlink}
                      activeClassName={classes.active}
                      id={classes.id}
                    >
                      Booking
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
          </li>
          <li>
            <NavLink
              to="/Help"
              className={classes.navlink}
              activeClassName={classes.active}
            >
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About us"
              className={classes.navlink}
              activeClassName={classes.active}
            >
              About us
            </NavLink>
          </li>
        </ul>
        <div className={classes.mobnav}>
          <FaBars />
          <div className={classes.menuLinks}></div>
        </div>
        <div className={classes.navbtn}>
          <NavLink to="/Signin">
            <button className={classes.btn} id={classes.btn_n}>
              Signin
            </button>
          </NavLink>
          <NavLink to="/Signup">
            <button className={classes.btn} id={classes.btn_full}>
              Signup
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default MainHeader;
