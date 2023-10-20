// shared components
import BrandBanner from "../../shared/BrandBanner/BrandBanner";
import ProductCards from "../../shared/ProductCards/ProductCards";
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";

// container components
import InnerContainer from "../../container/InnerContainer/InnerContainer";

// react router import
import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const brandData = useLoaderData();
  const [productsData, setProductsData] = useState(null);
  const { id } = useParams();

  // getting data for the products specific to brands
  useEffect(() => {
    fetch(
      `https://brand-shop-server-5aee4s461-nashiuz-zamans-projects.vercel.app/brands/${id}/products`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
      });
  }, [id]);

  return (
    <div>
      {/* banner section */}
      <section className="mt-[1.5rem] lg:mt-[5rem] mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <div>
            {/* <ClipDesign /> */}
            <BrandBanner brand={brandData} />
          </div>
        </InnerContainer>
      </section>

      {/* products section */}
      <section className="mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <SectionHeading
            text={`All Products (${productsData && productsData.length})`}
            modifyClasses="mb-elementGapMd"
          />
          {productsData && <ProductCards products={productsData} />}
        </InnerContainer>
      </section>
    </div>
  );
};

export default BrandDetails;
