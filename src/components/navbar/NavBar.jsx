import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { FiChevronDown } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [isMenuSubMenu, setIsMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setIsMenuSubMenu(!isMenuSubMenu);
  };

  /*display mobile navigation*/
  const currentNav = "mobile_nav";
  const [mobNav, setMobNav] = useState("mobile_nav-closed");
  const openNav = () => {
    setMobNav("mobile__nav-open");
  };

  const closeNav = () => {
    setMobNav("mobile_nav-closed");
  };

  return (
    <div className="header">
      <div>
        <h1>TBR Agency</h1>
        {/* <NavLink to="/logo">logo</NavLink> */}
      </div>
      <nav className="nav">
        <ul className="ul">
          <li>
            <NavLink to="/Home" className="navlink" activeClassName="active">
              <pan className="navlink__home">Home</pan>
            </NavLink>
          </li>

          <li className="navlink" id="nav__li" onClick={toggleSubmenu}>
            <Link to="#" className="navlink">
              Services <FiChevronDown />
            </Link>
            {isMenuSubMenu ? (
              <div className="class">
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <NavLink
                      to="/Ride"
                      className="navlink"
                      id="id"
                      activeClassName="active"
                    >
                      Take a Ride
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/Booking"
                      className="navlink"
                      activeClassName="active"
                      id="id"
                    >
                      Booking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Rent"
                      className="navlink"
                      activeClassName="active"
                      id="id"
                    >
                      Rental
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
          </li>
          <li>
            <NavLink to="/Help" className="navlink" activeClassName="active">
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About us"
              className="navlink"
              activeClassName="active"
            >
              About us
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="navbtn">
        <div className="sign_btn">
          <NavLink to="/Signin">
            <button className="btn" id="btn_n">
              Signin
            </button>
          </NavLink>
        </div>
        <div className="sign_btn">
          <NavLink to="/Signup">
            <button className="btn" id="btn_full">
              Signup
            </button>
          </NavLink>
        </div>

        {/* mobile na bar */}

        <div className="nav_icon">
          <button onClick={openNav}>
            <FaBars />
          </button>

          <div className={currentNav + " " + mobNav}>
            <div className="close_menu">
              <button onClick={closeNav}>
                <FaTimes />
              </button>
            </div>

            <div className="nav_bar">
              <nav className="nav-mobile-links">
                <ul className="ul-mobile">
                  <li>
                    <NavLink
                      to="/Home"
                      className="navlink-mob"
                      activeClassName="active"
                    >
                      <pan className="navlink__home">Home</pan>
                    </NavLink>
                  </li>

                  <li
                    className="navlink-mob"
                    id="nav__li"
                    onClick={toggleSubmenu}
                  >
                    <Link to="#" className="navlink-mob">
                      Services <FiChevronDown />
                    </Link>
                    {isMenuSubMenu ? (
                      <div className="class-mob">
                        <ul style={{ listStyle: "none" }}>
                          <li>
                            <NavLink
                              to="/Ride"
                              className="class-mob-link"
                              id="id"
                            >
                              Take a Ride
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="/Booking"
                              className="class-mob-link"
                              id="id"
                            >
                              Booking
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="/Rent"
                              className="class-mob-link"
                              id="id"
                            >
                              Rental
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </li>
                  <li>
                    <NavLink
                      to="/Help"
                      className="navlink-mob"
                      activeClassName="active"
                    >
                      Help
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/About us"
                      className="navlink-mob"
                      activeClassName="active"
                    >
                      About us
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
