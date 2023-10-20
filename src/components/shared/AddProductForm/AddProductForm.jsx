// shared
import ButtonBtn from "../ButtonBtn/ButtonBtn";

// react router
import { useNavigate } from "react-router-dom";

// custom hooks
import useThemeProvider from "../../../hooks/useThemeProvider";

// data
import { vercelAddress } from "../../../data/vercelServerData";

const AddProductForm = () => {
  const { theme } = useThemeProvider();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const imageSource = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const product = {
      imageSource,
      name,
      brandName,
      type,
      price,
      rating,
    };

    fetch(`${vercelAddress}/brands/${brandName.toLowerCase()}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          navigate(`/brands/${brandName.toLowerCase()}`);
        }
      });
  };

  // common styles for input and label jsx elements
  const labelClasses = "block mb-2 text-sm text-inherit";
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-2";

  return (
    <div className={`${theme === "light" ? "text-textPrimary" : "text-white"}`}>
      <form onSubmit={handleSubmit} className="w-full md:w-[20rem] mx-auto p-4">
        {/* image field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="image">
            Image URL
          </label>
          <input
            className={inputClasses}
            type="text"
            id="image"
            placeholder="Image URL"
            name="image"
            required
          />
        </div>

        {/* name field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="name">
            Product Name
          </label>
          <input
            className={inputClasses}
            type="text"
            id="name"
            name="name"
            placeholder="Product Name"
            required
          />
        </div>

        {/* brand name field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="brandName">
            Brand Name
          </label>
          <input
            className={inputClasses}
            type="text"
            id="brandName"
            name="brandName"
            placeholder="Brand Name"
            required
          />
        </div>

        {/* type field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="type">
            Type
          </label>
          <select name="type" id="type" className={inputClasses}>
            <option value="Jeans">Jeans</option>
            <option value="Bag">Bag</option>
            <option value="Shirt">Shirt</option>
            <option value="Shoe">Shoe</option>
          </select>
        </div>

        {/* price name field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="price">
            Price
          </label>
          <input
            className={inputClasses}
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            required
          />
        </div>

        {/* rating name field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="rating">
            Rating
          </label>
          <input
            className={inputClasses}
            type="text"
            id="rating"
            name="rating"
            placeholder="Rating"
            required
          />
        </div>

        <ButtonBtn text="Add Product" modifyClasses="w-full block mt-10 mb-4" />
      </form>
    </div>
  );
};

export default AddProductForm;
