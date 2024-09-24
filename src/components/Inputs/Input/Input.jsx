import PropTypes from "prop-types"

/**
 * Primary UI component for user interaction
 */
export const Input = ({ label, placeholder, type = 'text', required = false }) => {
    return (
        <label className="flex flex-col gap-[4px] text-[#0041A3] font-bold">
            <span>
                {
                    required
                        ? `${label} *`
                        : label
                }
            </span>
            <input required={required} type={type} placeholder={placeholder} className="outline-none rounded-md bg-white border-2 border-[#B0C4E2] p-[8px] placeholder:text-[#B0C4E2] font-normal focus:border-[#0041A3] focus:placeholder:text-[#0041A3]" />
        </label>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email']),
    required: PropTypes.bool
}

Input.defaultProps = {
    label: 'label',
    placeholder: 'placeholder',
    type: 'text',
    required: false
}