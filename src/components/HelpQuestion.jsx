import Icon from "./Icon";
import { useState } from "react";
import "./HelpQuestion.css";

export const HelpQuestion = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon name="helpQuestion" fill="currentColor" />
      {isTooltipVisible && (
        <figure className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded-md z-10">
          <p>¿Cómo podemos ayudarte?</p>
        </figure>
      )}
    </div>
  );
};
