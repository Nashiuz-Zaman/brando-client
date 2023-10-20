// container components
import InnerContainer from "../../container/InnerContainer/InnerContainer";

// react router import
import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import BrandBanner from "../../shared/BrandBanner/BrandBanner";

const BrandDetails = () => {
  const brandData = useLoaderData();
  const [productsData, setProductsData] = useState(null);
  const { id } = useParams();

  // getting data for the products specific to brands
  useEffect(() => {
    fetch(`http://localhost:5000/brands/${id}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
      });
  }, [id]);

  console.log(productsData);

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
