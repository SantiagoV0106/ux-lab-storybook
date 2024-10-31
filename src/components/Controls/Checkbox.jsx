import { useState } from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

export const Checkbox = ({ initialState }) => {
  const [isChecked, setIsChecked] = useState(initialState === "selected");
  const [state, setState] = useState(initialState); // Estado interno para manejar el estado visual

  const handleClick = () => {
    if (state !== "disabled") {
      setIsChecked(!isChecked);
      setState(isChecked ? "enabled" : "selected"); // Cambia entre "enabled" y "selected"
    }
  };

  return (
    <div
      className={`checkbox-container ${state} ${isChecked ? "checked" : ""}`}
      onClick={handleClick}
      data-testid="checkbox"
    >
      <div className={`checkbox ${state} ${isChecked ? "checked" : ""}`}>
        {isChecked && state === "selected" && (
          <svg
            width="12"
            height="8"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0242 0.321753C13.314 0.602523 13.314 1.05774 13.0242 1.33851L6.09862 8.04877C5.80884 8.32954 5.33901 8.32954 5.04923 8.04877L1.09173 4.21434C0.801944 3.93357 0.801944 3.47835 1.09173 3.19758C1.38151 2.91681 1.85134 2.91681 2.14112 3.19758L5.57392 6.52364L11.9749 0.321753C12.2646 0.040983 12.7345 0.040983 13.0242 0.321753Z"
              fill="white"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  initialState: PropTypes.oneOf(["enabled", "hovered", "selected", "disabled"]).isRequired,
};
