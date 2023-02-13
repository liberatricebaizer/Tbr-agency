import { Fragment } from "react";
import "./Booking.css";

const Booking = () => {
  return (
    <Fragment>
      <div className="booking">
        <div className="booking__content">
          <div className="booking__hotel--current"></div>
          <div className="booking__hotels"></div>
        </div>
      </div>
    </Fragment>
  );
};
export default Booking;
