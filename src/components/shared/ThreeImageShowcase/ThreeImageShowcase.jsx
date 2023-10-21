import PropTypes from "prop-types";

const ThreeImageShowcase = ({ images = {} }) => {
  const { image1, image2, image3 } = images;

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] md:gap-3 lg:gap-5">
      {/* image 1 */}
      <div className="shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={image1}
          alt="sale offer image"
        />
      </div>

      {/* image 2*/}
      <div className="md:col-span-2 shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={image2}
          alt="sale offer image"
        />
      </div>

      {/* image 3 */}
      <div className="md:col-span-3 shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={image3}
          alt="sale offer image"
        />
      </div>
    </div>
  );
};

ThreeImageShowcase.propTypes = {
  images: PropTypes.object.isRequired,
};

export default ThreeImageShowcase;
