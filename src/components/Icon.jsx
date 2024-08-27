import PropTypes from 'prop-types';
import { IconComponents } from "../utils/Icons"

export const Icon = ({ name, fill }) => {
    const SelectedIcon = IconComponents[name];
    return SelectedIcon ? <SelectedIcon fill={fill}/> : null;
};

Icon.propTypes = {
    name: PropTypes.oneOf(['add']).isRequired,
    fill: PropTypes.string.isRequired,
}

export default Icon;