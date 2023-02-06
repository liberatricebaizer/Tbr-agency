import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import hotel1 from "../../../assets/img1.jpg";
import hotel2 from "../../../assets/img2.jpg";
import hotel3 from "../../../assets/img3.jpg";
import hotel4 from "../../../assets/img4.jpg";
import curveup from "../../../assets/curve-up.svg";
import rent1 from "../../../assets/rent1.jpg";
import rent2 from "../../../assets/rent2.jpg";
import rent3 from "../../../assets/rent3.jpg";
import rent4 from "../../../assets/rent4.jpg";
import "./SectionFeature.css";
const SectionFeature = () => {
  return (
    <Fragment>
      <div className="curve-divider">
        <img src={curveup} alt="" />
      </div>
      <section className="section__features">
        <div className="grid grid__2__cols mobile">
          <div className="feature__text__box">
            <h2 className="heading__secondary">
              Book a ride in easy and convenient way
            </h2>
            <p className="feature__text">
              You can use our website or mobile app to make a reservation, track
              your driver. In our transportation services, we also offer a range
              of travel-related information, including local events and
              attractions, to help you make the most of your trip.
            </p>
            <Link to="/" className="btn btn__full">
              Take a Ride
            </Link>
          </div>
          <div className="feature__img__box grid grid__2__cols">
            <div className="boxImg">
              <img
                className="feature__img"
                src="https://images.pexels.com/photos/314374/pexels-photo-314374.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="trasport"
              />
            </div>
            <div className="boxImg">
              <img
                className="feature__img"
                src="https://images.pexels.com/photos/674665/pexels-photo-674665.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="trasport"
              />
            </div>
            <div className="boxImg">
              <img
                className="feature__img"
                src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="trasport"
              />
            </div>
            <div className="boxImg">
              <img
                className="feature__img"
                src="https://images.pexels.com/photos/3787149/pexels-photo-3787149.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="trasport"
              />
            </div>
          </div>
          <div className="feature__img__box grid grid__2__cols">
            <div className="boxImg">
              <img className="feature__img" src={hotel1} alt="" />
            </div>
            <div className="boxImg">
              <img className="feature__img" src={hotel2} alt="" />
            </div>
            <div className="boxImg">
              <img className="feature__img" src={hotel3} alt="" />
            </div>
            <div className="boxImg">
              <img className="feature__img" src={hotel4} alt="" />
            </div>
          </div>
          <div className="feature__text__box">
            <h2 className="heading__secondary">Explore available Hotels</h2>
            <p className="feature__text">
              Experience comfort and convenience hotels with comfortable rooms,
              on-site amenities and friendly staff. Book your stay now and enjoy
              our hospitality.
            </p>
            <Link to="/" className="btn btn__full">
              Book Now
            </Link>
          </div>
          <div className="feature__text__box">
            <h2 className="heading__secondary">
              Rent a house for your vacations
            </h2>
            <p className="feature__text">
              Our rental service offers houses and apartments for short or long
              term stays, in various locations. Our website makes it easy to
              find and book the perfect rental. Our team is always available to
              help.
            </p>
            <Link to="/" className="btn btn__full">
              Rent Now
            </Link>
          </div>
          <div className="feature__img__box">
            <div className="feature__img__box grid grid__2__cols">
              <div className="boxImg">
                <img className="feature__img" src={rent1} alt="" />
              </div>
              <div className="boxImg">
                <img className="feature__img" src={rent2} alt="" />
              </div>
              <div className="boxImg">
                <img className="feature__img" src={rent3} alt="" />
              </div>
              <div className="boxImg">
                <img className="feature__img" src={rent4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SectionFeature;
