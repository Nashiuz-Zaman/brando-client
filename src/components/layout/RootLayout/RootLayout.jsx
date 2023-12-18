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
import logoPrimary from "./../../../assets/logo/logo-primary.webp";
import logoWhite from "./../../../assets/logo/logo-white.webp";
import { addressData } from "../../../data/addressData";

//hook

import useScrollToTop from "./../../../hooks/useScrollToTop";

function RootLayout() {
  const { theme } = useThemeProvider();
  useScrollToTop();
  return (
    <div
      className={`flex flex-col min-h-screen max-w-[120rem] mx-auto overflow-x-hidden font-default text-textPrimary font-medium transition-all duration-300 ${
        theme === "light" ? "bg-white" : "bg-textPrimary"
      }`}
    >
      <Header
        logo={theme === "light" ? logoPrimary : logoWhite}
        navigationOptions={navigationOptions}
      />
      <Outlet />
      <Footer
        logo={logoWhite}
        addressData={addressData}
        navigationOptions={navigationOptions}
        socialMediaOptions={socialmediaOptions}
      />
    </div>
  );
}

export default RootLayout;
