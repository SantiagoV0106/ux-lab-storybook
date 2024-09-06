import Icon from "../Buttons/Icon";
import { Checkbox } from "./Checkbox";
import PropTypes from "prop-types";
import './SelectionCard.css'

export const SelectionCard = ({ title, caption, checkboxState, iconName }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="icon">
          <Icon name={iconName} fill="currentColor" />
        </div>
        <div className="text">
          <h3 className="title">{title}</h3>
          <p className="caption">{caption}</p>
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
  checkboxState: PropTypes.oneOf(['enabled', 'hovered', 'selected']).isRequired,
  iconName: PropTypes.oneOf(['add', 'arrowRight', 'shop'])
};
