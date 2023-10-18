// react imports
import { useEffect, useState } from "react";

const useCarousel = (imagesArr, interval = 2000) => {
  const [curSlide, setCurSlide] = useState(0);
  // calculate the last index
  const lastIndex = imagesArr.length - 1;
  // set the right and left slide according to the curslide
  const leftSlide = curSlide === 0 ? lastIndex : curSlide - 1;
  const rightSlide = curSlide === lastIndex ? 0 : curSlide + 1;

  useEffect(() => {
    // set the curslide after a certain time
    const timer = setTimeout(() => {
      setCurSlide(curSlide === lastIndex ? 0 : curSlide + 1);
    }, interval);

    // clear the timeout id if component re-renders or unmounts with this cleanup function
    return () => clearTimeout(timer);
  }, [lastIndex, curSlide, interval]);

  return { curSlide, leftSlide, rightSlide };
};

export default useCarousel;
