import PropTypes from "prop-types";
import "./ToggleSwitch.css";

export const ToggleSwitch = ({ isOn, onToggle, name }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        id={name}
        checked={isOn}
        onChange={onToggle}
      />
      <label className="toggle-switch-label" htmlFor={name}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-knob" />
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
