// shared components
import ButtonBtn from "../ButtonBtn/ButtonBtn";

const NewsLetter = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleClick} className="w-max mx-auto md:flex">
        <input
          type="text"
          className="border border-textLight md:border-r-0 rounded-default md:rounded-r-none w-[15rem] md:w-[20rem]  block px-3 py-3 mb-[1.5rem] md:mb-0"
          placeholder="Email"
          required
        />
        <ButtonBtn
          text="Sign up!"
          modifyClasses="w-max mx-auto md:rounded-l-none border border-primary"
        />
      </form>
    </div>
  );
};

export default NewsLetter;
