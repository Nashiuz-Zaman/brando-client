// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";

const LargeScreenNav = ({ navigationOptions }) => {
  return (
    <ul className="flex gap-6">
      {navigationOptions &&
        navigationOptions.map((option) => {
          return (
            <li key={option.id}>
              <NavLink
                className="leading-[normal] text-white font-medium hover:underline"
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
