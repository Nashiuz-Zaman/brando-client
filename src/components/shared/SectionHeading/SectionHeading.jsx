// react imports
import PropTypes from "prop-types";

// theme
import useTheme from "../../../hooks/useTheme";

const SectionHeading = ({ text, modifyClasses = "" }) => {
  const { theme } = useTheme();

  return (
    <h2
      className={`text-3xl text-center font-bold ${
        theme === "dark" ? "text-white" : "text-textPrimary"
      } ${modifyClasses}`}
    >
      {text}
    </h2>
  );
};

SectionHeading.propTypes = {
  text: PropTypes.any.isRequired,
  modifyClasses: PropTypes.string,
};

export default SectionHeading;
