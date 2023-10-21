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
    <div className="grid md:grid-cols-3 gap-5">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <DualThemeIcon
              imageSource={image.logo}
              theme={theme}
              modifyClasses="w-max mx-auto mb-elementGapSm"
            />
            <div className="aspect-square">
              <img
                className="w-full h-full object-cover shadow-lg"
                src={image.imageSource}
                alt={image.text}
              />
            </div>
            <LinkBtn
              text={image.text}
              outlined={true}
              modifyClasses="w-max mx-auto !text-textPrimary !border-textPrimary mt-elementGapMd"
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
