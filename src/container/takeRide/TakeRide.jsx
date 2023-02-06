import "./TakeRide.css";
import Map from "./map/Map";
import userProfile from "../../assets/baizer.jpg";
const TakeRide = () => {
  return (
    <section className="section__ride">
      <Map />
      <div className="map__item">
        <header className="header">
          {/* <img src={} alt="TBR logo" /> */}
          <h2 className="header__logo">TBR Agance</h2>
          <div className="profile">
            <h1 className="name">Terry Tuyisenge</h1>
            <div className="userprofile">
              <img src={userProfile} alt="user profile" />
            </div>
          </div>
        </header>
        header actions button input
        <h2 className="heading__secondary">actions item</h2>
      </div>
    </section>
  );
};
export default TakeRide;
