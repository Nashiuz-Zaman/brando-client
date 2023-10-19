// react imports
import PropTypes from "prop-types";
import { useState, useEffect, createContext } from "react";

// firebase imports
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext();

// create auth instance
const auth = getAuth(app);

// create google provider instance
const googleProvider = new GoogleAuthProvider();

// auth provider jsx component starts here
const AuthProvider = ({ children }) => {
  // set up user state
  const [user, setUser] = useState(null);
  // declare app state
  const [appLoading, setAppLoading] = useState(true);

  // login with google function
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // user creation with email and password
  const createUser = (email, password) => {
    setAppLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login with email and password
  const SignInUser = (email, password) => {
    setAppLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user update function
  const updateUser = (username, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    });
  };

  // user logout function
  const signOutUser = () => {
    setAppLoading(true);
    return signOut(auth);
  };

  // set up observer for users, if there is one, update the user state and set loadin to false, if there is none set user to null and set loading to false
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (curUser) => {
      if (curUser) {
        setUser(curUser);
        setAppLoading(false);
      } else {
        setUser(null);
        setAppLoading(false);
      }
    });

    // clean up function for disconnecting the listener/observer
    return () => {
      unSubscribe();
    };
  }, []);

  console.log(user);

  // pass all the necessary things to the context provider through an object
  const authObj = {
    user,
    auth,
    setUser,
    createUser,
    appLoading,
    setAppLoading,
    signOutUser,
    SignInUser,
    updateUser,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
