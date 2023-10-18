// react imports
import PropTypes from "prop-types";

// custom hook imports
import useCarousel from "./../../../hooks/useCarousel";

const Carousel = ({ images = [] }) => {
  const { leftSlide, curSlide, rightSlide } = useCarousel(images, 4000);

  return (
    <div className="w-full aspect-[16/16] 2xsm:aspect-[16/14] xsm:aspect-[16/10] md:aspect-[16/10] lg:aspect-[16/11] relative overflow-hidden z-10">
      {images.map((image) => {
        return (
          <div
            key={image.id}
            style={{ backgroundImage: `url(${image.imageSource})` }}
            className={`w-full h-full absolute top-0 left-0 bg-cover bg-no-repeat bg-center transition-all duration-1000 ${
              image.id === leftSlide
                ? "-translate-x-[100%] z-10"
                : image.id === curSlide
                ? "-translate-x-0 z-20"
                : image.id === rightSlide
                ? "translate-x-[100%] z-10"
                : "translate-x-[200%] -z-10"
            }`}
          ></div>
        );
      })}
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
