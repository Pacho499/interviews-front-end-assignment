import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RatingInputProps } from "../types/components";
import "../styles/RatingInput.css";

const RatingInput = ({ setRating, rating }: RatingInputProps) => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRate}
              onClick={() => setRating(currentRate)}
              hidden
            />

            <FontAwesomeIcon
              icon={faStar}
              className={`ratingInput-input ${
                currentRate <= rating ? "active" : "no-active"
              }`}
            />
          </label>
        );
      })}
    </>
  );
};

export default RatingInput;
