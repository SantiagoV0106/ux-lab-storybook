import PropTypes from "prop-types";
import Icon from "../Buttons/Icon";
import "./CardState.css";

export const CardState = ({ text, iconName, state = "notCompleted" }) => {

    /* 
    TODO: Arreglar para que los colores se vean reflejados segun el estado del componente
    */
    const stateClasses = {
        completed: "bg-system-successColor", 
        inProgress: "bg-system-warningColor", 
        notCompleted: "bg-system-errorColor", 
      };

    console.log("Current state:", state);

  return (
    <div className="card-container">
      <div className={`icon-container ${stateClasses[state]}`}>
        <Icon name={iconName} fill="currentColor" />
      </div>
      <p className="inner-text">{text}</p>
      <div className="arrow-container">
        <Icon name="arrowSimpleRight" fill="currentColor" />
      </div>
    </div>
  );
};

CardState.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf([
    "add",
    "arrowRight",
    "helpQuestion",
    "shop",
    "checkIcon",
    "arrowSimpleRight",
  ]).isRequired,
  state: PropTypes.oneOf(["completed", "inProgress", "notCompleted"]).isRequired,
};
