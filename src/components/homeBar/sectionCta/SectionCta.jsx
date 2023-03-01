import React, { useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./SectionCta.css";
const SectionCta = () => {
  const [poped, setPoped] = useState(false);
  const popHandler = () => {
    setPoped(true);
  };
  const closetabs = () => {
    setPoped(false);
  };
  return (
    <section className="section__cta">
      <div className="container">
        <div className="cta__box">
          <h1 className="heading__secondary">Start business with TBR Agency</h1>
          <p className="cta__text">
            Need to work with us. Such as be our driver, posting your hotel and
            house to rent. Click the button below to start a business with us
          </p>
          <Link className="btn btn__full cta__btn" onClick={popHandler}>
            Work with Us
          </Link>
        </div>
      </div>

      <div className={`popup-box container ${poped === true ? "poped" : ""}`}>
        <div className="popup-content">
          <button className="close" onClick={closetabs}>
            {/* <FaClosedCaptioning /> */}
            {/* GrClose */}
            <GrClose className="iconClose" />
          </button>
          <h2 className="heading__secondary">Work with us as a</h2>
          <div className="popup-jobs">
            <Link to="/Driver" style={{ textDecoration: "none" }}>
              <div className="btn btn__full">Driver</div>
            </Link>

            <Link to="/RentForm" style={{ textDecoration: "none" }}>
              <div className="btn btn__full">Renter</div>
            </Link>
          </div>
        </div>
      </div>
      <div
        onClick={closetabs}
        className={poped === true ? "pop-background" : ""}
      ></div>
    </section>
  );
};
export default SectionCta;
