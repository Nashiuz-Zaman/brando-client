// react import
import PropTypes from "prop-types";

//image
import starFilledImage from "./image/star-fill.svg";

//RatingStars starts here
export default function RatingStars({
  ratingGiven = null,
  modifyClasses = "",
}) {
  const ratingStarsArr = [1, 2, 3, 4, 5];

  // jsx template
  return (
    <div className={`flex items-center gap-[0.5rem] ${modifyClasses}`}>
      {ratingStarsArr.map((rating) => {
        return (
          <img
            key={rating}
            src={starFilledImage}
            alt="a rating star"
            data-rating={rating}
            style={{
              filter:
                rating <= ratingGiven
                  ? "invert(92%) sepia(19%) saturate(5933%) hue-rotate(359deg) brightness(100%) contrast(106%)"
                  : "none",
            }}
            className="h-[1.5rem] w-auto"
          />
        );
      })}
    </div>
  );
}

RatingStars.propTypes = {
  ratingGiven: PropTypes.number,
  modifyClasses: PropTypes.string,
};
