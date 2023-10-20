// react
import PropTypes from "prop-types";

// shared components
import BannerText from "./../BannerText/BannerText";
import Carousel from "./../Carousel/Carousel";

const Banner = ({ textObj = {}, carouselData = [], theme = "light" }) => {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-[2rem] items-center ${
        theme === "dark" ? "!text-white" : ""
      } `}
    >
      <div className="order-2 lg:order-1">
        <BannerText textObj={textObj} theme={theme} />
      </div>

      <div className="order-1 lg:order-2 shadow-xl">
        <Carousel images={carouselData} />
      </div>
    </div>
  );
};

Banner.propTypes = {
  textObj: PropTypes.object.isRequired,
  carouselData: PropTypes.array.isRequired,
  theme: PropTypes.string,
};

export default Banner;
