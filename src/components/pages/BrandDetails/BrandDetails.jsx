// shared components
import BrandBanner from "../../shared/BrandBanner/BrandBanner";
import ProductCards from "../../shared/ProductCards/ProductCards";
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import LinkBtn from "../../shared/LinkBtn/LinkBtn";

// container components
import InnerContainer from "../../container/InnerContainer/InnerContainer";

// react router import
import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";

// data
import { vercelAddress } from "../../../data/vercelServerData";

const BrandDetails = () => {
  // getting data for the advertisments
  const brandData = useLoaderData();
  // setting state for the products data
  const [productsData, setProductsData] = useState([]);
  // get the brand from route params
  const { id } = useParams();

  // getting data for the products specific to brands
  useEffect(() => {
    fetch(`${vercelAddress}/brands/${id}/products`)
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
      <section id="explore" className="mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <SectionHeading
            text={`All Products (${productsData ? productsData.length : 0})`}
            modifyClasses="mb-elementGapMd"
          />
          {/* if there are no products then show this message */}
          {productsData.length === 0 && (
            <div className="bg-lightGray rounded-default w-max mx-auto p-6 space-y-6">
              <p className="text-3xl mx-auto text-center">
                We apologize, at the moment no products are available
              </p>
              <LinkBtn
                text={"Back to Home"}
                modifyClasses="w-max mx-auto"
                url={"/"}
              />
            </div>
          )}

          {/* if there are products then show this component */}
          {productsData.length > 0 && <ProductCards products={productsData} />}
        </InnerContainer>
      </section>
    </div>
  );
};

export default BrandDetails;
