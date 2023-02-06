import React from "react";
import { Link } from "react-router-dom";
import "./SectionCta.css";
const SectionCta = () => {
  return (
    <section className="section__cta">
      <div className="container">
        <div className="cta__box">
          <h1 className="heading__secondary">Start business with TBR Agency</h1>
          <p className="cta__text">
            Need to work with us. Such as be our driver, posting your hotel and
            house to rent. Click the button below to start a business with us
          </p>
          <Link to="/" className="btn btn__full cta__btn">
            Work with Us
          </Link>
        </div>
      </div>
    </section>
  );
};
export default SectionCta;
