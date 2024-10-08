import PropTypes from 'prop-types';
import { IconComponents } from "../../utils/icons.jsx"

export const Icon = ({ name, fill }) => {
    const SelectedIcon = IconComponents[name];
    if(!SelectedIcon){
        console.error(`icon with ${name} doesnt exist`);
        return null
    }
    return <SelectedIcon fill={fill}/> 
};

Icon.propTypes = {
    name: PropTypes.oneOf(['add','arrowRight', 'helpQuestion', 'shop','arrowSimpleRight', 'arrowSimpleLeft','checkIcon']).isRequired,
    fill: PropTypes.string.isRequired,
}

export default Icon;