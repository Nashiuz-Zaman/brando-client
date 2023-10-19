// react imports
import { useContext } from "react";

// context imports
import { RegistrationContext } from "../Providers/RegistrationProvider";

const useRegistrationProvider = () => {
  const registrationContextValue = useContext(RegistrationContext);

  return registrationContextValue;
};

export default useRegistrationProvider;
