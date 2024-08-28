import PropTypes from "prop-types";
import "./Button.css";
import Icon from "./Icon";

/* 
 * TODO: Add the Font and Font-size 
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
          <Icon name={leftIconSrc} fill="currentColor" />
        </span>
      )}
      {children}
      {iconRight && rightIconSrc && (
        <span className="icon-right">
          <Icon name={rightIconSrc} fill="currentColor" />
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
