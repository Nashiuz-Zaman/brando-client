// react
import PropTypes from "prop-types";

const ColorSwatches = ({ modifyClasses = "" }) => {
  return (
    <div className={`${modifyClasses}`}>
      <p className="text-primary font-bold mb-2">Colors Available:</p>
      <div className={"flex items-center gap-2 mb-5"}>
        <div className="w-[2rem] aspect-square rounded-full bg-textPrimary"></div>
        <div className="w-[2rem] aspect-square rounded-full border border-[#bbb] bg-white"></div>
        <div className="w-[2rem] aspect-square rounded-full bg-red-700"></div>
        <div className="w-[2rem] aspect-square rounded-full bg-yellow-400"></div>
        <div className="w-[2rem] aspect-square rounded-full bg-green-700"></div>
      </div>
      <p>
        Note: Please note that actual product may vary slightly from the
        depiction in the photo
      </p>
    </div>
  );
};

ColorSwatches.propTypes = {
  modifyClasses: PropTypes.string,
};

export default ColorSwatches;
