// react-router imports
import { Outlet } from "react-router-dom";

// shared component
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

// hooks
import useThemeProvider from "./../../../hooks/useThemeProvider";

// data
import { navigationOptions } from "../../../data/navigationOptions";
import { socialmediaOptions } from "../../../data/socialMediaData";
import brandlogo from "./../../../assets/logo/brandlogo.webp";
import brandlogoDark from "./../../../assets/logo/brandlogo-dark.webp";
import { addressData } from "../../../data/addressData";

//hook

import useScrollToTop from "./../../../hooks/useScrollToTop";

function RootLayout() {
  const { theme } = useThemeProvider();
  useScrollToTop();
  return (
    <div
      className={`flex flex-col min-h-screen font-raleway text-textPrimary font-medium transitioan-all duration-300 ${
        theme === "light" ? "bg-white" : "bg-textPrimary"
      }`}
    >
      <Header
        logo={theme === "light" ? brandlogo : brandlogoDark}
        navigationOptions={navigationOptions}
      />
      <Outlet />
      <Footer
        logo={brandlogoDark}
        addressData={addressData}
        navigationOptions={navigationOptions}
        socialMediaOptions={socialmediaOptions}
      />
    </div>
  );
}

export default RootLayout;
