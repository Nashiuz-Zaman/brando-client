// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";

const LargeScreenNav = ({ navigationOptions }) => {
  return (
    <ul className="flex gap-6 ">
      {navigationOptions &&
        navigationOptions.map((option) => {
          return (
            <li key={option.id}>
              <NavLink
                className="leading-[normal] px-2 border-x-2 border-transparent hover:border-white text-white font-medium transition-all duration-200"
                to={option.url}
              >
                {option.text}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

LargeScreenNav.propTypes = {
  navigationOptions: PropTypes.array.isRequired,
};

export default LargeScreenNav;
