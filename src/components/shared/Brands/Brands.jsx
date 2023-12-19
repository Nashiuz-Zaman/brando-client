// react
import PropTypes from "prop-types";

// shared components
import Brand from "../Brand/Brand";

// loop through the brands array and output each brand here
const Brands = ({ brands = [], theme = "light" }) => {
  return (
    <div
      className={`relative z-10 ${
        theme === "dark" ? "bg-lightGrayDarkTheme" : "bg-lightGray"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 md:gap-y-elementGapMd py-elementGapMd">
        {/* single brand */}
        {brands.map((brand) => {
          return <Brand key={brand.id} brand={brand} />;
        })}
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.array.isRequired,
  theme: PropTypes.array,
};

export default Brands;
