import Icon from "../Buttons/Icon";
import { Checkbox } from "./Checkbox";
import PropTypes from "prop-types";
/* 
TODO Probar con el componente Icon como lo hice en el Button component
*/
export const SelectionCard = ({ title, caption, checkboxState }) => {
  return (
    <div className="card flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md w-[21rem] h-16">
      <div className="flex items-center">
        <div className="icon mr-3">
          <Icon name="shop" fill="currentColor" />
        </div>
        <div className="text">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{caption}</p>
        </div>
      </div>
      <Checkbox state={checkboxState} />
    </div>
  );
};

SelectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  checkboxState: PropTypes.oneOf(['enabled', 'hovered', 'selected']).isRequired,
};
