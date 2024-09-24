import { useState } from "react"
import { ChevronDown, ChevronUp } from "../../Dropdown/Dropdown"
import PropTypes from "prop-types"

export const Select = ({ label, required, defaultOption, options, name }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(defaultOption)

    const selectOption = (option) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

    return (
        <label className="flex flex-col gap-[4px] text-[#0041A3] font-bold min-w-[312px] max-w-[512px] w-full">
            <span>
                {
                    required
                        ? `${label} *`
                        : label
                }
            </span>
            <div onClick={() => setIsOpen(!isOpen)} className={`flex justify-between items-center rounded-md ${!isOpen ? 'transition-colors hover:bg-slate-200' : ''} bg-white border-2 ${isOpen ? 'border-[#0041A3]' : 'border-[#B0C4E2]'} p-[8px] font-normal cursor-pointer`}>
                {selectedOption}
                {
                    isOpen
                        ? <ChevronUp />
                        : <ChevronDown />
                }
            </div>
            {
                isOpen &&
                <ul className={`rounded-md overflow-hidden bg-white border-2 ${isOpen ? 'border-[#0041A3]' : 'border-[#B0C4E2]'} cursor-pointer font-normal divide-y-2`}>
                    <li className="transition-colors p-[8px] cursor-pointer hover:bg-slate-200" onClick={() => selectOption(defaultOption)}>{defaultOption}</li>
                    {
                        options.map(option => <li className="transition-colors p-[8px] cursor-pointer hover:bg-slate-200" onClick={() => selectOption(option)}>{option}</li>)
                    }
                </ul>
            }
            <select className="hidden" value={selectedOption} name={name} id={name}></select>
        </label>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
    defaultOption: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
}

Select.defaultProps = {
    label: 'Label',
    required: false,
    defaultOption: 'Default Option',
    options: ['Option 1', 'Option 2', 'Option 3'],
    name: 'Select'
}