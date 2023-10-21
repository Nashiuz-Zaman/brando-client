// react imports
import PropTypes from "prop-types";

// shared components
import LinkBtn from "../LinkBtn/LinkBtn";

//  a text object containing the heading and description as properties will populate the h1 and p tags in this component
const BannerText = ({ textObj = {}, theme = "light" }) => {
  // extract the heading and description from text object
  const { heading, description, btnText } = textObj;

  return (
    <div className="text-center lg:text-left">
      {/* heading */}
      <h1 className="font-bold text-3xl md:text-5xl mb-5 tracking-tight">
        {heading}
      </h1>

      {/* description */}
      <p className="leading-[1.5] text-sm xl:text-base mb-6">{description}</p>

      {/* buttons in the banner text */}
      <div className="flex flex-col xsm:flex-row items-center justify-center lg:justify-start gap-4">
        {/* first button */}
        <LinkBtn text={btnText} hashed={true} url="#explore" />

        {/* register button */}
        <LinkBtn
          outlined={true}
          text="Sign up - It's free!"
          url="/register"
          modifyClasses={`font-medium ${
            theme === "dark"
              ? "!text-white !border-white"
              : "!border-primary !text-primary"
          }`}
        />
      </div>
    </div>
  );
};

BannerText.propTypes = {
  textObj: PropTypes.object.isRequired,
  theme: PropTypes.string,
};

export default BannerText;
