// react
import PropTypes from "prop-types";

// shared components
import { NavLink } from "react-router-dom";
import MobileMenuCloseBtn from "../MobileMenuCloseBtn/MobileMenuCloseBtn";
import LinkBtn from "../LinkBtn/LinkBtn";
import Brandlogo from "../Brandlogo/Brandlogo";

// component
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";

// custom hooks import
import ButtonBtn from "../ButtonBtn/ButtonBtn";
import useMobileNavigation from "../../../hooks/useMobileNavigation";

const MobileNav = ({
  brandLogoImage,
  navigationOptions = [],
  user = null,
  logOutFunction = null,
}) => {
  const { open, openMobileNav, closeMobileNav } = useMobileNavigation();
  return (
    <div className="flex h-full items-center">
      <MobileMenuBtn openNavFunction={openMobileNav} />
      <nav
        className={`block lg:hidden h-screen fixed top-0 right-0 w-full -translate-x-full transition-all duration-300 z-20 ${
          open ? "!translate-x-0" : ""
        } text-center p-8 bg-gradient-to-br from-primary to-primaryLight`}
      >
        <MobileMenuCloseBtn clickHandler={closeMobileNav}></MobileMenuCloseBtn>

        <Brandlogo
          logo={brandLogoImage}
          modifyClasses="block w-max mx-auto mb-8"
        />

        {/* regular part */}
        <ul className="flex flex-col gap-6 mb-14">
          {navigationOptions &&
            navigationOptions.map((option) => {
              return (
                <li key={option.id} onClick={closeMobileNav}>
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

        {/* conditonal rendering part */}
        {!user && (
          <div className="flex flex-col space-y-6 items-center">
            <NavLink
              className="leading-[normal] px-2 border-x-2 border-transparent hover:border-white text-white font-medium transition-all duration-200"
              onClick={closeMobileNav}
              to="/login"
            >
              Login
            </NavLink>

            <div onClick={closeMobileNav}>
              <LinkBtn
                colorTheme="outlined"
                url="/register"
                text="Register Account"
                modifyClasses="md:w-max md:mx-auto"
              />
            </div>
          </div>
        )}

        {user && (
          <div className="space-y-6 text-white">
            <h4 className="text-inherit">Logged In as:</h4>
            <p className="text-xl text-inherit font-semibold">
              {user.displayName || "Unknown User"}
            </p>

            <div onClick={closeMobileNav}>
              <ButtonBtn
                colorTheme="outlined"
                onClickFunction={logOutFunction}
                text="Log Out"
                modifyClasses="mx-auto"
              />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

MobileNav.propTypes = {
  brandLogoImage: PropTypes.string,
  user: PropTypes.object,
  logOutFunction: PropTypes.func,
  navigationOptions: PropTypes.array,
};

export default MobileNav;
