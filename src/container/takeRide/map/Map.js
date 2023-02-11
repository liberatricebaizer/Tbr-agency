import React, { useEffect } from "react";
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
      <iframe
        style={{ float: "right" }}
        width="921"
        height="360"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=burundi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
      <div className="addressToGo">
        <h2 className="heading__secondary">Where to go?</h2>
        <div className="location">
          <input
            type="text"
            id="currentLocation"
            name="Current Location"
            placeholder="current location"
            className="currLoc"
          />
        </div>

        <div className="location">
          <input
            type="text"
            id="destinationLocation"
            name="Destination Location"
            placeholder="destination location"
            className="currLoc"
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
