// react imports
import PropTypes from "prop-types";

// react icon
import { FcGoogle } from "react-icons/fc";

const GoogleLoginBtn = ({ onClickFunction, modifyClasses = "" }) => {
  return (
    <button
      onClick={onClickFunction}
      className={`bg-transparent border border-textPrimary text-textPrimary hover:bg-[rgba(255,255,255,0.5)] block transition-all duration-300 rounded-default px-5 py-2 text-lg ${modifyClasses}`}
    >
      <span>Sign In With Google </span> <FcGoogle />
    </button>
  );
};

GoogleLoginBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func,
  outlined: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default GoogleLoginBtn;
