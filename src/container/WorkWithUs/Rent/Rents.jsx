import React, { Fragment } from "react";
import { FaCamera, FaImage } from "react-icons/fa";
import "./Rents.css";

const Rents = () => {
  return (
    <Fragment>
      <div className="container-rent">
        <div className="container-box">
          <h2 className="heading__secondary">Post your house for rent</h2>

          <div className="pick-pic">
            <label className="label">
              <input type="file" />
              <FaCamera className="iconF" />
            </label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Rents;
