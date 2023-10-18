// shared components
import Banner from "../../shared/Banner/Banner";

// container components
import InnerContainer from "../../container/InnerContainer/InnerContainer";

// hooks
import useThemeProvider from "../../../hooks/useThemeProvider";

// data
import { carouselImages } from "../../../data/carouselData";

const Home = () => {
  // extract the theme from the custom hook
  const { theme } = useThemeProvider();

  // make the text object which contains text for the banner component
  const bannerTextObj = {
    heading: (
      <>
        <span className="text-primary">Brando:</span> Elevate Your Style
        <br className="hidden xsm:inline-block lg:hidden" /> with Iconic Brands
      </>
    ),

    description: (
      <>
        Discover the latest trends in footwear and fashion from renowned brands
        <br className="hidden xsm:inline-block" /> like Nike, H&M, Levi's, Zara,
        and more.
      </>
    ),
    btnText: "Shop Now",
  };

  return (
    <div>
      {/* banner section */}
      <section className="mt-[2rem] lg:mt-[5rem] mb-sectionGapLg">
        <InnerContainer>
          <Banner
            textObj={bannerTextObj}
            carouselData={carouselImages}
            theme={theme}
          />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
