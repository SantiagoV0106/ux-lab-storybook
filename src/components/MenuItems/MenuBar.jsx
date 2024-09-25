import { useState } from "react";
import { MenuButton } from "./MenuButton";
import PropTypes from 'prop-types';


export const MenuBar = ({ buttons }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

    const handleButtonClick = (index) => {
        setSelectedIndex(index);
    };

    return (
      <div className="inline-flex w-auto flex-row py-custom-xs px-custom-xs gap-2 items-center bg-background-primary">
        {buttons.map((item, index) => (
          <MenuButton 
            key={index} 
            label={item.label} 
            iconName={item.iconName}
            selected={index === selectedIndex}
            onClick={() => handleButtonClick(index)} />
        ))}
      </div>
    );
};

MenuBar.propTypes = {
    buttons: PropTypes.array.isRequired,
};
  