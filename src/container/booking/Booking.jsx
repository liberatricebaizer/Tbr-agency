import { Fragment } from "react";
import "./Booking.css";
import { FaFilter, FaSearch, FaStar } from "react-icons/fa";
import hotel1 from "../../assets/img4.jpg";
import hotel2 from "../../assets/img3.jpg";
import hotel3 from "../../assets/img2.jpg";
import hotel4 from "../../assets/img1.jpg";
import hotel5 from "../../assets/rent1.jpg";
import hotel6 from "../../assets/rent2.jpg";
import hotel7 from "../../assets/rent3.jpg";
import hotel8 from "../../assets/rent4.jpg";
import Footer from "../footer/Footer";

const Booking = () => {
  return (
    <Fragment>
      <div className="booking">
        <div className="booking__search">
          <div className="booking__search--content">
            <input
              type="text"
              name="searchHotel"
              id="searchHotel"
              placeholder="search a place..."
            />
            <button>
              <FaSearch />
              {/* <span>Srch</span> */}
            </button>
          </div>

          <div className="filter">
            <button className="filter-btn">
              Filter <FaFilter />
            </button>
          </div>
        </div>
        <div className="booking__content">
          <div className="booking__hotels">
            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel1} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">
                    Lake Tanganyika Club Hotel
                  </h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Hosted by Toussaint</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">500k BIF</div>
                  </div>
                </div>
              </div>
              <div className="hotel-info__cta">
                <span></span>
                Book Now
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel2} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">
                    Lake Tanganyika Club Hotel
                  </h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Hosted by Toussaint</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">500k BIF</div>
                  </div>
                </div>
              </div>
              <div className="hotel-info__cta">
                <span></span>
                Book Now
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel3} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">
                    Lake Tanganyika Club Hotel
                  </h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Hosted by Toussaint</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">500k BIF</div>
                  </div>
                </div>
              </div>
              <div className="hotel-info__cta">
                <span></span>
                Book Now
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel4} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">
                    Lake Tanganyika Club Hotel
                  </h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Hosted by Toussaint</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">500k BIF</div>
                  </div>
                </div>
              </div>
              <div className="hotel-info__cta">
                <span></span>
                Book Now
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel5} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">
                    Lake Tanganyika Club Hotel
                  </h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Hosted by Toussaint</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">500k BIF</div>
                  </div>
                </div>
              </div>
              <div className="hotel-info__cta">
                <span></span>
                Book Now
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel6} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">
                    Lake Tanganyika Club Hotel
                  </h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Hosted by Toussaint</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">500k BIF</div>
                  </div>
                </div>
              </div>
              <div className="hotel-info__cta">
                <span></span>
                Book Now
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel7} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">
                    Lake Tanganyika Club Hotel
                  </h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Hosted by Toussaint</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">500k BIF</div>
                  </div>
                </div>
              </div>
              <div className="hotel-info__cta">
                <span></span>
                Book Now
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={hotel8} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">
                    Lake Tanganyika Club Hotel
                  </h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Hosted by Toussaint</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">500k BIF</div>
                  </div>
                </div>
              </div>
              <div className="hotel-info__cta">
                <span></span>
                Book Now
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};
export default Booking;
