import PropTypes from "prop-types";
import "./Button.css";
import Icon from "./Icon";

const getStyles = (type, appearance, state, iconPosition) =>
  ["button", type, appearance, state, iconPosition].filter(Boolean).join(" ");

export const Button = ({
  children,
  type,
  appearance,
  state,
  iconSrc,
  iconPosition,
  onClick
}) => {
  return (
    <button className={getStyles(type, appearance, state, iconPosition)} onClick={onClick}>
      {iconSrc && iconPosition === "left" && (
        <span className="icon-left">
          <Icon name={iconSrc} fill="currentColor" />
        </span>
      )}
      {children}
      {iconSrc && iconPosition === "right" && (
        <span className="icon-right">
          <Icon name={iconSrc} fill="currentColor" />
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
  iconSrc:PropTypes.oneOf(["add", "arrowRight", "shop"]), /* Here we´re gonna add all the avaible icons for the button */
  iconPosition: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
};
