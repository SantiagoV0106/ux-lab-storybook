
import PropTypes from 'prop-types';
import Icon from '../Icons';

export const MenuButton = ({ iconName, label, onClick, selected }) => {

    return (
        <button 
            className={`flex flex-col py-custom-xs px-custom-xs items-center rounded-custom-md ${selected ? 'bg-primary-darkBlue-200 text-primary-darkBlue-300' : 'bg-background-primary text-primary-darkBlue-200'}`}
            onClick={onClick}
        >
            {iconName && <Icon name={iconName} fill={selected ? 'text-primary-darkBlue-300' : 'text-primary-darkBlue-200'} />}            
            <span className='py-custom-xs px-custom-xs font-sans font-regular text-caption-12 '>
                {label}
            </span>
        </button>
    );

    
};

MenuButton.propTypes = {
    label: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
};
  