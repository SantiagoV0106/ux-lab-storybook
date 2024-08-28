import PropTypes from "prop-types";
import Icon from "./Icon";
import './LinkButton.css'

export const LinkButton = ({ variant, onClick }) => {
  return (
    <button 
      className={`link-button ${variant === 'ingresar' ? 'ingresar' : 'conocerMas'}`} 
      onClick={onClick}
    >
      {variant === 'ingresar' ? 'Ingresar' : 'Conocer más'}
      <span className="icon-right">
        <Icon name="arrowRight" fill="currentColor" />
      </span>
    </button>
  );
}

LinkButton.propTypes = {
  variant: PropTypes.oneOf(['ingresar', 'conocerMas']).isRequired,
  onClick: PropTypes.func,
};

LinkButton.defaultProps = {
  variant: "ingresar"
}
