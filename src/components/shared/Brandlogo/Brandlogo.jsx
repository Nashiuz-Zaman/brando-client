// react imports
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

const Brandlogo = ({ logo }) => {
  return (
    <div className="py-elementGapSm">
      <Link className="block w-max mx-auto" to="/">
        <img className="block h-8" src={logo} alt="Brand Logo" />
      </Link>
    </div>
  );
};

Brandlogo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Brandlogo;
