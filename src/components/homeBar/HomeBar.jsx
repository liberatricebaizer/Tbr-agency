import React, { Fragment } from "react";
import "./HomeBar.css";
import Footer from "../../container/footer/Footer";
import SectionHero from "./sectionHero/SectionHero";
import SectionWhy from "./sectionWhy/SectionWhy";
import SectionFeature from "./SectionFeature/SectionFeature";
import SectionCta from "./sectionCta/SectionCta";
const HomeBar = () => {
  return (
    <Fragment>
      <SectionHero />
      <SectionWhy />
      <SectionFeature />
      <SectionCta />
      <Footer />
    </Fragment>
  );
};
export default HomeBar;
