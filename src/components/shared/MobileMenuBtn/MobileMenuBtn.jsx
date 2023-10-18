// react
import PropTypes from "prop-types";

// icon
import { IoMenu } from "react-icons/io5";

const MobileMenuBtn = ({ openNavFunction }) => {
  return (
    <button className="lg:hidden" onClick={openNavFunction}>
      <IoMenu className="text-3xl text-white"></IoMenu>
    </button>
  );
};

MobileMenuBtn.propTypes = {
  openNavFunction: PropTypes.func.isRequired,
};
export default MobileMenuBtn;
