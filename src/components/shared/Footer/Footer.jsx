// react import
import PropTypes from "prop-types";

// react router imports
import { Link } from "react-router-dom";

// shared component imports
import Brandlogo from "../Brandlogo/Brandlogo";
import InnerContainer from "../../container/InnerContainer/InnerContainer";

const year = new Date().getFullYear();

const Footer = ({
  logo = "",
  navigationOptions = [],
  socialMediaOptions = [],
}) => {
  return (
    <footer className="bg-primary py-14 mt-auto">
      <InnerContainer>
        <Brandlogo logo={logo} />

        {/* footer navigation */}
        <nav className="mb-12">
          <ul className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
            {navigationOptions.map((option) => {
              const { id, text, url } = option;
              return (
                <Link
                  className="leading-[normal] px-2 border-x-2 border-transparent hover:border-white text-white font-medium transition-all duration-200"
                  key={id}
                  to={url}
                >
                  {text}
                </Link>
              );
            })}
          </ul>
        </nav>

        {/* social media heading */}
        <h3 className="text-white text-center mb-6 font-bold text-2xl">
          Follow Us
        </h3>
        {/* social media logos */}
        <ul className="flex items-center justify-center gap-8 mb-8">
          {socialMediaOptions.map((option) => {
            const { id, image, url, title } = option;

            return (
              <a className="block w-[2rem] aspect-square" key={id} href={url}>
                <img
                  className="w-full h-full object-contain filter-white"
                  src={image}
                  alt={title}
                />
              </a>
            );
          })}
        </ul>

        <p className="text-white text-center">
          <small>&copy; {year} Brando, by Nashiuz Zaman</small>
        </p>
      </InnerContainer>
    </footer>
  );
};

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  navigationOptions: PropTypes.array.isRequired,
  socialMediaOptions: PropTypes.array.isRequired,
};

export default Footer;
