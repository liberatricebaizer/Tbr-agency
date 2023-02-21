import React, { Fragment } from "react";
import "./RentList.css";
import { FaFilter, FaSearch, FaStar } from "react-icons/fa";
import Rent1 from "../../../assets/rent1.jpg";
import Rent2 from "../../../assets/rent2.jpg";
import Rent3 from "../../../assets/rent3.jpg";
import Rent4 from "../../../assets/rent4.jpg";
import Rent5 from "../../../assets/rent1.jpg";
import Rent6 from "../../../assets/rent2.jpg";
import Rent7 from "../../../assets/rent3.jpg";
import Rent8 from "../../../assets/rent4.jpg";
import Footer from "../../footer/Footer";

const RentList = () => {
  return (
    <Fragment>
      <div className="booking">
        <div className="booking__search">
          <div className="booking__search--content">
            <input
              type="text"
              name="searchHotel"
              id="searchHotel"
              placeholder="search a house..."
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
                <img src={Rent1} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">Baizer's house</h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Rented by Baizer</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">300k BIF</div>
                  </div>
                </div>
                <div className="hotel-info__cta">Rent Now</div>
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={Rent2} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">Baizer's house</h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Rented by Baizer</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">300k BIF</div>
                  </div>
                </div>
                <div className="hotel-info__cta">Rent Now</div>
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={Rent3} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">Baizer's house</h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Rented by Baizer</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">300k BIF</div>
                  </div>
                </div>
                <div className="hotel-info__cta">Rent Now</div>
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={Rent4} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">Baizer's house</h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Rented by Baizer</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">300k BIF</div>
                  </div>
                </div>
                <div className="hotel-info__cta">Rent Now</div>
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={Rent5} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">Baizer's house</h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Rented by Baizer</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">300k BIF</div>
                  </div>
                </div>
                <div className="hotel-info__cta">Rent Now</div>
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={Rent6} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">Baizer's house</h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Rented by Baizer</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">300k BIF</div>
                  </div>
                </div>
                <div className="hotel-info__cta">Rent Now</div>
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={Rent7} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">Baizer's house</h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Rented by Baizer</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">300k BIF</div>
                  </div>
                </div>
                <div className="hotel-info__cta">Rent Now</div>
              </div>
            </div>

            <div className="hotel">
              <div className="hotel-img">
                <img src={Rent8} alt="Hotel 1" srcset="" />
              </div>
              <div className="hotel-info">
                <div className="hotel-info__heading">
                  <h3 className="heading__tertiary">Baizer's house</h3>
                  <span className="highlighted showNew">
                    New <FaStar />
                  </span>
                </div>
                <div className="hotel-info__content">
                  <div className="hotel-info__text">
                    <div className="hotel-info__user">
                      <span>Rented by Baizer</span>
                      <span>Sun, Feb 19th</span>
                    </div>
                    <div className="hotel-info__price">300k BIF</div>
                  </div>
                </div>
                <div className="hotel-info__cta">Rent Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default RentList;
