// react
import PropTypes from "prop-types";

// shared components
import BannerText from "./../BannerText/BannerText";
import Carousel1 from "./../Carousel1/Carousel1";

// data
import { bannerTextObj, carouselImages } from "../../../data/homepageData";

const Banner = ({ theme = "light" }) => {
  return (
    <div
      className={`grid lg:grid-cols-2 2xl:grid-cols-[1fr_1.25fr] gap-5 2xl:gap-10  items-center ${
        theme === "dark" ? "!text-white" : ""
      } `}
    >
      <div className="order-2 lg:order-1">
        <BannerText textObj={bannerTextObj} theme={theme} />
      </div>

      <div className="order-1 lg:order-2">
        <Carousel1 imagesData={carouselImages} background={false} />
      </div>
    </div>
  );
};

Banner.propTypes = {
  theme: PropTypes.string,
};

export default Banner;
