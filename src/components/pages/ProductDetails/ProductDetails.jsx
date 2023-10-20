// react router
import { useLoaderData } from "react-router-dom";

// shared components
import ProductDetailsCard from "../../shared/ProductDetailsCard/ProductDetailsCard";
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";

// containers
import InnerContainer from "./../../container/InnerContainer/InnerContainer";

const ProductDetails = () => {
  const productData = useLoaderData();

  return (
    <div>
      <section className="mt-[1.5rem] lg:mt-[5rem] mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <SectionHeading
            text={`${productData.name}`}
            modifyClasses="mb-5 lg:text-5xl lg:mb-8"
          />
          <ProductDetailsCard productData={productData} />
        </InnerContainer>
      </section>
    </div>
  );
};

export default ProductDetails;
