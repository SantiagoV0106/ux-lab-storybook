import PropTypes from "prop-types";
import "./Button.css";

/* 
 * TODO: Review if the ICON are working   
*/
const getStyles = (type, appearance, state) =>
  ["button", type, appearance, state].filter(Boolean).join(" ");

export const Button = ({
  children,
  type,
  appearance,
  state,
  iconLeft,
  iconRight,
  leftIconSrc,
  rightIconSrc,
  onClick
}) => {
  return (
    <button className={getStyles(type, appearance, state)} onClick={onClick}>
      {iconLeft && leftIconSrc && (
        <span className="icon-left">
          <img src={leftIconSrc} alt="Left Icon" />
        </span>
      )}
      {children}
      {iconRight && rightIconSrc && (
        <span className="icon-right">
          <img src={rightIconSrc} alt="Right Icon" />
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  appearance: PropTypes.oneOf(["filled", "outline"]).isRequired,
  state: PropTypes.oneOf([
    "enabled",
    "hovered",
    "disabled",
    "clicked",
    "focused",
  ]),
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  leftIconSrc: PropTypes.string,
  rightIconSrc: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  appearance: "filled",
  state: "enabled",
  iconLeft: true,
  iconRight: true,
  leftIconSrc: null,
  rightIconSrc: null,
  onClick: undefined,
};
