import React from "react";
import About from "./About";

const Slider = (props) => {
  const slides = [
    {
      title: "Best Travel Service Ever",
      text: "On transportation, we are a main online travel organization in Burundi, we help you to get a taxi from wherever you are to wherever you want to go. With this service  you can call a taxi, you may also see the current position of the taxi and deal the price of  shifting with your driver. You can also work with us as a driver.",
    },
    {
      title: "Best Booking Service Ever",
      text: "On booking,",
    },
    {
      title: "papa",
      text: "With TBR Agency, you can do business with it by posting your houses for rent, posting your hotels for booking, and be a driver to transport people through TBR Agency. TBR Agency came as a solution to stranger from other whom are visiting burundi and citizen from burundi, TBR Agency, we started in 2023 and we are located in Burundi.  TBR Agency will help them to travel the country to different popular places, and spend their week-end in beautifull hotels. And came for those who need renting house, with this app you can also rent a house to spend your vacances. ",
    },
  ];

  return (
    <div>
      <div>
        <About slides={slides} />
      </div>
    </div>
  );
};
export default Slider;
