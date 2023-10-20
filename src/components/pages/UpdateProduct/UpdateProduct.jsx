//react
import { useState, useEffect } from "react";

// shared component imports
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import UpdateProductForm from "./../../shared/UpdateProductForm/UpdateProductForm";

// react router
import { useParams } from "react-router-dom";

//data
import { vercelAddress } from "../../../data/vercelServerData";

const UpdateProduct = () => {
  const { productId, brandId } = useParams();

  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    fetch(`${vercelAddress}/brands/${brandId}/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductInfo(data));
  }, [brandId, productId]);

  console.log(productInfo);

  return (
    <section className="my-sectionGapSm">
      <SectionHeading modifyClasses="mb-4" text={"Update Products"} />
      {productInfo && <UpdateProductForm initialProduct={productInfo} />}
    </section>
  );
};

export default UpdateProduct;
2;
