// react imports
import PropTypes from "prop-types";

// react router import
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { name, image, url } = brand;

  return (
    <div>
      <Link
        className="flex flex-col items-center hover:scale-[1.1] transition-all duration-300"
        to={url}
      >
        {/* logo */}
        <div className="w-[15rem] h-[10rem] mb-[1.5rem] md:mb-elementGapSm">
          <img
            className="block w-full h-full object-contain"
            src={image}
            alt={name}
          />
        </div>
        <h4 className="text-center font-bold text-xl">{name}</h4>
      </Link>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default Brand;
