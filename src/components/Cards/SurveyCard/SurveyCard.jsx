import PropTypes from "prop-types"

const ArrowIcon = () => {

    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.9845 19.7458L8.52792 21.2249L17.5522 12.5767L8.52792 3.92847L6.9845 5.40758L14.4653 12.5767L6.9845 19.7458Z" fill="#0041A3" />
        </svg>
    )
}

export const SurveyCard = ({ progress, formName, executed, showProgressBar, showMeta }) => {
    return (
        <article className="flex">
            <section className="bg-background-secondary rounded-lg flex items-center gap-6 py-2 px-4 min-w-[345px] justify-between">
                <div className="flex flex-col gap-2 w-full">
                    <header className="flex justify-between">
                        <p className="text-text-text text-xs">Obligatorio</p>
                        <p className="text-text-text text-xs">5 Preguntas</p>
                    </header>
                    <div className="flex items-center justify-between w-full">
                        <h2 className="text-primary-darkBlue-300 text-sm font-bold w-1/2"> {formName} </h2>
                    </div>
                    {
                        showProgressBar ?
                            <div className="bg-neutral-200 w-[265px] h-2 rounded-full" >
                                <div className={`${progress == 100 ? 'bg-system-successColor' : progress == 60 ? 'bg-system-warningColor' : 'bg-system-errorColor'} h-full rounded-full`} style={{
                                    width: `${progress}%`
                                }}></div>
                            </div>
                            :
                            null

                    }
                    <div className="flex justify-between">
                        <p className='text-text-text text-xs w-full'>Ejecutado: <span className="font-bold">{executed} veces</span></p>
                        {
                            showMeta ?
                                <p className='text-text-text text-xs w-full text-end'>Meta 36</p>
                                :
                                null
                        }
                    </div>
                </div>
                <i><ArrowIcon /></i>
            </section>
        </article>
    )
}

SurveyCard.propTypes = {
    formName: PropTypes.string.isRequired,
    progress: PropTypes.oneOf([10, 60, 100]).isRequired,
    executed: PropTypes.number,
    showProgressBar : PropTypes.bool.isRequired,
    showMeta : PropTypes.bool.isRequired
}