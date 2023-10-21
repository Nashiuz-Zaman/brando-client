// react
import PropTypes from "prop-types";

// shared components
import RatingStars from "../RatingStars/RatingStars";

const ProductInfo = ({ productData = {}, modifyClasses = "" }) => {
  const { brandName, type, price, rating } = productData;

  const ratingGiven = Math.round(parseFloat(rating));

  return (
    <div className={`space-y-1 lg:text-base ${modifyClasses}`}>
      <p className="capitalize">
        <span className="text-primary font-bold">Brand:</span>{" "}
        {brandName === "hnm" ? (
          "H&M"
        ) : (
          <span className="capitalize">{brandName}</span>
        )}
      </p>
      <p>
        <span className="text-primary font-bold">Type:</span> {type}
      </p>
      <p>
        <span className="text-primary font-bold">Price:</span> ${price}
      </p>

      <RatingStars ratingGiven={ratingGiven} />
    </div>
  );
};

ProductInfo.propTypes = {
  productData: PropTypes.object,
  modifyClasses: PropTypes.string,
};

export default ProductInfo;
