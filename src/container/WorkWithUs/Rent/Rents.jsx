import React, { Fragment } from "react";
import { FaCamera, FaImage } from "react-icons/fa";
import "./Rents.css";

const Rents = () => {
  return (
    <Fragment>
      <div className="container-rent">
        <div className="container-box">
          <h2 className="heading__secondary">Post your house for rent</h2>

          <div className="form-rent">
            <div className="flex-input">
              <input
                type="text"
                className="input"
                placeholder="Owner's name..."
              />
              <input type="text" className="input" placeholder="email" />
            </div>

            <div className="flex-input">
              <input type="text" className="input" placeholder="Price" />
              <input type="text" className="input" placeholder="Phone number" />
            </div>

            <textarea
              type="text"
              className="input input-textarea"
              placeholder="Brief description..."
            />
            <input
              type="text"
              className="input"
              placeholder="House Location..."
            />
          </div>

          <div className="pick-pic">
            <label className="label">
              <input type="file" />
              <FaCamera className="iconF" />
            </label>
          </div>

          <div className="rent-now">
            <button className="rent-cta">Rent Now</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Rents;
