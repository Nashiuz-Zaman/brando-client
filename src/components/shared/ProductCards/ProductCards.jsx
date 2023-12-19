import PropTypes from "prop-types";

// shared component
import ProductCard from "../ProductCard/ProductCard";

const ProductCards = ({ products = [], theme = "light" }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {products.map((product) => {
        return (
          <ProductCard theme={theme} key={product._id} product={product} />
        );
      })}
    </div>
  );
};

ProductCards.propTypes = {
  products: PropTypes.array,
  theme: PropTypes.string,
};

export default ProductCards;
