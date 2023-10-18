// react imports
import PropTypes from "prop-types";

const ClipDesign = ({ modifyClasses = "" }) => {
  return (
    <div
      className={`w-full h-full absolute top-0 left-0 z-10 bg-gradient-to-r from-primary to-primaryLight ${modifyClasses}`}
    >
      &nbsp;
    </div>
  );
};

ClipDesign.propTypes = {
  modifyClasses: PropTypes.string,
};

export default ClipDesign;
