import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { TfiLocationArrow } from "react-icons/tfi";
import { BsCalendar4 } from "react-icons/bs";
// import "mapbox-gl/dist/mapbox-gl.css";
// import mapboxGl from "mapbox-gl";
import "./Map.css";
// mapboxgl.accesToken = "jhahhajakallalajal";
const Map = () => {
  // useEffect(() => {
  //   const map = new mapboxgl.map({
  //     container: "map",
  //     style: "mapbox://styles/mapbox/streets-v11",
  //     center: [-99.29011, 3939172],
  //     zoom: 3,
  //   });
  // });
  return (
    <div className="map" id="map">
      <div className="addressToGo">
        <h2 className="heading__secondary">Where to go?</h2>
        <div className="location">
          <div className="here">
            <IoLocationOutline />
          </div>
          <input
            type="text"
            id="leavingLocation"
            name="Leaving Location"
            placeholder="Leaving from..."
            className="currLoc loc"
          />
        </div>

        <div className="location">
          <div className="here">
            <TfiLocationArrow />
          </div>
          <input
            type="text"
            id="destinationLocation"
            name="Destination Location"
            placeholder="Going to..."
            className="destLoc loc"
          />
        </div>

        <div className="times">
          <div className="time-go time">
            <div className="here">
              <BsCalendar4 />
            </div>
            <input
              type="text"
              id="departTime"
              name="Depart Time"
              placeholder="Depart"
              className="depart date"
            />
          </div>

          <div className="time-return time">
            <div className="here">
              <BsCalendar4 />
            </div>
            <input
              type="text"
              id="returnTime"
              name="Return Time"
              placeholder="Return"
              className="return date"
            />
          </div>
        </div>

        <div className="takeAction">
          <button className="take-action">Take a ride</button>
        </div>
      </div>
      <iframe
        // style={{ float: "right" }}
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=burundi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        className="mapping"
      />
    </div>
  );
};

export default Map;
