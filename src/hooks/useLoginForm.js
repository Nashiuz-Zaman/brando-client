// react imports
import { useState } from "react";

// react router dom imports
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// custom hook
import useAuthContext from "./useAuthContext";

const useLoginForm = () => {
  // extract functions from auth context
  const { SignInUser, setAppLoading, signInWithGoogle } = useAuthContext();

  // create the navigation function
  const navigate = useNavigate();

  // extract state value from use location hook
  const { state } = useLocation();

  // states of the form input boxes
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // error state
  const [error, setError] = useState("");

  // on change run this function for email field
  const getEmail = (e) => {
    setLoginInfo({ ...loginInfo, email: e.target.value });
  };

  // on change run this function for password field
  const getPassword = (e) => {
    setLoginInfo({ ...loginInfo, password: e.target.value });
  };

  // function for handling google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        // if there is state navigate to that state or navigate to home page
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
      })
      // handle error
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    SignInUser(loginInfo.email, loginInfo.password)
      .then(() => {
        // if there is state navigate to that state or navigate to home page
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
      })
      // handle error
      .catch((error) => {
        setError(error.message);
        setAppLoading(false);
      });
  };

  return {
    loginInfo,
    getEmail,
    getPassword,
    handleSubmit,
    error,
    handleGoogleSignIn,
  };
};

export default useLoginForm;
