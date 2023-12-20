// redux toolkit
import { useDispatch } from "react-redux";
import { changeTheme } from "../features/theme/themeSlice";
import { useSelector } from "react-redux";

const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme.theme);

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  return { theme, handleThemeChange };
};

export default useTheme;
