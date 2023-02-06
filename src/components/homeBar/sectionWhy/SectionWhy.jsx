import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaHotel, FaHouseUser } from "react-icons/fa";
import "./SectionWhy.css";

const SectionWhy = () => {
  return (
    <section className="section__why">
      <div className="container">
        <div className="container__intro">
          <div className="why-description">
            <h2 className="heading__secondary">Why TBR Agency?</h2>
            <p className="text">
              TBR Agency comes as a solution to provide people with greater
              access to transportation, booking hotel and renting house wherever
              you want without moving.
            </p>
          </div>
          <div className="our_services grid grid__3__cols mobile">
            <div className="our_services_content">
              <FaCar className="icon_descr" />
              <p className="text service_descr">
                For traveling, We are the people you can rely on when you need
                to move with confidence, whether you are going places for
                yourself, for your business, as a traveller.
              </p>

              <Link to="/" className="btn btn__full btn_text">
                More Info
              </Link>
            </div>
            <div className="our_services_content">
              <FaHotel className="icon_descr" />
              <p className="text service_descr">
                Book your next hotel stay with ease on TBR Agency App. Choose
                from a variety of hotels in top destinations in Burundi. Compare
                prices and amenities before reserving your room. Enjoy
                discounted rates and great deals.
              </p>
              <Link to="/" className="btn btn__full btn_text">
                More Info
              </Link>
            </div>
            <div className="our_services_content">
              <FaHouseUser className="icon_descr" />
              <p className="text service_descr">
                Need a place to stay on your next trip? Look no further! Our
                rental properties offer a comfortable and convenient home away
                from home. Browse our selection and book your stay today.
              </p>
              <Link to="/" className="btn btn__full btn_text">
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionWhy;
