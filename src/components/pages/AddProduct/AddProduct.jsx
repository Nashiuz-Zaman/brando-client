// shared component imports
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import AddProductForm from "../../shared/AddProductForm/AddProductForm";

const AddProduct = () => {
  return (
    <section className="my-sectionGapSm !text-white">
      <SectionHeading modifyClasses="mb-4" text={"Add Products"} />
      <AddProductForm />
    </section>
  );
};

export default AddProduct;
