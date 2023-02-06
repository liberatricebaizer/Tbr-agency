import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content grid mobile">
        <div className="footer__contact">
          <h1>TBR Agency</h1>
          <Link className="footer__contact--m footer__text">
            @tbragency.com
          </Link>

          <div className="social__contact">
            <Link className="social__contact--link">
              <FaLinkedin className="social__contact--icon linkedin" />
            </Link>
            <Link className="social__contact--link">
              <FaFacebook className="social__contact--icon facebook" />
            </Link>
            <Link className="social__contact--link">
              <FaTwitter className="social__contact--icon twitter" />
            </Link>
          </div>
          <p className="footer__text">
            Copyright ©2023 by <b>TBR Agency</b>, Inc. All rights reserved
          </p>
        </div>
        <div className="footer__details grid">
          <div className="footer__details--list">
            <h2>Support</h2>
            <ul>
              <li>
                <Link to="/" className="link-style">
                  Help
                </Link>
              </li>
              <li>
                <Link to="/" className="link-style">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__details--list">
            <h2>Business</h2>
            <ul>
              <li>
                <Link to="/" className="link-style">
                  Driver
                </Link>
              </li>
              <li>
                <Link to="/" className="link-style">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/" className="link-style">
                  Rental
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__details--list">
            <h2>Company</h2>
            <ul>
              <li>
                <Link to="/" className="link-style">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="link-style">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
