import PropTypes from "prop-types"

const CheckIcon = () => {

    return (
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.50001 12.7777C9.69098 12.7777 12.2778 10.1909 12.2778 6.99995C12.2778 3.80897 9.69098 1.22217 6.50001 1.22217C3.30903 1.22217 0.722229 3.80897 0.722229 6.99995C0.722229 10.1909 3.30903 12.7777 6.50001 12.7777ZM9.40354 5.88302C9.54456 5.742 9.54456 5.51336 9.40354 5.37233C9.26251 5.23131 9.03387 5.23131 8.89285 5.37233L5.77782 8.48736L4.10724 6.81678C3.96622 6.67575 3.73757 6.67575 3.59655 6.81678C3.45553 6.9578 3.45553 7.18644 3.59655 7.32747L5.52248 9.25339C5.6635 9.39441 5.89214 9.39441 6.03317 9.25339L9.40354 5.88302Z" fill="#CCCCCC" />
        </svg>

    )
}


export const TrackingCard = ({ activity, progress }) => {
    return (
        <article className="flex">
            <header>
                <h2 className="text-primary-darkBlue-300 font-black">
                    Seguimiento de ejecución
                </h2>
                <section className="bg-background-secondary rounded-lg flex flex-col gap-2 items-center py-6 px-4">
                    <div className="flex items-center justify-between w-full">
                        <h2 className="text-primary-darkBlue-300 font-black"> {activity} </h2>
                        <i> <CheckIcon /> </i>
                    </div>
                    <div className="bg-neutral-200 w-[310px] h-2 rounded-full" >
                        <div className={`${progress == 100 ? 'bg-system-successColor' : progress == 60 ? 'bg-system-warningColor' : 'bg-system-errorColor'} h-full rounded-full`} style={{
                        width : `${progress}%`
                    }}></div>
                    </div>
                    <p className='text-text-text text-xs w-full'>Faltan 2 actividades</p>
                </section>
            </header>
        </article>
    )
}


TrackingCard.propTypes = {
    activity : PropTypes.string.isRequired,
    progress : PropTypes.oneOf([10, 60, 100]).isRequired
}