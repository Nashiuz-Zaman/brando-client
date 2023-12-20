// react import
import PropTypes from "prop-types";

// shared components
import Brandlogo from "./../Brandlogo/Brandlogo";
import ThemeChangeBtn from "../ThemeChangeBtn/ThemeChangeBtn";
import LargeScreenNav from "../LargeScreenNav/LargeScreenNav";
import MobileNav from "../MobileNav/MobileNav";
import UsernameWithImage from "../UsernameWithImage/UsernameWithImage";
import ButtonBtn from "../ButtonBtn/ButtonBtn";

// container components
import InnerContainer from "./../../container/InnerContainer/InnerContainer";

// hook
import useAuthContext from "../../../hooks/useAuthContext";

// data
import logoWhite from "./../../../assets/logo/logo-white.webp";

// Extract the value of theme provider in header component so that we can conditionally pass our logo images in the brand logo component
const Header = ({ logo = "", navigationOptions = [] }) => {
  // extract user information from AUTH context so that we can pass it to username component
  const { user, signOutUser } = useAuthContext();

  return (
    <header>
      {/* conditionally pass the logo image variants */}
      <InnerContainer>
        <Brandlogo
          logo={logo}
          modifyClasses="py-elementGapMd mr-auto"
          imageModifyClasses="h-[4rem]"
        />
      </InnerContainer>

      <div className="bg-blackLight">
        <InnerContainer>
          <div className="block lg:grid lg:grid-cols-2 items-center  py-elementGapSm">
            {/* extra empty div for layout purposes - equally divide 3 cols and position them nicely */}
            {/* <div className="hidden lg:block">&nbsp;</div> */}

            {/* large screen navbar */}
            <div className="hidden lg:block">
              <LargeScreenNav
                navigationOptions={navigationOptions}
                user={user}
              />
            </div>

            {/* theme change button and mobile nav toggle button */}
            <div className="flex gap-2 xl:gap-3 justify-between items-center lg:justify-self-end">
              <ThemeChangeBtn />

              {/* mobile nav open button and profile photo component */}
              {/* if the size */}
              <div className="flex items-center gap-2 xl:gap-4">
                {user !== null && (
                  <>
                    <UsernameWithImage user={user} />
                    <ButtonBtn
                      colorTheme="outlined"
                      text="Log Out"
                      onClickFunction={signOutUser}
                      modifyClasses="rounded-default !px-2 xl:!px-4 hidden lg:block"
                    />
                  </>
                )}

                {/* moble navigation menu open and close button are both inside*/}
                <MobileNav
                  brandLogoImage={logoWhite}
                  navigationOptions={navigationOptions}
                  user={user}
                  logOutFunction={signOutUser}
                />
              </div>
            </div>
          </div>
        </InnerContainer>
      </div>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  navigationOptions: PropTypes.array.isRequired,
};

export default Header;
