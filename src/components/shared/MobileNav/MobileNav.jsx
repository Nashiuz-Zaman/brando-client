// react
import PropTypes from "prop-types";

// shared components
import { NavLink } from "react-router-dom";
import MobileMenuCloseBtn from "../MobileMenuCloseBtn/MobileMenuCloseBtn";
import LinkBtn from "../LinkBtn/LinkBtn";
import Brandlogo from "../Brandlogo/Brandlogo";

// custom hooks import
import ButtonBtn from "../ButtonBtn/ButtonBtn";

const MobileNav = ({
  brandLogoImage,
  navigationOptions = [],
  closeNavFunction = null,
  openState = false,
  user = null,
  logOutFunction = null,
}) => {
  return (
    <div
      className={`block lg:hidden h-screen fixed top-0 right-0 w-full -translate-x-full transition-all duration-300 z-60 ${
        openState ? "!translate-x-0" : ""
      } text-center p-8 bg-gradient-to-br from-primary to-primaryLight`}
    >
      <MobileMenuCloseBtn clickHandler={closeNavFunction}></MobileMenuCloseBtn>

      <Brandlogo
        logo={brandLogoImage}
        modifyClasses="block w-max mx-auto mb-8"
      />

      {/* regular part */}
      <ul className="flex flex-col gap-6 mb-14">
        {navigationOptions &&
          navigationOptions.map((option) => {
            return (
              <li key={option.id} onClick={closeNavFunction}>
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
            onClick={closeNavFunction}
            to="/login"
          >
            Login
          </NavLink>

          <div onClick={closeNavFunction}>
            <LinkBtn
              outlined={true}
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

          <ButtonBtn
            outlined={true}
            onClickFunction={logOutFunction}
            text="Log Out"
            modifyClasses="mx-auto"
          />
        </div>
      )}
    </div>
  );
};

MobileNav.propTypes = {
  brandLogoImage: PropTypes.string.isRequired,
  user: PropTypes.object,
  logOutFunction: PropTypes.func,
  navigationOptions: PropTypes.array.isRequired,
  closeNavFunction: PropTypes.func.isRequired,
  openState: PropTypes.bool.isRequired,
};

export default MobileNav;
