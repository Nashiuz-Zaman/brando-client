// react router dom imports
import { useNavigate } from "react-router-dom";

// custom hooks import
import useAuthContext from "./useAuthContext";
import useLoginRegistrationProvider from "./useLoginRegistrationProvider";

// custom hook body starts here
const useRegistrationForm = () => {
  // extract functions from auth context
  const { createUser, updateUser, setAppLoading, signOutUser } =
    useAuthContext();

  // extract functions from login and registration context
  const {
    registrationInfo,
    setFormSubmitted,
    setRegistrationInfo,
    formSubmitted,
  } = useLoginRegistrationProvider();

  // create the navigate function
  const navigate = useNavigate();

  // registration password validation
  const validatePasswordEntry = (password) => {
    setRegistrationInfo((prev) => {
      // this variable will store errors which were found
      const foundErrors = [];

      const capitalLetterRegExp = /[A-Z]/;
      const specialCharsRegExp = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;

      if (password.length < 6) {
        foundErrors.push("Passwords must be 6 characters");
      }

      if (!capitalLetterRegExp.test(password)) {
        foundErrors.push("Passwords must contain a capital letter");
      }

      if (!specialCharsRegExp.test(password)) {
        foundErrors.push("Passwords must contain a special character");
      }

      // Merge the errors the were found
      return { ...prev, errors: foundErrors };
    });
  };

  // on change run this function for username field
  const getUsername = (e) => {
    setFormSubmitted(false);
    setRegistrationInfo({ ...registrationInfo, username: e.target.value });
  };

  // on change run this function for photo url field
  const getPhotoUrl = (e) => {
    setFormSubmitted(false);
    setRegistrationInfo({ ...registrationInfo, photoUrl: e.target.value });
  };

  // on change run this function for email field
  const getEmail = (e) => {
    setFormSubmitted(false);
    setRegistrationInfo({ ...registrationInfo, email: e.target.value });
  };

  // on change run this function for password field
  const getPassword = (e) => {
    setFormSubmitted(false);
    setRegistrationInfo({ ...registrationInfo, password: e.target.value });
    validatePasswordEntry(e.target.value);
  };

  // function to run when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // only proceed to firebase when the errors are 0
    if (registrationInfo.errors.length === 0) {
      createUser(registrationInfo.email, registrationInfo.password)
        .then(() => {
          updateUser(registrationInfo.username, registrationInfo.photoUrl)
            .then(() => {
              // after successful registration logout and redirect user to login page
              signOutUser().then(() => {
                // if registration successful then show success toast first and then set timer to navigate to home page after a certain time
                setRegistrationInfo((prev) => {
                  return { ...prev, showSuccessToast: true };
                });

                // set the timer and clear the timer
                const timer = setTimeout(() => {
                  setRegistrationInfo((prev) => {
                    return { ...prev, showSuccessToast: false };
                  });
                  navigate("/login");
                  clearTimeout(timer);
                }, 2600);
              });
            })
            // handle error
            .catch((error) => console.log(error));
        })
        // handle error
        .catch((error) => {
          console.log(error);
          setAppLoading(false);
        });
    }
  };

  return {
    registrationInfo,
    getUsername,
    getEmail,
    getPassword,
    getPhotoUrl,
    handleSubmit,
    formSubmitted,
  };
};

export default useRegistrationForm;
