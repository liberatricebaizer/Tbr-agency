import React from "react";
import Travelimg from "../../../assets/travelimg.jpg";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SectionHero.css";
const SectionHero = () => {
  return (
    <section className="section__hero">
      <div className="container grid grid__2__cols mobile">
        <div className="travel__text__box">
          <h1 className="heading__primary">
            Best platform for Traveling, Booking and moving your business fast
          </h1>
          <p className="text">
            Travel by taking a ride, Book a room from any hotel you desire and
            Rent a house from anywhere you want with TBR Agency the all-in-one
            platform.
          </p>
          <div className="cta-box">
            <Link to="/signup" className="btn btn__full">
              Get Started
            </Link>
            <Link to="/" className="btn btn__outline">
              Learn More <FaLongArrowAltDown className="down" />
            </Link>
          </div>
        </div>
        <div className="travel__img__box">
          <img src={Travelimg} alt="transport traveling" />
        </div>
      </div>
    </section>
  );
};
export default SectionHero;
