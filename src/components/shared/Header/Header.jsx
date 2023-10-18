// shared components
import Brandlogo from "./../Brandlogo/Brandlogo";

// container components
import InnerContainer from "./../../container/InnerContainer/InnerContainer";

// hook
import useThemeProvider from "../../../hooks/useThemeProvider";

// data
import brandLogoImage from "./../../../assets/logo/brandlogo.webp";
import brandLogoImageDark from "./../../../assets/logo/brandlogo-dark.webp";
import { navigationOptions } from "../../../data/navigationOptions";
import LargeScreenNav from "../LargeScreenNav/LargeScreenNav";

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
          <div className="grid grid-cols-3 py-elementGapSm">
            {/* extra empty div for layout purposes - equally divide 3 cols and position them nicely */}
            <div>&nbsp;</div>
            <div className="justify-self-center">
              <LargeScreenNav navigationOptions={navigationOptions} />
            </div>
            <div></div>
          </div>
        </InnerContainer>
      </div>
    </header>
  );
};

export default Header;
