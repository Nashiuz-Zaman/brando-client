// shared components
import Brandlogo from "./../Brandlogo/Brandlogo";

// hook
import useThemeProvider from "../../../hooks/useThemeProvider";

// data
import brandLogoImage from "./../../../assets/logo/brandlogo.webp";
import brandLogoImageDark from "./../../../assets/logo/brandlogo-dark.webp";

const Header = () => {
  const { theme } = useThemeProvider();

  return (
    <header>
      <Brandlogo
        logo={theme === "light" ? brandLogoImage : brandLogoImageDark}
      />
    </header>
  );
};

export default Header;
