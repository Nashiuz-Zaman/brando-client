// shared components
import Brandlogo from "./../Brandlogo/Brandlogo";
import ThemeChangeBtn from "../ThemeChangeBtn/ThemeChangeBtn";
import LargeScreenNav from "../LargeScreenNav/LargeScreenNav";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn";

// container components
import InnerContainer from "./../../container/InnerContainer/InnerContainer";

// hook
import useThemeProvider from "../../../hooks/useThemeProvider";

// data
import brandLogoImage from "./../../../assets/logo/brandlogo.webp";
import brandLogoImageDark from "./../../../assets/logo/brandlogo-dark.webp";
import { navigationOptions } from "../../../data/navigationOptions";

// Extract the value of theme provider in header component so that we can conditionally pass our logo images in the brand logo component

const Header = () => {
  // extract theme value from the custom hook
  const { theme } = useThemeProvider();

  return (
    <header>
      {/* conditionally pass the logo image variants */}
      <Brandlogo
        logo={theme === "light" ? brandLogoImage : brandLogoImageDark}
      />

      <div className="bg-gradient-to-r from-primary to-primaryLight">
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

              <div>
                <MobileMenuBtn />
              </div>
            </div>
          </div>
        </InnerContainer>
      </div>
    </header>
  );
};

export default Header;
