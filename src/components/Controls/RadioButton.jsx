import PropTypes from "prop-types";
/* 
* Preguntar sobre si deberia de funcionar de manera en que pueda alternar al dar click 
* PERFECCIONAR CSS
*/
export const RadioButton = ({ state, onClick }) => {
  const getStyles = (state) => {
    switch (state) {
      case "unable":
        return "bg-neutral-200 text-neutral-500 cursor-not-allowed";
      case "hovered":
        return "bg-neutral-50 border-primary-darkBlue-300 cursor-pointer";
      case "selected":
        return "bg-primary-darkBlue-300 text-neutral-50 border-primary-darkBlue-300 cursor-pointer";
      default:
        return "";
    }
  };

  return (
    <div
      className={`flex items-center p-2 rounded-lg border ${getStyles(state)}`}
      onClick={state !== "unable" ? onClick : undefined}
    >
      <input
        type="radio"
        className="form-radio h-4 w-4 text-primary-darkBlue-300"
        disabled={state === "unable"}
      />
    </div>
  );
};

RadioButton.propTypes = {
  state: PropTypes.oneOf(["unable", "hovered", "selected"]).isRequired,
  onClick: PropTypes.func,
};
