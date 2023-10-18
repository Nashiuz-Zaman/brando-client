// react router
import { useLoaderData } from "react-router-dom";

// shared components
import Banner from "../../shared/Banner/Banner";
import FeaturedIn from "../../shared/FeaturedIn/FeaturedIn";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import ClipDesign from "../../shared/ClipDesign/ClipDesign";
import Brands from "../../shared/Brands/Brands";
import Video from "../../shared/Video/Video";

// container components
import InnerContainer from "../../container/InnerContainer/InnerContainer";
import OuterContainer from "./../../container/OuterContainer.jsx/OuterContainer";

// hooks
import useThemeProvider from "../../../hooks/useThemeProvider";

// data
import { carouselImages } from "../../../data/carouselData";
import { logos, logosBlack } from "./../../../data/featuredInData";
import nikeVideo from "./../../../assets/video/nikead.mp4";

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

  // todays story section heading
  const storyHeading = "Today's Story";

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

          <div className="w-full relative pb-elementGapMd">
            <ClipDesign modifyClasses="clip1" />
            <InnerContainer>
              <Brands brands={brands} />
            </InnerContainer>
          </div>
        </OuterContainer>
      </section>

      {/* today's story section */}
      <section className="mb-sectionGapMd md:mb-sectionGapLg">
        <OuterContainer>
          <div className="w-full h-full relative py-elementGapMd">
            {/* two clip paths are working here for different screen sizes */}
            <ClipDesign modifyClasses="hidden clip2 md:block" />
            <ClipDesign modifyClasses="block clip3 md:hidden" />

            <SectionHeading
              text={storyHeading}
              modifyClasses="mb-elementGapMd text-white relative z-20"
            />
            <div className="relative z-20">
              <InnerContainer>
                <Video videoSource={nikeVideo} />
              </InnerContainer>
            </div>
          </div>
        </OuterContainer>
      </section>
    </div>
  );
};

export default Home;
