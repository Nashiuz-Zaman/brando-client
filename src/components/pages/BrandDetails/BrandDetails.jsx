// shared components
import ClipDesign from "../../shared/ClipDesign/ClipDesign";

// container components
import InnerContainer from "../../container/InnerContainer/InnerContainer";

// react router import
import { useLoaderData } from "react-router-dom";
import BrandBanner from "../../shared/BrandBanner/BrandBanner";

const BrandDetails = () => {
  const brandData = useLoaderData();

  return (
    <div>
      {/* banner section */}
      <section className="mt-[1.5rem] lg:mt-[5rem] mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <div className="relative ">
            {/* <ClipDesign /> */}

            <BrandBanner brand={brandData} />
          </div>
        </InnerContainer>
      </section>
    </div>
  );
};

export default BrandDetails;
