// react
import { useState, useEffect } from "react";

// shared components
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import InnerContainer from "../../container/InnerContainer/InnerContainer";
import ButtonBtn from "../../shared/ButtonBtn/ButtonBtn";

// custom hook
import useAuthContext from "../../../hooks/useAuthContext";

// data
import { vercelAddress } from "../../../data/vercelServerData";

const MyCart = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const { user } = useAuthContext();

  // delete function
  const handleDelete = (id) => {
    fetch(`${vercelAddress}/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setShouldUpdate(true);
        }
      })
      .catch((error) => console.error(error));
  };

  // fetch to load user specific data
  useEffect(() => {
    fetch(`${vercelAddress}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShouldUpdate(false);
        setMyProducts(data);
      })
      .catch((error) => console.error(error));
  }, [user, shouldUpdate]);

  return (
    <div>
      <section className="mt-[1.5rem] lg:mt-[5rem] mb-sectionGapMd md:mb-sectionGapLg">
        <InnerContainer>
          <SectionHeading text={"My Shopping Cart"} modifyClasses="mb-8" />

          <div className="bg-lightGray px-2 py-8 md:px-8 rounded-default">
            <h4 className="mb-10 text-center text-textMediumLight text-2xl">{`Total Products (${
              myProducts ? myProducts.length : 0
            })`}</h4>
            <div className="grid grid-cols-3 text-primary font-bold md:text-xl mb-2">
              <p>Name</p>
              <p className="justify-self-center">Brand</p>
              <p className="justify-self-end">Action</p>
            </div>
            <div className="h-[1px] bg-[#ccc] mb-4"></div>
            <div className="flex flex-col gap-3">
              {myProducts.length === 0 && (
                <p className="text-center">The cart is empty</p>
              )}
              {myProducts.length > 0 &&
                myProducts.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="grid grid-cols-3 items-center"
                    >
                      <p className="text-sm md:text-xl">
                        {item.productData.name}
                      </p>
                      <p className="capitalize justify-self-center text-sm md:text-xl">
                        {item.productData.brandName}
                      </p>
                      <div className="justify-self-end">
                        <ButtonBtn
                          onClickFunction={() => {
                            console.log(item._id);
                            handleDelete(item._id);
                          }}
                          text="Remove"
                          modifyClasses="text-sm w-max !px-[4px] !py-[2px] md:text-xl md:!px-4 md:!py-2"
                        />
                      </div>
                    </div>
                  );
                })}
              <div></div>
            </div>
          </div>
        </InnerContainer>
      </section>
    </div>
  );
};

export default MyCart;
