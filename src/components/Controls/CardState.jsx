import PropTypes from "prop-types";
import Icon from "../Buttons/Icon";
import "./CardState.css";

export const CardState = ({ text, iconName, showIcon = true}) => {
  /* 
    TODO: Arreglar para que los colores se vean reflejados segun el estado del componente
    */
  return (
    <div className="card-container">
      <div className={`icon-container`}>
      {showIcon && <Icon name={iconName} fill="currentColor" />}
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
  iconName: PropTypes.oneOf(["checkIcon"]).isRequired,
  showIcon: PropTypes.bool
};
