// react
import PropTypes from "prop-types";
import { useState } from "react";

// shared componetns
import ButtonBtn from "../ButtonBtn/ButtonBtn";
import CartSuccessToast from "../CartSuccessToast/CartSuccessToast";
import PaymentOptionLogos from "../PaymentOptionLogos/PaymentOptionLogos";
import ColorSwatches from "../ColorSwatches/ColorSwatches";
import ProductInfo from "../ProductInfo/ProductInfo";

// custom hook
import useAuthContext from "./../../../hooks/useAuthContext";

// data
import { vercelAddress } from "./../../../data/vercelServerData";

const ProductDetailsCard = ({ productData }) => {
  // extract product info
  const { imageSource, name } = productData;
  // declare the state for the toast
  const [showCartSuccessToast, setShowCartSuccessToast] = useState(false);

  // extract user info
  const { user } = useAuthContext();

  // this function handles adding to cart
  const handleAddToCart = () => {
    const addedBy = user.email;
    const item = {
      addedBy,
      productData,
    };

    fetch(`${vercelAddress}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setShowCartSuccessToast(true);

          const timer = setTimeout(() => {
            setShowCartSuccessToast(false);
            clearTimeout(timer);
          }, 2000);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-lightGray rounded-default p-6 shadow-lg grid md:grid-cols-2 md:gap-8">
      {/* toast */}
      <CartSuccessToast show={showCartSuccessToast} />

      <div className="aspect-square lg:h-[30rem] mb-5 md:mb-0 lg:mx-auto">
        <img
          className="w-full h-full object-cover"
          src={imageSource}
          alt={name}
        />
      </div>

      <div className="flex flex-col">
        {/* product information */}
        <ProductInfo productData={productData} modifyClasses="mb-6" />

        {/* color swatches and payment info */}
        <div className="mb-5">
          <ColorSwatches modifyClasses="mb-6" />
          <PaymentOptionLogos modifyClasses="mt-5" />
        </div>

        <div className="space-y-4 mt-auto">
          <ButtonBtn
            onClickFunction={handleAddToCart}
            text="Add To Cart"
            modifyClasses="text-center block w-full"
          />
        </div>
      </div>
    </div>
  );
};

ProductDetailsCard.propTypes = {
  productData: PropTypes.object,
};

export default ProductDetailsCard;
