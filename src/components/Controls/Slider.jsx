import PropTypes from 'prop-types';
import { useState } from 'react';

export const StepSlider = ({title}) => {
    const [sliderValue, setSliderValue] = useState(1);

    // Manejador de cambio en el valor del slider
    const handleSliderChange = (e) => {
        setSliderValue(Number(e.target.value));
    };

    return (
        <div className="flex flex-col w-fit">
            <h2 className="text-xs font-bold mb-2 text-primary-darkBlue-500">{title}</h2>
            <div className="w-full min-w-[355px]">
                {/* Contenedor del slider */}
                <input
                    type="range"
                    min="1"
                    max="5"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                        background: `linear-gradient(to right, #0041A3 ${(sliderValue - 1) * 25}%, #B8B8B8 ${(sliderValue - 1) * 25}%)`
                    }}
                />
                {/* Puntos que indican los pasos */}
                <div className="flex justify-between mt-2">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <span
                            key={step}
                            className="text-xs text-text-caption"
                        >
                            {step}
                        </span>
                    ))}
                </div>
            </div>
            {/* Aquí están los estilos para el thumb (círculo) */}
            <style>
                {`
          input[type='range']::-webkit-slider-thumb {
            appearance: none;
            height: 24px;
            width: 24px;
            background: white;
            border: 2px solid #0041A3;
            border-radius: 50%;
            cursor: pointer;
          }

          input[type='range']::-moz-range-thumb {
            height: 24px;
            width: 24px;
            background: white;
            border: 2px solid #0041A3;
            border-radius: 50%;
            cursor: pointer;
          }

          input[type='range']::-ms-thumb {
            height: 24px;
            width: 24px;
            background: white;
            border: 2px solid #0041A3;
            border-radius: 50%;
            cursor: pointer;
          }
        `}
            </style>
        </div>
    );
};

StepSlider.propTypes = {
    title : PropTypes.string.isRequired
}
