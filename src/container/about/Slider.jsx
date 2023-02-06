import React from "react";
import About from "./About";

const Slider = (props) => {
  const slides = [
    {
      title: "hello travel",
      text: "TBR Agency, we started in 2023 and we are located in Burundi. TBR Agency came as a solution to stranger from other whom are visiting burundi and citizen from burundi, TBR Agency will help them to travel the country to different popular places, and spend their week-end in beautifull hotels. And came for those who need renting house, with this app you can also rent a house to spend your vacances. With TBR Agency, you can do business with it by posting your houses for rent, posting your hotels for booking, and be a driver to transport people through TBR Agency.",
    },
    {
      title: "mamam",
      text: "posting your houses for rent, posting your hotels for booking, and be a driver to transport people With TBR Agency, you can do business with it by through TBR Agency. TBR Agency, we started in 2023 and we are located in Burundi. TBR Agency came as a solution to stranger from other whom are visiting burundi and citizen from burundi, TBR Agency will help them to travel the country to different popular places, and spend their week-end in beautifull hotels. And came for those who need renting house, with this app you can also rent a house to spend your vacances. ",
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
