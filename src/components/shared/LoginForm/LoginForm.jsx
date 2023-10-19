// react router import
import { Link } from "react-router-dom";

// shared component imports
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

// custom hooks
import useLoginForm from "../../../hooks/useLoginForm";

const LoginForm = () => {
  const {
    loginInfo,
    getEmail,
    getPassword,
    handleSubmit,
    error,
    handleGoogleSignIn,
  } = useLoginForm();

  // common styles for input and label jsx elements
  const labelClasses = "block mb-2 text-sm";
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-2";

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full md:w-[20rem] mx-auto p-4">
        {/* email field */}
        <div className="mb-4">
          <label className={labelClasses} htmlFor="email">
            Email
          </label>
          <input
            className={inputClasses}
            onChange={getEmail}
            type="email"
            id="email"
            value={loginInfo.email}
            placeholder="email"
            required
          />
        </div>

        {/* password field */}
        <div className="mb-10">
          <label className={labelClasses} htmlFor="password">
            Password
          </label>
          <input
            className={inputClasses}
            onChange={getPassword}
            type="password"
            id="password"
            value={loginInfo.password}
            placeholder="password"
            required
          />
        </div>

        <ButtonBtn text="Log In" modifyClasses="w-full block mb-4" />
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-primary font-semibold" to={"/register"}>
            Register
          </Link>
        </p>
      </form>
      <ButtonBtn
        onClickFunction={handleGoogleSignIn}
        text="Sign In With Google"
        modifyClasses="mx-auto mt-6 border border-primary bg-white !text-primary hover:bg-white"
      />
    </div>
  );
};

export default LoginForm;
