import PropTypes from "prop-types";

// shared components
import Carousel from "./../Carousel/Carousel";
import LinkBtn from "../LinkBtn/LinkBtn";

const BrandBanner = ({ brand = {}, modifyClasses = "", theme = "light" }) => {
  const { brandName, logo, brandAds } = brand;

  return (
    <div
      className={`grid grid-cols-1 bg-lightGray ${
        theme === "dark" ? "bg-lightGrayDarkTheme" : "bg-lightGray"
      } md:grid-cols-2 p-[1.5rem] lg:p-[5rem] gap-[2rem] items-center ${modifyClasses}`}
    >
      {/* brand related text */}
      <div className="order-2 md:order-1">
        {/* logo */}
        <div className="w-[10rem] h-[7rem] mb-3 mx-auto">
          <img
            className="w-full h-full object-contain"
            src={logo}
            alt="brand logo"
          />
        </div>
        {/* heading */}
        <h1 className="font-bold text-center text-2xl lg:text-4xl tracking-tight capitalize mb-6">
          Check out our latest collections from{" "}
          <span className="text-primary">{brandName}</span>
        </h1>

        {/* button */}
        <LinkBtn
          text="See Collection"
          modifyClasses="w-max mx-auto"
          hashed={true}
          theme={theme}
          url={`/brands/${brandName}/#explore`}
        />
      </div>

      {/* brand related ads */}
      <div className="order-1 md:order-2 shadow-xl">
        <Carousel images={brandAds} />
      </div>
    </div>
  );
};

BrandBanner.propTypes = {
  brand: PropTypes.object,
  modifyClasses: PropTypes.string,
  theme: PropTypes.string,
};

export default BrandBanner;
