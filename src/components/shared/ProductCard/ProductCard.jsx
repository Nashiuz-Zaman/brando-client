// react
import PropTypes from "prop-types";

// shared components
import LinkBtn from "../LinkBtn/LinkBtn";
import RatingStars from "../RatingStars/RatingStars";

const ProductCard = ({ product }) => {
  const { _id, imageSource, name, brandName, type, price, rating } = product;
  const ratingGiven = Math.round(parseFloat(rating));
  return (
    <div className="bg-lightGray rounded-default p-6 shadow-lg">
      <div className="aspect-square mb-5">
        <img
          className="w-full h-full object-cover"
          src={imageSource}
          alt={name}
        />
      </div>

      <div className="space-y-1 mb-5">
        <h4 className="text-primary font-bold text-xl">{name}</h4>
        <p className="capitalize">
          Brand: {brandName === "hnm" ? "H&M" : brandName}
        </p>
        <p>Type: {type}</p>
        <p>Price: ${price}</p>
        <RatingStars ratingGiven={ratingGiven} />
      </div>

      <div className="space-y-4">
        <LinkBtn
          text="Details"
          modifyClasses="text-center"
          url={`/brands/${brandName}/products/details/${_id}`}
        />
        <LinkBtn
          text="Update"
          outlined={true}
          modifyClasses="text-center !border-primary !text-primary"
          url={`/brands/${brandName}/products/update/${_id}`}
        />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
