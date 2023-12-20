// shared components
import ButtonBtn from "../ButtonBtn/ButtonBtn";

// hook
import useTheme from "../../../hooks/useTheme";

const NewsLetter = () => {
  const { theme } = useTheme();

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleClick} className="w-max mx-auto md:flex">
        <input
          type="text"
          className="border border-textLight md:border-r-0 rounded-full md:rounded-r-none w-[15rem] md:w-[20rem] block px-3 py-3 mb-[1.5rem] md:mb-0"
          placeholder="Email"
          required
        />
        <ButtonBtn
          theme={theme}
          text="Sign up!"
          modifyClasses="w-max mx-auto md:rounded-l-none border "
        />
      </form>
    </div>
  );
};

export default NewsLetter;
