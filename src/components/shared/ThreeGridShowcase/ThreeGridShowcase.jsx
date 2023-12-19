// react
import PropTypes from "prop-types";

// shared Components
import LinkBtn from "../LinkBtn/LinkBtn";
import DualThemeIcon from "../DualThemeIcon/DualThemeIcon";

// theme
import useThemeProvider from "../../../hooks/useThemeProvider";

const ThreeGridShowcase = ({ images }) => {
  const { theme } = useThemeProvider();

  return (
    <div className="grid md:grid-cols-3 gap-10 md:gap-5">
      {images.map((image) => {
        return (
          <div className="group" key={image.id}>
            {/* logo */}
            <DualThemeIcon
              imageSource={image.logo}
              theme={theme}
              modifyClasses="w-max mx-auto mb-4 md:mb-elementGapSm"
            />
            <div className="aspect-square overflow-hidden">
              {/* image */}
              <img
                className="w-full h-full object-cover shadow-lg group-hover:scale-[1.1] transition-all duration-300"
                src={image.imageSource}
                alt={image.text}
              />
            </div>
            {/* button */}
            <LinkBtn
              text={image.text}
              url={image.url}
              theme={theme}
              modifyClasses={`w-max mx-auto mt-elementGapSm md:mt-elementGapMd`}
            />
          </div>
        );
      })}
    </div>
  );
};

ThreeGridShowcase.propTypes = {
  images: PropTypes.array,
};

export default ThreeGridShowcase;
