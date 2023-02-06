import React, { Fragment, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./About.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import video from "../../assets/img3.jpg";
import profile1 from "../../assets/baizer.jpg";
import Footer from "../footer/Footer";
const About = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Fragment>
      <div className="about">
        <div className="about__header">
          {/* <img src={video} alt="about us background" /> */}
          <h1 className="heading__primary about__header--text">
            We are here to make your business move
          </h1>
          <a href="#" className="about__header--btn">
            Learn more
          </a>
        </div>
        <div className="about__agency">
          <div className="about__content">
            <h2 className="heading__secondary">About Us</h2>
            <p className="about__text">
              TBR Agency, we started in 2023 and we are located in Burundi. TBR
              Agency came as a solution to stranger from other whom are visiting
              burundi and citizen from burundi, TBR Agency will help them to
              travel the country to different popular places, and spend their
              week-end in beautifull hotels. And came for those who need renting
              house, with this app you can also rent a house to spend your
              vacances. With TBR Agency, you can do business with it by posting
              your houses for rent, posting your hotels for booking, and be a
              driver to transport people through TBR Agency.
            </p>
          </div>
        </div>

        <div className="about__services fixed-height">
          <div className="about__services--content">
            <div>
              <h2
                style={{ fontSize: "3rem", marginBottom: "2rem" }}
                className="heading-text"
              >
                {slides[currentIndex].title}
              </h2>
            </div>
            <div className="description">
              <p className="services--text">{slides[currentIndex].text}</p>
            </div>

            <div className="btn-slider leftArrowStyles" onClick={goToPrevious}>
              <AiOutlineArrowLeft />
            </div>

            <div className="btn-slider rightArrowStyles" onClick={goToNext}>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>

        <div className="co-founders ">
          <h2
            className="heading__secondary"
            style={{ textAlign: "center", marginBottom: "5rem" }}
          >
            TBR Co-Founders
          </h2>
          <div className="flex-user">
            <div className="user">
              <div className="userbg"></div>
              <div className="user__content">
                <div className="user__profile">
                  <div className="user__img">
                    <img src={profile1} alt="Baizer Profile" />
                  </div>
                  <p className="user__name">Liberatrice Bayizere</p>
                  <div className="user__tag">
                    <span className="user__skills">Frontend Developer</span>
                  </div>
                </div>
                <div className="user__details">
                  <p className="user__description">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem cumque voluptatibus voluptates magnam nemo
                    autem nostrum reiciendis est, quasi, repudiandae corrupti
                    temporibus. Perferendis soluta minus officia explicabo
                    distinctio et deleniti!"
                  </p>
                  <div className="user__contact">
                    <Link className="social__contact--link">
                      <FaGithub className="social__contact--icon facebook" />
                    </Link>
                    <Link className="social__contact--link">
                      <FaTwitter className="social__contact--icon twitter" />
                    </Link>
                    <Link className="social__contact--link">
                      <FaLinkedin className="social__contact--icon linkedin" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="user">
              <div className="userbg"></div>
              <div className="user__content">
                <div className="user__profile">
                  <div className="user__img">
                    <img src={profile1} alt="Baizer Profile" />
                  </div>
                  <p className="user__name">Liberatrice Bayizere</p>
                  <div className="user__tag">
                    <span className="user__skills">Frontend Developer</span>
                  </div>
                </div>
                <div className="user__details">
                  <p className="user__description">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem cumque voluptatibus voluptates magnam nemo
                    autem nostrum reiciendis est, quasi, repudiandae corrupti
                    temporibus. Perferendis soluta minus officia explicabo
                    distinctio et deleniti!"
                  </p>
                  <div className="user__contact">
                    <Link className="social__contact--link">
                      <FaGithub className="social__contact--icon facebook" />
                    </Link>
                    <Link className="social__contact--link">
                      <FaTwitter className="social__contact--icon twitter" />
                    </Link>
                    <Link className="social__contact--link">
                      <FaLinkedin className="social__contact--icon linkedin" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="user">
              <div className="userbg"></div>
              <div className="user__content">
                <div className="user__profile">
                  <div className="user__img">
                    <img src={profile1} alt="Baizer Profile" />
                  </div>
                  <p className="user__name">Liberatrice Bayizere</p>
                  <div className="user__tag">
                    <span className="user__skills">Frontend Developer</span>
                  </div>
                </div>
                <div className="user__details">
                  <p className="user__description">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem cumque voluptatibus voluptates magnam nemo
                    autem nostrum reiciendis est, quasi, repudiandae corrupti
                    temporibus. Perferendis soluta minus officia explicabo
                    distinctio et deleniti!"
                  </p>
                  <div className="user__contact">
                    <Link className="social__contact--link">
                      <FaGithub className="social__contact--icon facebook" />
                    </Link>
                    <Link className="social__contact--link">
                      <FaTwitter className="social__contact--icon twitter" />
                    </Link>
                    <Link className="social__contact--link">
                      <FaLinkedin className="social__contact--icon linkedin" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default About;
