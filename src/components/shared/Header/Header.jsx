// react import
import PropTypes from "prop-types";

// shared components
import Brandlogo from "./../Brandlogo/Brandlogo";
import ThemeChangeBtn from "../ThemeChangeBtn/ThemeChangeBtn";
import LargeScreenNav from "../LargeScreenNav/LargeScreenNav";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import MobileNav from "../MobileNav/MobileNav";
import UsernameWithImage from "../UsernameWithImage/UsernameWithImage";
import ButtonBtn from "../ButtonBtn/ButtonBtn";

// container components
import InnerContainer from "./../../container/InnerContainer/InnerContainer";

// hook
import useMobileNavigation from "../../../hooks/useMobileNavigation";
import useAuthContext from "../../../hooks/useAuthContext";

// data
import logoWhite from "./../../../assets/logo/logo-white.webp";

// Extract the value of theme provider in header component so that we can conditionally pass our logo images in the brand logo component
const Header = ({ logo = "", navigationOptions = [] }) => {
  // extract mobile navigation functions and state
  const { mobileNavOpen, openNav, closeNav } = useMobileNavigation();

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
                      outlined={true}
                      text="Log Out"
                      onClickFunction={signOutUser}
                      modifyClasses="rounded-default !px-2 xl:!px-4 hidden lg:block hover:bg-white hover:text-primary"
                    />
                  </>
                )}

                <MobileMenuBtn openNavFunction={openNav} />
              </div>
            </div>
          </div>
        </InnerContainer>

        {/* moble navigation menu - THE MENU WILL OPEN AND CLOSE according to the state extracted from the custom hook */}
        <MobileNav
          brandLogoImage={logoWhite}
          navigationOptions={navigationOptions}
          openState={mobileNavOpen}
          closeNavFunction={closeNav}
          user={user}
          logOutFunction={signOutUser}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  navigationOptions: PropTypes.array.isRequired,
};

export default Header;
