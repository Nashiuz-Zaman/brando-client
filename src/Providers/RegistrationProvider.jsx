// react
import PropTypes from "prop-types";
import { createContext, useState } from "react";

// create the context
export const RegistrationContext = createContext();

const RegistrationProvider = ({ children }) => {
  // set to true when the submit button has been clicked to show errors only when the submission has happened
  const [formSubmitted, setFormSubmitted] = useState(false);

  // states of the form input boxes and error
  const [registrationInfo, setRegistrationInfo] = useState({
    email: "",
    password: "",
    username: "",
    photoUrl: "",
    showSuccessToast: false,
    errors: [],
  });

  const registrationObj = {
    registrationInfo,
    setFormSubmitted,
    setRegistrationInfo,
    formSubmitted,
  };

  return (
    <RegistrationContext.Provider value={registrationObj}>
      {children}
    </RegistrationContext.Provider>
  );
};

RegistrationProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default RegistrationProvider;
