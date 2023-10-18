// react imports
import PropTypes from "prop-types";

const Description = ({ text, modifyClasses = "" }) => {
  return (
    <p
      className={`leading-[1.5] text-center text-textMediumLight ${modifyClasses}`}
    >
      {text}
    </p>
  );
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
  modifyClasses: PropTypes.string,
};

export default Description;
