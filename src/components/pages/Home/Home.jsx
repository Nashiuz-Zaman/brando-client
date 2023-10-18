// react router
import { useLoaderData } from "react-router-dom";

// shared components
import Banner from "../../shared/Banner/Banner";
import FeaturedIn from "../../shared/FeaturedIn/FeaturedIn";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import ClipDesign from "../../shared/ClipDesign/ClipDesign";
import Brands from "../../shared/Brands/Brands";

// container components
import InnerContainer from "../../container/InnerContainer/InnerContainer";
import OuterContainer from "./../../container/OuterContainer.jsx/OuterContainer";

// hooks
import useThemeProvider from "../../../hooks/useThemeProvider";

// data
import { carouselImages } from "../../../data/carouselData";
import { logos, logosBlack } from "./../../../data/featuredInData";

const Home = () => {
  // extract the theme from the custom hook
  const { theme } = useThemeProvider();

  // retreive data from loader
  const brands = useLoaderData();
  console.log(brands);

  // make the text object which contains text for the banner component
  const bannerTextObj = {
    heading: (
      <>
        <span className="text-primary">Brando:</span> Elevate Your{" "}
        <br className="hidden xsm:inline-block" />
        Style with Iconic Brands
      </>
    ),

    description: (
      <>
        Discover the latest trends in footwear and fashion from renowned brands
        <br className="hidden xsm:inline-block" /> like Nike, H&M, Levi&apos;s,
        Zara, and more.
      </>
    ),
    btnText: "Shop Now",
  };

  // featured in section heading
  const featuredInHeading = "Featured In";

  // brands section heading
  const brandsHeading = "Our Brands";

  // home components jsx starts here
  return (
    <div>
      {/* banner section */}
      <section className="mt-[1.5rem] lg:mt-[5rem] mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <Banner
            textObj={bannerTextObj}
            carouselData={carouselImages}
            theme={theme}
          />
        </InnerContainer>
      </section>

      {/* featured in section */}
      <section className="mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <SectionHeading
            text={featuredInHeading}
            modifyClasses="mb-elementGapMd"
          />
          <FeaturedIn
            logos={theme === "light" ? logos : logosBlack}
            modifyClasses={theme === "dark" ? "filter-white" : ""}
          />
        </InnerContainer>
      </section>

      {/* brands section */}
      <section className="mb-sectionGapMd md:mb-sectionGapLg">
        <OuterContainer>
          <SectionHeading
            text={brandsHeading}
            modifyClasses="mb-elementGapMd"
          />

          <div className="w-full relative pb-[3rem]">
            <ClipDesign modifyClasses="hidden clip1 md:block" />
            <InnerContainer>
              <Brands brands={brands} />
            </InnerContainer>
          </div>
        </OuterContainer>
      </section>
    </div>
  );
};

export default Home;
