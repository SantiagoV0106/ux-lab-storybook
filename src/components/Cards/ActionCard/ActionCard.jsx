import PropTypes from "prop-types"

const ArrowRightIcon = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 11.2268L4.90033 12.0896L10.1645 7.04481L4.90033 2L4 2.86282L8.36381 7.04481L4 11.2268Z" fill="#0041A3" />
        </svg>
    )
}

export const ActionCard = ({ title, body }) => {
    return (
        <article className="flex">
            <section className={` bg-background-secondary rounded-lg flex flex-col justify-between gap-5 p-4 w-[346px]`} >
                <div>
                    <h2 className="text-primary-darkBlue-500 font-bold" >{title}</h2>
                    <p className="text-xs" >{body}</p>
                </div>
                <button className="text-primary-darkBlue-500 text-sm font-bold flex items-center gap-1 self-end">
                    Ingresar
                    <span>
                        <i><ArrowRightIcon /></i>
                    </span>
                </button>
            </section>
        </article>
    )
}

ActionCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}