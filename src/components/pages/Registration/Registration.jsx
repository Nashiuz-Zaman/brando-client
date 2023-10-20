// shared component imports
import RegistrationForm from "../../shared/RegistrationForm/RegistrationForm";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import RegistrationSuccessToast from "../../shared/RegistratonSuccessToast/RegistrationSuccessToast";

// hooks
import useRegistrationForm from "../../../hooks/useRegistrationForm";

const Registration = () => {
  // extract theme info

  // extract the state so that we can pass the success toast show/hide state to the toast component
  const { registrationInfo } = useRegistrationForm();

  return (
    <section className="my-sectionGapSm">
      <RegistrationSuccessToast show={registrationInfo.showSuccessToast} />
      <SectionHeading modifyClasses="mb-4" text={"Register- It's free!"} />
      <RegistrationForm />
    </section>
  );
};

export default Registration;
