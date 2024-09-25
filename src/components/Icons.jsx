import PropTypes from 'prop-types';
import { IconComponents } from '../utils/icons';

export const Icon = ({ name, fill }) => {
    const SelectedIcon = IconComponents[name];
    return SelectedIcon ? <SelectedIcon fill={fill} /> : null;
  };
  
  Icon.propTypes = {
    name: PropTypes.oneOf([
      "inicio",
      "agenda",
      "gestion",
      "portafolio",
      "perfil",
      "add",
      "arrowSimpleRight",
      "helpQuestion",
      "shop",
      "arrowSimpleRight",
      "arrowSimpleLeft",
      "checkIcon",
      "alert"
    ]).isRequired,
    fill: PropTypes.string.isRequired,
  };
  
  export default Icon;