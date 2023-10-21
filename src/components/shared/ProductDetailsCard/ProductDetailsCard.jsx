// react
import PropTypes from "prop-types";
import { useState } from "react";

// shared componetns
import ButtonBtn from "../ButtonBtn/ButtonBtn";
import CartSuccessToast from "../CartSuccessToast/CartSuccessToast";
import PaymentOptionLogos from "../PaymentOptionLogos/PaymentOptionLogos";
import ColorSwatches from "../ColorSwatches/ColorSwatches";

// custom hook
import useAuthContext from "./../../../hooks/useAuthContext";

// data
import { vercelAddress } from "./../../../data/vercelServerData";

const ProductDetailsCard = ({ productData }) => {
  // extract product info
  const { imageSource, name, brandName, type, price, rating } = productData;
  // declare the state for the toast
  const [showCartSuccessToast, setShowCartSuccessToast] = useState(false);

  // extract user info
  const { user } = useAuthContext();

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
        <div className="space-y-1 mb-5 lg:text-xl">
          <p className="capitalize">
            <span className="text-primary font-bold">Brand:</span>{" "}
            {brandName === "hnm" ? (
              "H&M"
            ) : (
              <span className="capitalize">{brandName}</span>
            )}
          </p>
          <p>
            <span className="text-primary font-bold">Type:</span> {type}
          </p>
          <p>
            <span className="text-primary font-bold">Price:</span> ${price}
          </p>
          <p>
            <span className="text-primary font-bold">Rating:</span> {rating} out
            of 5
          </p>
        </div>

        <div className="mb-5">
          <ColorSwatches />
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
