import { useState } from "react"
import PropTypes from "prop-types"

const CheckIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17ZM13.0203 7.45349C13.2155 7.25823 13.2155 6.94164 13.0203 6.74638C12.825 6.55112 12.5084 6.55112 12.3132 6.74638L8.00005 11.0595L5.68694 8.74638C5.49167 8.55112 5.17509 8.55112 4.97983 8.74638C4.78457 8.94164 4.78457 9.25823 4.97983 9.45349L7.6465 12.1202C7.84176 12.3154 8.15834 12.3154 8.3536 12.1202L13.0203 7.45349Z" fill="#0041A3" />
        </svg>

    )
}
const ArrowRightIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.85718 19.2458L8.4006 20.7249L17.4248 12.0767L8.4006 3.42847L6.85718 4.90758L14.338 12.0767L6.85718 19.2458Z" fill="#0041A3" />
        </svg>
    )
}

export const Card = ({ cardTitle, caption, open, showCaption, body, title, subTitle, showArrow }) => {
    const [isOpen, setIsOpen] = useState(false)


    const toggleCard = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <article className="flex cursor-pointer">
            <section className={`bg-background-secondary text-center rounded-lg flex flex-col gap-2 items-center p-4 min-w-[342px] max-w-[345px] justify-center `} onClick={toggleCard}>
                <header className="flex items-center justify-between gap-4">
                    <i><CheckIcon /></i>
                    <div className="text-primary-darkBlue-300 font-black flex flex-col items-start max-w-[238px] text-start">
                        {cardTitle}
                        {
                            showCaption ?
                                <p className="text-text-text text-xs font-light ">{caption}</p>
                                :
                                null
                        }
                    </div>
                    {
                        showArrow ?
                            <i className={`transform transition-transform duration-500 ${isOpen || open ? 'rotate-90' : 'rotate-0'}`}>
                                <ArrowRightIcon />
                            </i> :
                            null
                    }
                </header>
                <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen || open ? 'max-h-80' : 'max-h-0'}`}>
                    <div className="border-t border-neutral-400 flex flex-col gap-1 items-start justify-between text-start">
                        <div>
                            <h3 className="text-text-text font-bold">{title}</h3>
                            <p className="text-xs font-bold text-neutral-200 "> {subTitle} </p>
                        </div>
                        <p className=" text-text-text text-xs"> {body} </p>
                    </div>
                </div>
            </section>
        </article>
    )
}

Card.propTypes = {
    cardTitle: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    open: PropTypes.bool,
    showCaption: PropTypes.bool,
    showArrow: PropTypes.bool,
}