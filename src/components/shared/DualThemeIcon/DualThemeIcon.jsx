import PropTypes from "prop-types";

const DualThemeIcon = ({ imageSource, theme, modifyClasses = "" }) => {
  return (
    <div
      style={{
        filter:
          theme === "darl"
            ? "invert(100%) sepia(1%) saturate(7497%) hue-rotate(259deg) brightness(100%) contrast(103%)"
            : "none",
      }}
      className={`w-[10rem] h-[6rem] ${modifyClasses}`}
    >
      <img
        className="block w-full h-full object-contain"
        src={imageSource}
        alt="dual theme image"
      />
    </div>
  );
};

DualThemeIcon.propTypes = {
  imageSource: PropTypes.string,
  theme: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default DualThemeIcon;
