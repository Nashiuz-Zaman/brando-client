// react imports
import PropTypes from "prop-types";

const CenterContainer = ({ children }) => {
  return (
    <div className="max-w-[75rem] px-4 md:px-8 lg:px-12 2xl:px-0 mx-auto">
      {children}
    </div>
  );
};

CenterContainer.propTypes = {
  children: PropTypes.node,
};

export default CenterContainer;
