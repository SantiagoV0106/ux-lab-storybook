import PropTypes from "prop-types"

/**
 * Primary UI component for user interaction
 */

export const TextArea = ({ label, placeholder, required = false }) => {
    return (
        <label className="flex flex-col gap-[4px] text-[#0041A3] font-bold min-w-[600px]">
            <span>
                {
                    required
                        ? `${label} *`
                        : label
                }
            </span>
            <textarea required={required} placeholder={placeholder} className="outline-none rounded-md bg-white border-2 border-[#B0C4E2] p-[8px] placeholder:text-[#B0C4E2] font-normal min-h-[120px] focus:border-[#0041A3] focus:placeholder:text-[#0041A3] resize-none" />
        </label>
    )
}

TextArea.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
}

TextArea.defaultProps = {
    label: 'label',
    placeholder: 'placeholder',
    required: false
}