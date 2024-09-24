import { useState } from "react"
import './dropdown.css'
import PropTypes from "prop-types"

export const Dropdown = ({ title, subtitle, detailTitle, state, schedule, children, icon }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <details className="rounded-md bg-white appearance-none min-w-[512px] max-w-[512px]">
            <summary className="px-4 py-2 flex items-center justify-between appearance-none cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center gap-4">
                    {icon}
                    <div className="flex flex-col">
                        <strong className="font-bold text-2xl text-[#0041A3]">{title}</strong>
                        {subtitle}
                    </div>
                </div>
                <div className="pointer-events-none">
                    {
                        isOpen
                            ? <ChevronDown />
                            : <ChevronUp />
                    }
                </div>
            </summary>

            <article className="p-4">
                <div className="flex flex-col pt-4 gap-4 border-t-2">
                    <div className="text-light font-bold text-2xl text-gray-900">
                        {detailTitle} <br />
                        {
                            state === 'no comenzada'
                            ? <p className="text-[#EB5757]">{state}</p>
                            : state === 'en progreso'
                            ? <p className="text-[#FFCD00]">{state}</p>
                            : <p className="text-[#3BD4AE]">{state}</p>
                        }
                        {schedule}
                    </div>
                    {children}
                </div>
            </article>
        </details>
    )
}

export const DemoIcon = () => <svg width="32" height="32" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.2354 6.08299C14.4315 2.4717 11.309 0.857147 8.5729 0.857147C8.5729 0.857147 8.5729 0.857147 8.56518 0.857147C5.83681 0.857147 2.72199 2.4717 1.91044 6.07519C0.998407 10.0999 3.4408 13.5084 5.65131 15.6611C6.47059 16.4567 7.52175 16.8545 8.5729 16.8545C9.62406 16.8545 10.6752 16.4567 11.4868 15.6611C13.6973 13.5084 16.1397 10.1077 15.2354 6.08299ZM10.6984 8.46193H6.44741C6.13051 8.46193 5.86773 8.19673 5.86773 7.87694C5.86773 7.55715 6.13051 7.29196 6.44741 7.29196H10.6984C11.0153 7.29196 11.2781 7.55715 11.2781 7.87694C11.2781 8.19673 11.0153 8.46193 10.6984 8.46193Z" fill="#0041A3" />
</svg>

export const ChevronDown = () => <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.19706 5L9 10.3802L14.8029 5L16 6.10985L9 12.5999L2 6.10985L3.19706 5Z" fill="#0041A3" />
</svg>

export const ChevronUp = () => <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8028 13.0954L15.9999 11.9862L8.99988 5.50001L1.99988 11.9862L3.19693 13.0954L8.99988 7.71837L14.8028 13.0954Z" fill="#0041A3" />
</svg>

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    detailTitle: PropTypes.string,
    state: PropTypes.oneOf(['no comenzada', 'en progreso', 'completado']),
    schedule: PropTypes.string,
    children: PropTypes.string.isRequired,
    icon: PropTypes.element
}

Dropdown.defaultProps = {
    title: 'title',
    subtitle: 'subtitle',
    detailTitle: 'detail title',
    state: 'no comenzada',
    schedule: 'schedule',
    children: 'detail content',
    icon: <DemoIcon />
}