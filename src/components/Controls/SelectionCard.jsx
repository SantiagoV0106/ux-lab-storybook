import Icon from "../Buttons/Icon";
import { Checkbox } from "./Checkbox";
import PropTypes from "prop-types";
import "./SelectionCard.css";

export const SelectionCard = ({
  title,
  caption,
  state,
  captionSubstate,
  checkboxState,
  iconName,
}) => {
  const isDisabled = state === "disabled";
  const isSelected = state === "selected";
  const isEnabled = state === "enabled";

  return (
    <div
      className={`card ${state}`}
      onClick={!isDisabled ? () => {} : undefined}
    >
      <div className="content">
        <div
          className={`icon ${isSelected ? "selected" : ""} ${isDisabled ? "disabled" : ""}`}
        >
          <Icon name={iconName} fill="currentColor" />
        </div>
        <div className="text">
          <h3 className="title">{title}</h3>
          <p className={`caption ${isEnabled ? captionSubstate : ""}`}>{caption}</p>
        </div>
      </div>
      <div className="checkbox">
        <Checkbox state={checkboxState} />
      </div>
    </div>
  );
};

SelectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  state: PropTypes.oneOf(["enabled", "disabled", "selected"]).isRequired,
  captionSubstate: PropTypes.oneOf(["uncompleted", "progress", "completed"]),
  checkboxState: PropTypes.oneOf(["enabled", "hovered", "selected"]).isRequired,
  iconName: PropTypes.oneOf(["add", "arrowRight", "shop"]),
};
