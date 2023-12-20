// react
import { useSelector, useDispatch } from "react-redux";
import { openNav, closeNav } from "../features/MobileNav/mobileNavSlice";

const useMobileNavigation = () => {
  const open = useSelector((store) => {
    return store.mobileNav.mobileNavOpen;
  });

  const dispatch = useDispatch();
  const openMobileNav = () => {
    dispatch(openNav());
  };
  const closeMobileNav = () => {
    dispatch(closeNav());
  };

  return { open, openMobileNav, closeMobileNav };
};

export default useMobileNavigation;
