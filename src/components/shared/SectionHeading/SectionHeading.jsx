// react imports
import PropTypes from "prop-types";

// theme
import useThemeProvider from "../../../hooks/useThemeProvider";

const SectionHeading = ({ text, modifyClasses = "" }) => {
  const { theme } = useThemeProvider();

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
