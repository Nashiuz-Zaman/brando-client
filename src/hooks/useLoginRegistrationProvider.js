// react imports
import { useContext } from "react";

// context imports
import { LoginRegistrationContext } from "../Providers/LoginRegistrationProvider";

const useLoginRegistrationProvider = () => {
  const contextValue = useContext(LoginRegistrationContext);

  return contextValue;
};

export default useLoginRegistrationProvider;
