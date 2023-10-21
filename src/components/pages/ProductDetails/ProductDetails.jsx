// react router
import { useLoaderData } from "react-router-dom";

// shared components
import ProductDetailsCard from "../../shared/ProductDetailsCard/ProductDetailsCard";
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import Description from "../../shared/Description/Description";

// containers
import InnerContainer from "./../../container/InnerContainer/InnerContainer";

const ProductDetails = () => {
  const productData = useLoaderData();

  return (
    <div>
      <section className="mt-[1.5rem] lg:mt-[5rem] mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          {/* product name heading */}
          <SectionHeading
            text={`${productData.name}`}
            modifyClasses="mb-5 lg:text-5xl lg:mb-8"
          />

          {/* short description */}
          <Description
            text={productData.shortDescription}
            modifyClasses="md:w-1/2 mx-auto mb-5 md:mb-8"
          />

          {/* product information */}
          <ProductDetailsCard productData={productData} />
        </InnerContainer>
      </section>
    </div>
  );
};

export default ProductDetails;
