// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

const Brandlogo = ({ logo, modifyClasses = "" }) => {
  return (
    <div className={`py-elementGapSm w-max mx-auto ${modifyClasses}`}>
      <Link className="block w-full h-full" to="/">
        <img className="block h-8" src={logo} alt="Brand Logo" />
      </Link>
    </div>
  );
};

Brandlogo.propTypes = {
  modifyClasses: PropTypes.string,
  logo: PropTypes.string.isRequired,
};

export default Brandlogo;
