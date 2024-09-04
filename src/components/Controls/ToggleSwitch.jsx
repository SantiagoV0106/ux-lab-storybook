import PropTypes from "prop-types";
import "./ToggleSwitch.css"; 
/* 
TODO Use an Input type Checkbox to ease the info collection
*/
export const ToggleSwitch = ({ isOn, onToggle }) => {
  return (
    <div
      className={`toggle-container ${isOn ? "toggle-on" : "toggle-off"}`}
      onClick={onToggle}
    >
      <span
        className={`toggle-knob ${isOn ? "toggle-knob-on" : "toggle-knob-off"}`}
      />
    </div>
  );
};

ToggleSwitch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
