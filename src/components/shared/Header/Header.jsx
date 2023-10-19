// react import
import PropTypes from "prop-types";

// shared components
import Brandlogo from "./../Brandlogo/Brandlogo";
import ThemeChangeBtn from "../ThemeChangeBtn/ThemeChangeBtn";
import LargeScreenNav from "../LargeScreenNav/LargeScreenNav";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";
import MobileNav from "../MobileNav/MobileNav";

// container components
import InnerContainer from "./../../container/InnerContainer/InnerContainer";
import OuterContainer from "./../../container/OuterContainer.jsx/OuterContainer";

// hook
import useMobileNavigation from "../../../hooks/useMobileNavigation";

// data
import brandLogoImageDark from "./../../../assets/logo/brandlogo-dark.webp";

// Extract the value of theme provider in header component so that we can conditionally pass our logo images in the brand logo component
const Header = ({ logo = "", navigationOptions = [] }) => {
  // extract mobile navigation functions and state
  const { mobileNavOpen, openNav, closeNav } = useMobileNavigation();

  return (
    <header>
      {/* conditionally pass the logo image variants */}
      <Brandlogo logo={logo} />

      <div className="bg-gradient-to-r from-primary to-primaryLight">
        <OuterContainer>
          <InnerContainer>
            <div className="block lg:grid lg:grid-cols-[1fr_2fr_1fr] items-center  py-elementGapSm">
              {/* extra empty div for layout purposes - equally divide 3 cols and position them nicely */}
              <div className="hidden lg:block">&nbsp;</div>

              {/* nav bar for large screens */}
              <div className="hidden lg:justify-self-center lg:block">
                <LargeScreenNav navigationOptions={navigationOptions} />
              </div>

              {/* theme change button and mobile nav toggle button */}
              <div className="flex justify-between items-center lg:justify-self-end">
                <ThemeChangeBtn />

                {/* mobile nav open btn and profile photo component */}
                <div className="flex items-center">
                  <MobileMenuBtn openNavFunction={openNav} />
                </div>
              </div>
            </div>
          </InnerContainer>

          {/* moble navigation menu - THE MENU WILL OPEN AND CLOSE according to the state extracted from the custom hook */}
          <MobileNav
            brandLogoImage={brandLogoImageDark}
            navigationOptions={navigationOptions}
            openState={mobileNavOpen}
            closeNavFunction={closeNav}
          />
        </OuterContainer>
      </div>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  navigationOptions: PropTypes.array.isRequired,
};

export default Header;
