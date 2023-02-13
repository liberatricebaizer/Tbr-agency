import { Fragment } from "react";
import "./Booking.css";
import { FaSearch } from "react-icons/fa";

const Booking = () => {
  return (
    <Fragment>
      <div className="booking">
        <div className="booking__search">
          <div className="booking__search--content">
            <input type="text" name="searchHotel" id="searchHotel" />
            <button>
              <FaSearch />
              {/* <span>Srch</span> */}
            </button>
          </div>
        </div>
        <div className="booking__content">
          <div className="booking__hotel--current"></div>
          <div className="booking__hotels"></div>
        </div>
      </div>
    </Fragment>
  );
};
export default Booking;
