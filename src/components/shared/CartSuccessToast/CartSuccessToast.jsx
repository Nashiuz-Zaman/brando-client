// react
import PropTypes from "prop-types";

// react icons
import { IoCheckmarkCircle } from "react-icons/io5";

const CartSuccessToast = ({ show = false }) => {
  return (
    <div
      className={`fixed opacity-0 -top-full left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 transition-all duration-150 z-50 rounded-default w-max px-8 py-4 shadow-[0_0_30px_rgba(0,0,0,0.2)] bg-white ${
        show ? "top-10 opacity-100" : ""
      }`}
    >
      <IoCheckmarkCircle className="text-green-600 text-5xl" />

      <p className="text-green-600 font-semibold text">Added Successfully</p>
    </div>
  );
};

CartSuccessToast.propTypes = {
  show: PropTypes.bool,
};

export default CartSuccessToast;
