// react
import PropTypes from "prop-types";

// components
import { NavLink } from "react-router-dom";

const LargeScreenNav = ({ navigationOptions = [], user = null }) => {
  return (
    // these links are coming from the navigation options data file
    <nav>
      <ul className="flex gap-2">
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

        {/* if there is an user then don't show these 2 buttons, if there is NOT then show them */}
        {user === null && (
          <>
            {/* login and register btns */}
            {/* this part will always remain here for the sign in and sign out functionality */}
            <li>
              <NavLink
                className="leading-[normal] px-2 border-x-2 border-transparent hover:border-white text-white font-medium transition-all duration-200"
                to="/login"
              >
                Log In
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

LargeScreenNav.propTypes = {
  navigationOptions: PropTypes.array.isRequired,
  user: PropTypes.object,
};

export default LargeScreenNav;
