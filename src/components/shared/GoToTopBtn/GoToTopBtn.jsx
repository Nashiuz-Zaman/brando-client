// react
import PropTypes from "prop-types";

// react icon
import { IoChevronUp } from "react-icons/io5";

export default function GoToTopBtn({ modifyClasses = "" }) {
  // jsx template
  return (
    <div
      className={`w-max rounded-full border-4 border-white p-3 aspect-square bg-black overflow-hidden ${modifyClasses}`}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}
      >
        <IoChevronUp className="text-white text-2xl" />
      </button>
    </div>
  );
}

GoToTopBtn.propTypes = {
  modifyClasses: PropTypes.string,
};
