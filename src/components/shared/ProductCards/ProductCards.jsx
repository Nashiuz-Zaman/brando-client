import PropTypes from "prop-types";

// shared component
import ProductCard from "../ProductCard/ProductCard";

const ProductCards = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
};

ProductCards.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductCards;
