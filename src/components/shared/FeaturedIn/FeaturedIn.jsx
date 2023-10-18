// react import
import PropTypes from "prop-types";

const FeaturedIn = ({ logos }) => {
  return (
    <div className="flex items-center justify-center gap-10 flex-wrap">
      {logos.map((logo) => {
        const { id, name, image } = logo;

        return (
          <div className="w-[5rem] lg:w-[6.5rem] aspect-square" key={id}>
            <img
              className="w-full h-full object-contain"
              src={image}
              alt={name}
            />
          </div>
        );
      })}
    </div>
  );
};

FeaturedIn.propTypes = {
  logos: PropTypes.array.isRequired,
};

export default FeaturedIn;
