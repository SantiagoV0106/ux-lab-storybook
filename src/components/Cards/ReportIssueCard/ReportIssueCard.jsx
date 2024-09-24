import PropTypes from "prop-types"
import { Checkbox } from "../../Controls/Checkbox"

const PlayIcon = ({color}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7456 1.14282H7.12183C3.37597 1.14282 1.14285 3.37594 1.14285 7.1218V15.7352C1.14285 19.4914 3.37597 21.7245 7.12183 21.7245H15.7353C19.4811 21.7245 21.7142 19.4914 21.7142 15.7455V7.1218C21.7245 3.37594 19.4914 1.14282 15.7456 1.14282ZM14.1711 13.214L12.8538 13.9755L11.5366 14.737C9.83862 15.7147 8.44935 14.912 8.44935 12.9567V11.4337V9.91062C8.44935 7.94507 9.83862 7.15267 11.5366 8.1303L12.8538 8.89183L14.1711 9.65335C15.869 10.631 15.869 12.2363 14.1711 13.214Z" fill={color} />
        </svg>

    )
}

const ArrowRightIcon = () => {
       
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.85715 19.2458L8.40057 20.7249L17.4248 12.0767L8.40057 3.42847L6.85715 4.90758L14.338 12.0767L6.85715 19.2458Z" fill="#0041A3" />
        </svg>

    )
}

export const ReportIssueCard = ({disable}) => {
    return (
        <article className="flex">
            <section className={`bg-background-secondary rounded-lg  py-4 px-6 min-w-[395px]`}>
                <div className="flex gap-5 justify-between items-center" >
                    <i><PlayIcon color={disable ? '#737373' : '#0041A3' } /></i>
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                            <p className="text-neutral-800 font-bold">Reportar novedades</p>
                            <p className="text-neutral-800 text-xs">Reportar novedades</p>
                        </div>
                    </div>
                    <div className={`flex justify-end items-center flex-1 gap-2`}>
                        <Checkbox state="enabled" />
                        <i><ArrowRightIcon /></i>
                    </div>
                </div>
            </section>
        </article>
    )
}

PlayIcon.propTypes = {
    color : PropTypes.string
}

ReportIssueCard.propTypes = {
    disable : PropTypes.bool
}