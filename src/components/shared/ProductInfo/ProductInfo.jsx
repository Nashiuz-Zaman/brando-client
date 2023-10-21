import PropTypes from "prop-types";

const ProductInfo = ({ productData = {}, modifyClasses = "" }) => {
  const { brandName, type, price, rating } = productData;

  return (
    <div className={`space-y-1 lg:text-lg ${modifyClasses}`}>
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
      <p>
        <span className="text-primary font-bold">Rating:</span> {rating} out of
        5
      </p>
    </div>
  );
};

ProductInfo.propTypes = {
  productData: PropTypes.object,
  modifyClasses: PropTypes.string,
};

export default ProductInfo;
