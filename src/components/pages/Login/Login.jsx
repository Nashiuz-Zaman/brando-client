// shared component imports
import LoginForm from "../../shared/LoginForm/LoginForm";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const Login = () => {
  return (
    <section className="my-sectionGapSm">
      <SectionHeading
        modifyClasses="mb-4"
        text={
          <>
            <span className="text-primary">Log In</span> To Your Account
          </>
        }
      />
      <LoginForm />
    </section>
  );
};

export default Login;
